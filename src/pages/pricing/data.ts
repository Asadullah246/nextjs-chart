import { Client, Content, isFilled } from "@prismicio/client";

import { PricingBlogPost } from "src/pages/pricing/types";

import { Locale } from "lib/languages";
import { AllDocumentTypes, PricingDocumentDataBodyBlogPostsSliceItem } from "lib/types.generated";

export const getPricingBlogPostsData = async (
  results: AllDocumentTypes[],
  doc: Content.PricingDocument,
  client: Client<AllDocumentTypes>,
  locale: Locale
): Promise<PricingBlogPost[]> => {
  const authors = await client.getAllByType("authors", {
    lang: locale.ietf
  });
  const blogPostsSlice = doc.data.body.find((s) => s.slice_type === "blog_posts");
  const posts: PricingBlogPost[] = [];

  (blogPostsSlice?.items as PricingDocumentDataBodyBlogPostsSliceItem[]).forEach(
    ({ blog_post }) => {
      const post = results.find(
        (r): r is Content.BlogPostDocument =>
          isFilled.contentRelationship(blog_post) && r.id === blog_post.id
      );
      const author = authors.find(
        (a) => isFilled.contentRelationship(post?.data.author) && a.id === post?.data.author.id
      );

      if (post && author) {
        posts.push({
          isFeatured: false,
          post,
          author
        });
      }
    }
  );

  return posts;
};
