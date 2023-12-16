import { AuthorsDocument, BlogPostDocument } from "lib/types.generated";

export interface BlogOverviewPagePost {
  post: BlogPostDocument;
  author: AuthorsDocument | null;
}
