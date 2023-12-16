import { BlogOverviewPagePost } from "src/pages/blog/overview/types";
import { FAQCategoryItem, FAQCategorySubcategory } from "src/pages/faq/category/types";
import { FAQItemRelatedCategory, FAQItemRelatedItem } from "src/pages/faq/item/types";
import { FAQOverviewCategory } from "src/pages/faq/overview/types";
import { PricingBlogPost } from "src/pages/pricing/types";
import { FaqItem } from "src/shared/faqItems";

import {
  AllDocumentTypes,
  AuthorsDocument,
  KnowledgeNavigationDocument,
  PressReleaseDocument
} from "lib/types.generated";

export type DefaultPageProps<T> = Readonly<{
  languageAlternates: { url: string; lang: string }[];
  doc: T;
}>;

export type PageProps = DefaultPageProps<AllDocumentTypes> & {
  pressReleaseDocs?: PressReleaseDocument[];
  knowledgeNavigation?: KnowledgeNavigationDocument;
  faqOverviewCategories?: FAQOverviewCategory[];
  faqCategoryItems?: FAQCategoryItem[];
  faqCategorySubcategories?: FAQCategorySubcategory[];
  faqItemCategory?: FAQItemRelatedCategory;
  faqItemRelatedItems?: FAQItemRelatedItem[];
  faqItems?: FaqItem[];
  pricingBlogPosts?: PricingBlogPost[];
  postsCount?: number;
  postDocs?: BlogOverviewPagePost[];
  authorDoc?: AuthorsDocument | null;
  openJobPositions?: string;
};

export type Slugs = [string, string] | [string, string, string] | [string] | [];
