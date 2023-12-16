/* eslint-disable @next/next/no-img-element */
import { ImageField } from "@prismicio/client";
import classNames from "classnames";
import { FC, ImgHTMLAttributes, PropsWithChildren, ReactNode } from "react";

import styles from "src/core/section/sectionContainer.module.scss";

interface Props {
  image?: ImageField;
  extendedImage?: boolean;
  noVerticalPadding?: boolean;
  noHorizontalPadding?: boolean;
  noPadding?: boolean;
  className?: string;
  imageText?: ReactNode;
  imageAfter?: ReactNode;
  imagePosition?: "left" | "right";
  imageLoading?: ImgHTMLAttributes<HTMLImageElement>["loading"];
  noMaxWidth?: boolean;
}

export const SectionContainer: FC<PropsWithChildren<Props>> = ({
  children,
  image,
  extendedImage,
  imageText,
  imageAfter,
  noVerticalPadding,
  noHorizontalPadding,
  noPadding,
  className,
  imagePosition = "left",
  imageLoading = "lazy",
  noMaxWidth
}) => {
  const hasImage = !!image?.url;
  const isExtended = !!extendedImage;

  return (
    <div
      className={classNames(styles.container, className, {
        [styles.hasImage]: hasImage,
        [styles.left]: imagePosition === "left",
        [styles.right]: imagePosition === "right",
        [styles.boxedImage]: hasImage && !isExtended,
        [styles.hasText]: !!imageText,
        [styles.extendedImage]: isExtended,
        [styles.noVerticalPadding]: !!noVerticalPadding,
        [styles.noHorizontalPadding]: !!noHorizontalPadding,
        [styles.noPadding]: !!noPadding,
        [styles.noMaxWidth]: !!noMaxWidth
      })}
    >
      <div className={styles.childrenContainer}>{children}</div>
      {hasImage && (
        <div className={styles.imageContainer}>
          <figure>
            <div className={styles.safariFix}>
              <img
                src={image.url}
                loading={imageLoading}
                alt={image.alt ?? "Section image"}
                width={image.dimensions?.width}
                height={image.dimensions?.height}
              />
              <figcaption>{imageText}</figcaption>
              {imageAfter}
            </div>
          </figure>
        </div>
      )}
    </div>
  );
};
