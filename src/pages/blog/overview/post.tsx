import { asText, LinkType } from "@prismicio/client";
import { PrismicRichText } from "@prismicio/react";
import classNames from "classnames";
import { useRouter } from "next/router";
import React, { FC } from "react";

import { Card } from "src/core/card";
import { Icon } from "src/core/icon";
import { Link } from "src/core/link";
import styles from "src/pages/blog/overview/post.module.scss";
import { SubTitle } from "src/pages/blog/subTitle";
import { VideoTag } from "src/pages/blog/videoTag";
import { useTranslation } from "src/shared/translations";

import { htmlSerializer } from "lib/prismic/htmlSerializer";
import { AuthorsDocument, BlogPostDocument } from "lib/types.generated";

interface Props {
  post: BlogPostDocument;
  author: AuthorsDocument | null;
  featured?: boolean;
}

export const Post: FC<Props> = ({ post, author, featured }) => {
  const { t } = useTranslation();
  const { locale: localeIso } = useRouter();
  const { cover_image, show_text_bellow_image, cover_image_text, embed } = post.data;
  const caption = show_text_bellow_image ? null : cover_image_text;
  const showMoreText = post.data.type === "Podcast" ? t("global.watchNow") : t("global.readMore");

  return (
    <Card
      className={classNames(styles.blogPost, "group", {
        [styles.featured]: featured,
        [styles.listView]: !featured
      })}
    >
      {cover_image && (
        <div className={styles.coverImage}>
          <picture>
            {cover_image.preview.url && (
              <source srcSet={cover_image.preview.url} media="(max-width: 543px)" />
            )}
            {cover_image.url && <source srcSet={cover_image.url} media="(max-width: 991px)" />}
            <source
              srcSet={`${featured ? cover_image.url : cover_image.preview.url} 1x, ${
                featured ? cover_image.main2x.url : cover_image.preview2x.url
              } 2x`}
            />
            <img
              src={featured ? cover_image.url ?? "" : cover_image.preview.url ?? ""}
              loading={featured ? "eager" : "lazy"}
              alt={cover_image.alt ?? "Cover image"}
              width={
                featured ? cover_image.dimensions?.width : cover_image.preview.dimensions?.width
              }
              height={
                featured ? cover_image.dimensions?.height : cover_image.preview.dimensions?.height
              }
              className={classNames("transition-transform duration-300", {
                "group-hover:scale-[1.02]": featured,
                "group-hover:scale-[1.04]": !featured
              })}
            />
          </picture>

          {caption && (
            <div className={styles.coverImageOverlayText}>
              <PrismicRichText field={caption} components={htmlSerializer} />
            </div>
          )}

          {embed.embed_url && <VideoTag />}
        </div>
      )}

      <div className={styles.content}>
        {post.data.headline && <h2>{asText(post.data.headline)}</h2>}

        <div className="mb-6">
          <SubTitle author={author} post={post} />
        </div>

        <PrismicRichText field={post.data.excerpt} components={htmlSerializer} />

        <Link
          className="relative z-10"
          icon={<Icon icon="chevronRight" />}
          link={{
            link_type: LinkType.Document,
            type: "blog_post",
            uid: post.uid,
            lang: localeIso
          }}
        >
          {showMoreText}
        </Link>
      </div>

      <Link
        className={styles.linkOverlay}
        aria-label={showMoreText}
        link={{
          link_type: LinkType.Document,
          type: "blog_post",
          uid: post.uid,
          lang: localeIso
        }}
      />
    </Card>
  );
};
