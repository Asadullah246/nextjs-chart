/* eslint-disable @next/next/no-img-element */
import { RTTextNode } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps, SliceZone } from "@prismicio/react";
import classNames from "classnames";
import React, { FC, useState } from "react";

import { Link } from "src/core/link";
import { Lightbox } from "src/pages/blog/detailView/lightbox";
import styles from "src/pages/blog/detailView/slices.module.scss";

import { htmlSerializer } from "lib/prismic/htmlSerializer";
import {
  BlogPostDocument,
  BlogPostDocumentDataBodyHighlightedTextSlice,
  BlogPostDocumentDataBodyHtmlSlice,
  BlogPostDocumentDataBodyIframeSlice,
  BlogPostDocumentDataBodyImageSlice,
  BlogPostDocumentDataBodyTextSlice
} from "lib/types.generated";

interface SlicesProps {
  slices: BlogPostDocument["data"]["body"];
}

export const Slices: FC<SlicesProps> = ({ slices }) => {
  const [showLightbox, setShowLightbox] = useState(false);
  const [activeImage, setActiveImage] = useState(0);

  let imageSlices = 1;

  return (
    <>
      <SliceZone
        slices={slices}
        components={{
          text: TextSlice,
          highlighted_text: HighlightedTextSlice,
          image: ({ slice }: SliceComponentProps<BlogPostDocumentDataBodyImageSlice>) => {
            const imageIndex = imageSlices;
            const isSvg = slice.primary.image?.url?.includes(".svg");
            let onClick: undefined | (() => void);

            if (!isSvg) {
              imageSlices++;
              onClick = () => {
                setActiveImage(imageIndex);
                setShowLightbox(!showLightbox);
              };
            }

            return <ImageSlice slice={slice} onClick={onClick} />;
          },
          html: HtmlSlice,
          iframe: EmbedSlice
        }}
      />
      <Lightbox slices={slices} showLightbox={showLightbox} activeImage={activeImage} />
    </>
  );
};

const TextSlice: FC<
  SliceComponentProps<
    BlogPostDocumentDataBodyTextSlice | BlogPostDocumentDataBodyHighlightedTextSlice
  >
> = ({
  slice: {
    primary: { content }
  }
}) => <PrismicRichText field={content} components={htmlSerializer} />;

const HighlightedTextSlice: FC<
  SliceComponentProps<BlogPostDocumentDataBodyHighlightedTextSlice>
> = (props) => (
  <div className={styles.highlightedTextSlice}>
    <TextSlice {...props} />
  </div>
);

const HtmlSlice: FC<SliceComponentProps<BlogPostDocumentDataBodyHtmlSlice>> = ({
  slice: {
    primary: { html }
  }
}) => {
  const finalHtml = (html?.[0] as RTTextNode).text;
  return finalHtml ? (
    <div className={styles.htmlSlice} dangerouslySetInnerHTML={{ __html: finalHtml }} />
  ) : null;
};

const EmbedSlice: FC<SliceComponentProps<BlogPostDocumentDataBodyIframeSlice>> = ({
  slice: {
    primary: { embed, embed_caption }
  }
}) => (
  <div className={styles.embedSlice}>
    {embed?.html && (
      <div
        className={classNames({
          "[&>iframe]:w-full [&>iframe]:aspect-video [&>iframe]:h-auto":
            embed?.embed_url?.includes("youtube")
        })}
        dangerouslySetInnerHTML={{ __html: embed.html }}
      />
    )}
    {embed_caption && <em>{embed_caption}</em>}
  </div>
);

interface ImageSliceProps {
  slice: BlogPostDocumentDataBodyImageSlice;
  onClick?: () => void;
}

const ImageSlice: FC<ImageSliceProps> = ({
  slice: {
    primary: { image, link, image_caption }
  },
  onClick
}) => (
  <figure
    className={classNames(styles.imageSlice, {
      [styles.imageSliceClickable]: !!onClick
    })}
  >
    {image?.url && <img src={image.url} loading="lazy" alt={image.alt ?? ""} onClick={onClick} />}
    {image_caption && (
      <figcaption>{link ? <Link link={link}>{image_caption}</Link> : image_caption}</figcaption>
    )}
  </figure>
);
