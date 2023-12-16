import dynamic from "next/dynamic";
import { FC } from "react";
import { useInView } from "react-intersection-observer";

import { BlogPostsSliceProps } from "src/pages/home/blogPostsSlice";

const BlogPostsSlice = dynamic<BlogPostsSliceProps>(() =>
  import("src/pages/home/blogPostsSlice").then((mod) => mod.BlogPostsSlice)
);

export const BlogPostsSliceContainer: FC<BlogPostsSliceProps> = (props) => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return <div ref={ref}>{inView && <BlogPostsSlice {...props} />}</div>;
};
