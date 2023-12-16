import { Client, filter, isFilled } from "@prismicio/client";

import { BlogOverviewPagePost } from "src/pages/blog/overview/types";

import { Locale } from "lib/languages";
import { AllDocumentTypes, AuthorsDocument, BlogPostDocument } from "lib/types.generated";

export const getBlogPostsWithAuthor = async ({
  client,
  pageSize,
  locale,
  predicates = [],
  page = 1
}: {
  client: Client<AllDocumentTypes>;
  pageSize: number;
  locale: Locale;
  predicates?: string[];
  page?: number;
}): Promise<{
  postsCount: number;
  postDocs: BlogOverviewPagePost[];
}> => {
  const blogPosts = await client.get<BlogPostDocument>({
    predicates: [filter.at("document.type", "blog_post"), ...predicates],
    pageSize,
    page,
    lang: locale.ietf,
    orderings: { field: "my.blog_post.publishing_date", direction: "desc" }
  });

  const postDocs = await Promise.all(
    blogPosts.results.map(async (post) => {
      const author = isFilled.contentRelationship(post.data.author)
        ? await getBlogPostAuthor(client, post.data.author.id, locale)
        : null;

      return {
        post,
        author
      };
    })
  );

  return {
    postsCount: blogPosts.total_results_size,
    postDocs
  };
};

export const getBlogPostAuthor = (
  client: Client<AllDocumentTypes>,
  authorId: string,
  locale: Locale
) =>
  client.getByID<AuthorsDocument>(authorId, {
    lang: locale.ietf
  });
