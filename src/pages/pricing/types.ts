import { FaqItem } from "src/shared/faqItems";

import { AuthorsDocument, BlogPostDocument } from "lib/types.generated";

export interface PrismicPricingContext {
  faqItems?: FaqItem[];
  pricingBlogPosts?: PricingBlogPost[];
}

export interface PricingBlogPost {
  isFeatured: boolean;
  post: BlogPostDocument;
  author: AuthorsDocument;
}
