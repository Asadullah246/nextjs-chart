import { SliceComponentProps } from "@prismicio/react/dist/SliceZone";
import { FC } from "react";

import { Section } from "src/core/section/section";
import { PrismicPricingContext } from "src/pages/pricing/types";
import { BlogPostsCarousel } from "src/shared/blogPostsCarousel";

import { PricingDocumentDataBodyBlogPostsSlice } from "lib/types.generated";

export const BlogPostsSlice: FC<
  SliceComponentProps<PricingDocumentDataBodyBlogPostsSlice, PrismicPricingContext>
> = ({ context: { pricingBlogPosts } }) =>
  pricingBlogPosts ? (
    <Section variant="light">
      <BlogPostsCarousel posts={pricingBlogPosts} />
    </Section>
  ) : null;
