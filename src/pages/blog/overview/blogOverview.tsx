import { filter } from "@prismicio/client";
import { Button, Spinner } from "@true-wealth/ui-core";
import classNames from "classnames";
import { useRouter } from "next/router";
import React, { FC, useEffect, useState } from "react";

import { Section } from "src/core/section/section";
import { SectionBackgroundImage } from "src/core/section/sectionBackgroundImage";
import { SectionContainer } from "src/core/section/sectionContainer";
import { getBlogPostsWithAuthor } from "src/pages/blog/data";
import { POSTS_PER_PAGE } from "src/pages/blog/overview/config";
import { LoadMore } from "src/pages/blog/overview/loadMore";
import { Post } from "src/pages/blog/overview/post";
import { BlogOverviewPagePost } from "src/pages/blog/overview/types";
import { ReadyToInvest } from "src/shared/slices/readyToInvest";
import { useTranslation } from "src/shared/translations";

import { getLocaleFromString } from "lib/languages";
import { createClient } from "lib/prismic/config";
import { BlogPostDocument } from "lib/types.generated";

export interface BlogOverviewProps {
  posts?: BlogOverviewPagePost[];
  postsCount?: number;
}

type PostType = BlogPostDocument["data"]["type"];

export const BlogOverview: FC<BlogOverviewProps> = ({
  posts: initialPosts,
  postsCount: initialPostsCount
}) => {
  const [postsCount, setPostsCount] = useState(initialPostsCount);
  const [posts, setPosts] = useState(initialPosts);
  const [activePostType, setActivePostType] = useState<PostType>();
  const [isLoading, setIsLoading] = useState(false);
  const { t } = useTranslation();
  const { locale: localeIso, replace, query } = useRouter();
  const locale = getLocaleFromString(localeIso);
  const hasPosts = posts && posts?.length > 0;
  const client = createClient();

  const fetchPostsForPostType = async (postType: PostType | undefined) => {
    const query = postType ? `?type=${postType}` : "";
    replace(`/${locale.iso}/blog${query}`, undefined, { shallow: true });

    if (!postType) {
      setPosts(initialPosts);
      setPostsCount(initialPostsCount);
      setActivePostType(undefined);
      return;
    }

    setIsLoading(true);
    setActivePostType(postType);
    const { postDocs, postsCount } = await getBlogPostsWithAuthor({
      client,
      pageSize: POSTS_PER_PAGE,
      predicates: getPredicates(postType),
      page: 1,
      locale
    });
    setPostsCount(postsCount);
    setPosts(postDocs);
    setIsLoading(false);
  };

  useEffect(() => {
    if (query.type === "Blog" || query.type === "Podcast") {
      fetchPostsForPostType(query.type);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query.type]);

  return (
    <>
      <Section variant="light">
        <SectionBackgroundImage inverse top={100} right={-100} />
        <SectionContainer>
          <h1>{t("blog.title")}</h1>

          <div className="mb-12 border border-light-400 inline-flex divide-x divide-light-400">
            <Button
              look="secondary"
              className={classNames({ "!bg-light-400": !activePostType })}
              onClick={() => {
                fetchPostsForPostType(undefined);
              }}
            >
              {t("blog.filters.all")}
            </Button>
            <Button
              look="secondary"
              className={classNames({ "!bg-light-400": activePostType == "Podcast" })}
              onClick={() => {
                fetchPostsForPostType("Podcast");
              }}
            >
              Podcast
            </Button>
            <Button
              look="secondary"
              className={classNames({ "!bg-light-400": activePostType == "Blog" })}
              onClick={() => {
                fetchPostsForPostType("Blog");
              }}
            >
              Blog
            </Button>
          </div>

          {isLoading ? (
            <Spinner />
          ) : hasPosts ? (
            <>
              {posts.map(({ post, author }, i) => (
                <Post key={post?.id + i} post={post} author={author} featured={i === 0} />
              ))}
              {postsCount !== undefined && postsCount > 0 && (
                <LoadMore
                  posts={posts}
                  setPosts={setPosts}
                  postsCount={postsCount}
                  predicates={getPredicates(activePostType)}
                />
              )}
            </>
          ) : (
            <h4>{t("blog.noArticles")}</h4>
          )}
        </SectionContainer>
      </Section>
      <ReadyToInvest />
    </>
  );
};

const getPredicates = (postType: PostType | undefined) =>
  postType === undefined
    ? []
    : postType === "Blog"
      ? // We introduced a new field "type" to distinguish between blog posts and podcasts.
        // This field hasn't been set for old blog posts that's why we get them by excluding podcasts.
        [filter.not("my.blog_post.type", "Podcast")]
      : [filter.at("my.blog_post.type", postType)];
