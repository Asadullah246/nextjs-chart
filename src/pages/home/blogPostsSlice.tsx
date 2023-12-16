import { SliceComponentProps } from "@prismicio/react";
import React, { FC } from "react";

import { Section } from "src/core/section/section";
import { HomepageContext } from "src/pages/home/types";
import { BlogPostsCarousel } from "src/shared/blogPostsCarousel";

import { HomepageDocumentDataBodyBlogPostsSlice } from "lib/types.generated";

export type BlogPostsSliceProps = SliceComponentProps<
  HomepageDocumentDataBodyBlogPostsSlice,
  HomepageContext
>;

export const BlogPostsSlice: FC<BlogPostsSliceProps> = ({ context: { postDocs } }) => {
  if (!postDocs || postDocs.length === 0) {
    return null;
  }
  return (
    <Section>
      <BlogPostsCarousel posts={postDocs} />
    </Section>
  );
};
