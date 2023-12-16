import { SliceZone } from "@prismicio/react";
import { FC } from "react";

import { BlogPostsSlice } from "src/pages/pricing/blogPosts";
import { ComparisonSlice } from "src/pages/pricing/comparison";
import { FAQSlice } from "src/pages/pricing/faq";
import { FeesDetail } from "src/pages/pricing/feesDetail";
import { IntroSlice } from "src/pages/pricing/intro";
import { PrismicPricingContext } from "src/pages/pricing/types";
import { ReadyToInvest } from "src/shared/slices/readyToInvest";

import { PricingDocument } from "lib/types.generated";

interface Props extends PrismicPricingContext {
  doc: PricingDocument;
}

export const Pricing: FC<Props> = ({ doc, faqItems, pricingBlogPosts }) => (
  <SliceZone
    slices={doc.data.body}
    components={{
      intro: IntroSlice,
      comparison: ComparisonSlice,
      fee_details: FeesDetail,
      blog_posts: BlogPostsSlice,
      faq: FAQSlice,
      ready_to_invest: ReadyToInvest
    }}
    context={{ faqItems, pricingBlogPosts }}
  />
);
