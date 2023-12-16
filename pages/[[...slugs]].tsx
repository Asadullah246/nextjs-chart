import { asText, filter, isFilled } from "@prismicio/client";
import { GetStaticPaths, GetStaticProps } from "next";
import { PreviewData } from "pages/api/preview";

import { getBlogPostAuthor, getBlogPostsWithAuthor } from "src/pages/blog/data";
import { POSTS_PER_PAGE } from "src/pages/blog/overview/config";
import { getFaqCategoryData } from "src/pages/faq/category/data";
import { getFaqItemData } from "src/pages/faq/item/data";
import { DEFAULT_POSTS_AMOUNT } from "src/pages/home/config";
import { getOpenJobPositions } from "src/pages/jobs/data";
import { getKnowledgeNavigation } from "src/pages/knowledge/data";
import { getPricingBlogPostsData } from "src/pages/pricing/data";
import { fetchPages } from "src/shared/data";
import { convertFaqSliceItems } from "src/shared/faqUtils";
import { SlugsPage } from "src/shared/page/slugsPage";
import { readPagesFromFs, writePagesToFs } from "src/shared/tmpPages";
import { PageProps, Slugs } from "src/shared/types";

import { getLocaleFromString, LocaleISO, LOCALES } from "lib/languages";
import { createClient } from "lib/prismic/config";
import {
  getBlogRootName,
  getFAQRootName,
  getKnowledgeRootName,
  getPressRootName,
  hrefResolver
} from "lib/routes";
import {
  AllDocumentTypes,
  ChildPortfolioDocumentDataBodyFaqSlice,
  FaqCategoryDocument,
  HomepageDocumentDataBodyBlogPostsSlice,
  Pillar3aDocumentDataBodyFaqSlice,
  PricingDocumentDataBodyFaqSlice
} from "lib/types.generated";
import { truncate } from "lib/utils";

export const getStaticPaths: GetStaticPaths<{ slugs: Slugs }> = async () => {
  const client = createClient();
  // TODO once the old fees page was archived we can remove the filter here
  const results = (await fetchPages(client)).filter(
    (r) => !(r.type === "knowledge" && ["fees", "gebuehren", "frais-de-gestion"].includes(r.uid))
  );

  writePagesToFs(results);

  return {
    paths: results.flatMap((doc) => {
      const localeIso = getLocaleFromString(doc.lang).iso;

      return {
        params: {
          slugs: getSlugs(doc, localeIso)
        },
        locale: localeIso
      };
    }),
    fallback: false
  };
};

