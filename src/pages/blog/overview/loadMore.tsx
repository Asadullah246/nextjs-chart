import { Button, SpinnerIcon } from "@true-wealth/ui-core";
import { useRouter } from "next/router";
import React, { FC, useEffect, useState } from "react";

import { getBlogPostsWithAuthor } from "src/pages/blog/data";
import { POSTS_PER_PAGE } from "src/pages/blog/overview/config";
import { BlogOverviewPagePost } from "src/pages/blog/overview/types";
import { useTranslation } from "src/shared/translations";

import { getLocaleFromString } from "lib/languages";
import { createClient } from "lib/prismic/config";

interface Props {
  posts: BlogOverviewPagePost[];
  setPosts: React.Dispatch<React.SetStateAction<BlogOverviewPagePost[] | undefined>>;
  postsCount: number;
  predicates: string[];
}

export const LoadMore: FC<Props> = ({ posts, setPosts, postsCount, predicates }) => {
  const { t } = useTranslation();
  const { replace, query, locale: localeIso } = useRouter();
  const locale = getLocaleFromString(localeIso);
  const [mounted, setMounted] = useState(false);
  const [fetchingMore, setFetchingMore] = useState(false);
  const client = createClient();

  const fetchInitialPosts = async ({ page, pageSize }: { page: number; pageSize: number }) => {
    const { postDocs } = await getBlogPostsWithAuthor({
      client,
      pageSize,
      page,
      predicates,
      locale
    });
    setPosts(postDocs);
    setMounted(true);
  };

  const fetchMorePosts = async ({ page, pageSize }: { page: number; pageSize: number }) => {
    setFetchingMore(true);
    const { postDocs } = await getBlogPostsWithAuthor({
      client,
      pageSize,
      page,
      predicates,
      locale
    });

    setPosts([...posts, ...postDocs]);
    /**
     * When a user has loaded more products, a browser back action should still bring the user to the previous page.
     * That's why we don't add a new entry to the history stack
     */
    replace(`/${locale.iso}/blog?page=${page}`, undefined, { shallow: true });
    setFetchingMore(false);
  };

  useEffect(() => {
    if (typeof query.page === "string" && !mounted) {
      fetchInitialPosts({
        page: 1,
        pageSize: +query.page * POSTS_PER_PAGE
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query.page, mounted]);

  if (posts.length === postsCount) {
    return null;
  }

  return (
    <div className="flex justify-center mt-16">
      <Button
        look="secondary"
        size="big"
        onClick={() =>
          fetchMorePosts({
            page: posts.length / POSTS_PER_PAGE + 1,
            pageSize: POSTS_PER_PAGE
          })
        }
      >
        {fetchingMore && <SpinnerIcon className="h-5 mr-1" />}
        {t("blog.loadMore")}
      </Button>
    </div>
  );
};
