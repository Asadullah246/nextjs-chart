import { asText, isFilled } from "@prismicio/client";

import { FAQCategoryItem, FAQCategorySubcategory } from "src/pages/faq/category/types";

import { Locale } from "lib/languages";
import { AllDocumentTypes, FaqCategoryDocument, FaqItemDocument } from "lib/types.generated";

export const getFaqCategoryData = (
  results: AllDocumentTypes[],
  doc: FaqCategoryDocument,
  locale: Locale
): { faqCategoryItems: FAQCategoryItem[]; faqCategorySubcategories: FAQCategorySubcategory[] } => {
  const subcategories = doc.data.body;
  const categoryItems = results.filter(
    (r): r is FaqItemDocument =>
      r.type === "faq_item" && r.lang === locale.ietf && !!r.url?.includes(`/${doc?.uid}/`)
  );

  if (subcategories && subcategories.length > 0) {
    const faqCategorySubcategories = subcategories.map((subcategory) => ({
      heading: asText(subcategory.primary.heading) ?? "",
      items: subcategory.items.map(({ faq_item }) => ({
        question:
          asText(
            categoryItems.find(
              (c) => isFilled.contentRelationship(faq_item) && c.uid === faq_item?.uid
            )?.data.question
          ) ?? "",
        url: isFilled.contentRelationship(faq_item) ? faq_item.url ?? "" : ""
      }))
    }));

    return { faqCategoryItems: [], faqCategorySubcategories };
  } else {
    return {
      faqCategoryItems: categoryItems.map((r) => ({
        label: asText(r.data.question),
        link: {
          uid: r.uid ?? "",
          url: r.url ?? "",
          lang: r.lang ?? ""
        }
      })),
      faqCategorySubcategories: []
    };
  }
};