export const getStaticProps: GetStaticProps<PageProps, { slugs: Slugs }, PreviewData> = async ({
  params,
  locale: contextLocale,
  preview,
  previewData
}) => {
  const client = createClient({ previewData });
  const slugs = params?.slugs;
  const previewDocumentId = previewData?.id;
  const locale = contextLocale ? LOCALES[contextLocale] : null;
  const results = await readPagesFromFs(client);

  let doc = results?.find(
    (result) => hrefResolver(result) === `/${locale?.iso}${slugs ? `/${slugs.join("/")}` : ""}`
  );

  if (preview && previewDocumentId && (previewDocumentId === doc?.id || !doc?.id)) {
    doc = await client.getByID<AllDocumentTypes>(previewDocumentId, {
      lang: locale?.ietf
    });
  }

  if (!doc) {
    return {
      // This tells Next.js to render the 404 error page
      notFound: true
    };
  }

  const languageAlternates = [
    {
      url: hrefResolver(doc),
      lang: doc.lang
    }
  ];

  doc.alternate_languages?.forEach((alternate) => {
    const alternateDoc = results.find((r) => r.id === alternate.id && r.type === doc?.type);
    if (alternateDoc) {
      languageAlternates.push({
        url: hrefResolver({ ...alternateDoc, lang: alternateDoc.lang }),
        lang: alternateDoc.lang
      });
    }
  });

  const props: PageProps = {
    doc,
    languageAlternates
  };

  // Additional data that is needed for certain doctypes
  if (locale) {
    if (doc.type === "homepage" && isFilled.sliceZone(doc.data.body)) {
      const blogPostsSlice = doc?.data.body?.find(
        (el): el is HomepageDocumentDataBodyBlogPostsSlice => el.slice_type === "blog_posts"
      );

      const { postDocs } = await getBlogPostsWithAuthor({
        client,
        pageSize: blogPostsSlice?.primary.posts_amount ?? DEFAULT_POSTS_AMOUNT,
        locale,
        predicates: [filter.at("document.tags", ["Featured"])]
      });
      props.postDocs = postDocs;
    } else if (doc.type === "press") {
      const pressReleases = await client.getAllByType("press_release", {
        orderings: { field: "my.press_release.date" },
        lang: locale.ietf
      });
      props.pressReleaseDocs = pressReleases;
    } else if (doc.type === "knowledge") {
      const knowledgeNavigation = await getKnowledgeNavigation(client, locale);
      props.knowledgeNavigation = knowledgeNavigation;
    } else if (doc.type === "faq_overview") {
      props.faqOverviewCategories = results
        .filter(
          (r): r is FaqCategoryDocument => r.type === "faq_category" && r.lang === locale.ietf
        )
        .map((r) => ({
          title: asText(r.data.title),
          description: asText(r.data.description),
          icon: r.data.icon.url ?? null,
          link: {
            uid: r.uid ?? "",
            url: r.url ?? "",
            lang: r.lang ?? ""
          }
        }));
    } else if (doc.type === "faq_category") {
      const { faqCategoryItems, faqCategorySubcategories } = getFaqCategoryData(
        results,
        doc,
        locale
      );
      props.faqCategoryItems = faqCategoryItems;
      props.faqCategorySubcategories = faqCategorySubcategories;
    } else if (doc.type === "faq_item") {
      const { faqItemCategory, faqItemRelatedItems } = getFaqItemData(results, doc, locale);
      props.faqItemCategory = faqItemCategory;
      props.faqItemRelatedItems = faqItemRelatedItems;

      if (!doc.data.seo_title) {
        doc.data.seo_title = asText(doc.data.question);
      }
      if (!doc.data.seo_description) {
        doc.data.seo_description = truncate(asText(doc.data.answer), 160);
      }
    } else if (doc.type === "blog") {
      const { postDocs, postsCount } = await getBlogPostsWithAuthor({
        client,
        pageSize: POSTS_PER_PAGE,
        locale
      });

      props.postDocs = postDocs;
      props.postsCount = postsCount;
    } else if (doc.type === "blog_post") {
      if (isFilled.contentRelationship(doc.data.author)) {
        const authorId = doc.data.author?.id;
        const authorDoc = authorId ? await getBlogPostAuthor(client, authorId, locale) : null;
        props.authorDoc = authorDoc ?? null;
      }
    } else if (doc.type === "jobs") {
      props.openJobPositions = await getOpenJobPositions();
    } else if (doc.type === "child_portfolio" && isFilled.sliceZone(doc.data.body)) {
      const faqSlice = doc.data.body.find(
        (s): s is ChildPortfolioDocumentDataBodyFaqSlice => s.slice_type === "faq"
      );
      props.faqItems = convertFaqSliceItems(results, faqSlice?.items);
      // We mutate the Prismic document to not send unnecessary data to the client (this reduces page size)
      if (faqSlice) {
        faqSlice.items = [];
      }
    } else if (doc.type === "pillar_3a" && isFilled.sliceZone(doc.data.body)) {
      const faqSlice = doc.data.body.find(
        (s): s is Pillar3aDocumentDataBodyFaqSlice => s.slice_type === "faq"
      );
      props.faqItems = convertFaqSliceItems(results, faqSlice?.items);
      // We mutate the Prismic document to not send unnecessary data to the client (this reduces page size)
      if (faqSlice) {
        faqSlice.items = [];
      }
    } else if (doc.type === "pricing" && isFilled.sliceZone(doc.data.body)) {
      const faqSlice = doc.data.body.find(
        (s): s is PricingDocumentDataBodyFaqSlice => s.slice_type === "faq"
      );
      props.faqItems = convertFaqSliceItems(results, faqSlice?.items);
      props.pricingBlogPosts = await getPricingBlogPostsData(results, doc, client, locale);
    }
  }

  return {
    props
  };
};

const getSlugs = (doc: AllDocumentTypes, localeIso: LocaleISO): Slugs => {
  const { uid, type } = doc;

  if (!uid) {
    // For the home page we don't have an uid
    return [];
  }

  switch (type) {
    case "press_release":
      return [getPressRootName(localeIso), uid];
    case "faq_category":
      return [getFAQRootName(), uid];
    case "faq_item":
      const categoryUid = isFilled.contentRelationship(doc.data.category)
        ? doc.data.category.uid
        : null;
      if (!categoryUid) {
        throw Error(`No faq category for ${uid}`);
      }
      return [getFAQRootName(), categoryUid, uid];
    case "knowledge":
      return uid === getKnowledgeRootName(localeIso)
        ? [uid]
        : [getKnowledgeRootName(localeIso), uid];
    case "blog_post":
      return [getBlogRootName(), uid];
    default:
      return [uid];
  }
};

export default SlugsPage;
