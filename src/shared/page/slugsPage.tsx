import { NextPage } from "next";
import dynamic from "next/dynamic";

import { PageProps } from "src/shared/types";

import { AllDocumentTypes, PagesDocument } from "lib/types.generated";

/**
 * For every docType that is listed here Next.js will (try) to create a page.
 * If you add a new page make sure to list it here.
 */
export const ACTIVE_DOC_TYPES: AllDocumentTypes["type"][] = [
  "homepage",
  "pages",
  "about_us",
  "who_is_it_for",
  "why_true_wealth",
  "how_it_works",
  "contact",
  "jobs",
  "culture",
  "sustainable_investment",
  "press",
  "press_release",
  "pricing",
  "knowledge",
  "faq_overview",
  "faq_category",
  "faq_item",
  "child_portfolio",
  "pillar_3a",
  "pillar_3a_tax_saving_calculator",
  "blog",
  "blog_post",
  "referral_invitation",
  "bond_price_calculator",
  "compound_interest_calculator"
];

const Home = dynamic(() => import("src/pages/home/home").then((mod) => mod.Home));
const FAQOverview = dynamic(() =>
  import("src/pages/faq/overview/faqOverview").then((mod) => mod.FAQOverview)
);
const FAQCategory = dynamic(() =>
  import("src/pages/faq/category/faqCategory").then((mod) => mod.FAQCategory)
);
const FAQItem = dynamic(() => import("src/pages/faq/item/faqItem").then((mod) => mod.FAQItem));
const ChildPortfolio = dynamic(() =>
  import("src/pages/childPortfolio/childPortfolio").then((mod) => mod.ChildPortfolio)
);
const Pillar3a = dynamic(() => import("src/pages/pillar3a/pillar3a").then((mod) => mod.Pillar3a));
const Pillar3aTaxSavingsCalculator = dynamic(() =>
  import("src/pages/pillar3aTaxSavings/pillar3aTaxSavingsCalculator").then(
    (mod) => mod.Pillar3aTaxSavingsCalculator
  )
);
const Jobs = dynamic(() => import("src/pages/jobs/jobs").then((mod) => mod.Jobs));
const Culture = dynamic(() => import("src/pages/culture/culture").then((mod) => mod.Culture));
const AboutUs = dynamic(() => import("src/pages/aboutUs/aboutUs").then((mod) => mod.AboutUs));
const Generic = dynamic(() => import("src/pages/generic/generic").then((mod) => mod.Generic));
const HowItWorks = dynamic(() =>
  import("src/pages/howItWorks/howItWorks").then((mod) => mod.HowItWorks)
);
const Knowledge = dynamic(() =>
  import("src/pages/knowledge/knowledge").then((mod) => mod.Knowledge)
);
const PressDetailView = dynamic(() =>
  import("src/pages/press/detailView/pressDetailView").then((mod) => mod.PressDetailView)
);
const PressOverview = dynamic(() =>
  import("src/pages/press/overview/pressOverview").then((mod) => mod.PressOverview)
);
const Pricing = dynamic(() => import("src/pages/pricing/pricing").then((mod) => mod.Pricing));
const SustainableInvestment = dynamic(() =>
  import("src/pages/sustainableInvestment/sustainableInvestment").then(
    (mod) => mod.SustainableInvestment
  )
);
const ContactSlices = dynamic(() => import("src/pages/contact/contact").then((mod) => mod.Contact));
const BlogOverview = dynamic(() =>
  import("src/pages/blog/overview/blogOverview").then((mod) => mod.BlogOverview)
);
const BlogDetailView = dynamic(() =>
  import("src/pages/blog/detailView/blogDetailView").then((mod) => mod.BlogDetailView)
);
const WhyTrueWealth = dynamic(() =>
  import("src/pages/whyTrueWealth/whyTrueWealth").then((mod) => mod.WhyTrueWealth)
);
const WhoIsItFor = dynamic(() =>
  import("src/pages/whoIsItFor/whoIsItFor").then((mod) => mod.WhoIsItFor)
);
const BondPriceCalculator = dynamic(() =>
  import("src/pages/bondPriceCalculator/bondPriceCalculator").then((mod) => mod.BondPriceCalculator)
);
const CompoundInterestCalculator = dynamic(() =>
  import("src/pages/compoundInterestCalculator/compoundInterestCalculator").then(
    (mod) => mod.CompoundInterestCalculator
  )
);


export const SlugsPage: NextPage<PageProps> = ({
  doc,
  pressReleaseDocs,
  faqOverviewCategories,
  faqCategoryItems,
  faqCategorySubcategories,
  faqItemRelatedItems,
  faqItemCategory,
  faqItems,
  pricingBlogPosts,
  postDocs,
  postsCount,
  authorDoc,
  openJobPositions
}) => {
  if (doc.type === "about_us") {
    return <AboutUs doc={doc} />;
  } else if (doc.type === "who_is_it_for") {
    return <WhoIsItFor doc={doc} />;
  } else if (doc.type === "why_true_wealth") {
    return <WhyTrueWealth doc={doc} />;
  } else if (doc.type === "how_it_works") {
    return <HowItWorks doc={doc} />;
  } else if (doc.type === "contact") {
    return <ContactSlices doc={doc} />;
  } else if (doc.type === "sustainable_investment") {
    return <SustainableInvestment doc={doc} />;
  } else if (doc.type === "press") {
    return <PressOverview doc={doc} pressReleaseDocs={pressReleaseDocs} />;
  } else if (doc.type === "press_release") {
    return <PressDetailView doc={doc} />;
  } else if (doc.type === "pricing") {
    return <Pricing doc={doc} faqItems={faqItems} pricingBlogPosts={pricingBlogPosts} />;
  } else if (doc.type === "knowledge") {
    return <Knowledge doc={doc} />;
  } else if (doc.type === "faq_overview") {
    return <FAQOverview doc={doc} faqOverviewCategories={faqOverviewCategories} />;
  } else if (doc.type === "faq_category") {
    return (
      <FAQCategory
        doc={doc}
        faqCategorySubcategories={faqCategorySubcategories}
        faqCategoryItems={faqCategoryItems}
      />
    );
  } else if (doc.type === "faq_item") {
    return (
      <FAQItem
        doc={doc}
        faqItemCategory={faqItemCategory}
        faqItemRelatedItems={faqItemRelatedItems}
      />
    );
  } else if (doc.type === "jobs") {
    return <Jobs doc={doc} openJobPositions={openJobPositions} />;
  } else if (doc.type === "culture") {
    return <Culture doc={doc} />;
  } else if (doc.type === "child_portfolio") {
    return <ChildPortfolio doc={doc} faqItems={faqItems} />;
  } else if (doc.type === "pillar_3a") {
    return <Pillar3a doc={doc} faqItems={faqItems} />;
  } else if (doc.type === "blog") {
    return <BlogOverview posts={postDocs} postsCount={postsCount} />;
  } else if (doc.type === "blog_post") {
    return <BlogDetailView doc={doc} authorDoc={authorDoc} />;
  } else if (doc.type === "homepage") {
    return <Home doc={doc} postDocs={postDocs} />;
  } else if (doc.type === "bond_price_calculator") {
    return <BondPriceCalculator doc={doc} />;
  } else if (doc.type === "pillar_3a_tax_saving_calculator") {
    return <Pillar3aTaxSavingsCalculator doc={doc} />;
  }
  else if (doc.type === "compound_interest_calculator") {
    return <CompoundInterestCalculator doc={doc} 
     />;
  }

  return <Generic doc={doc as PagesDocument} />;
};
