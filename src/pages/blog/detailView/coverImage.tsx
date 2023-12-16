/* eslint-disable @next/next/no-img-element */
import { PrismicRichText } from "@prismicio/react";
import classNames from "classnames";
import { FC } from "react";

import styles from "src/pages/blog/detailView/coverImage.module.scss";

import { htmlSerializer } from "lib/prismic/htmlSerializer";
import { BlogPostDocument } from "lib/types.generated";

interface Props {
  authorName?: string;
  coverImage: BlogPostDocument["data"]["cover_image"];
  coverImageText: BlogPostDocument["data"]["cover_image_text"];
  showTextBellowImage: BlogPostDocument["data"]["show_text_bellow_image"];
}

export const CoverImage: FC<Props> = ({
  authorName,
  coverImage,
  showTextBellowImage,
  coverImageText
}) => {
  const preview2x = coverImage.preview2x;
  const main2x = coverImage.main2x;
  const url = coverImage.url;

  return (
    <div className={styles.coverImage}>
      {preview2x?.url && (
        <picture>
          <source srcSet={preview2x.url} media="(max-width: 768px)" />
          <source srcSet={`${url} 1x, ${main2x?.url} 2x`} />
          {url && (
            <img
              src={url}
              alt={coverImage.alt ?? ""}
              width={preview2x.dimensions?.width}
              height={preview2x.dimensions?.height}
            />
          )}
        </picture>
      )}

      {coverImageText && (
        <div
          className={classNames({
            [styles.coverImageText]: showTextBellowImage,
            [styles.coverImageOverlayText]: !showTextBellowImage
          })}
        >
          <PrismicRichText field={coverImageText} components={htmlSerializer} />
          {showTextBellowImage && <div>– {authorName}</div>}
        </div>
      )}
    </div>
  );
};
