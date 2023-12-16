import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import React, { FC } from "react";

import { Section } from "src/core/section/section";
import { SectionContainer } from "src/core/section/sectionContainer";
import { SectionHeading } from "src/core/section/sectionHeading";
import styles from "src/pages/sustainableInvestment/goingSustainableSlice.module.scss";

import { htmlSerializer } from "lib/prismic/htmlSerializer";
import { SustainableInvestmentDocumentDataBodyGoingSustainableSlice } from "lib/types.generated";

type Props = SliceComponentProps<SustainableInvestmentDocumentDataBodyGoingSustainableSlice>;

export const GoingSustainableSlice: FC<Props> = ({
  slice: {
    primary: { header, content, box_1, box_2, image, image_description }
  }
}) => (
  <Section>
    <SectionContainer className={styles.container}>
      {header && <SectionHeading title={header} />}

      <PrismicRichText field={content} components={htmlSerializer} />

      <div className={styles.boxContainer}>
        <div className={styles.box}>
          <PrismicRichText field={box_1} components={htmlSerializer} />
        </div>
        <div className={styles.box}>
          <PrismicRichText field={box_2} components={htmlSerializer} />
        </div>
      </div>

      <figure className={styles.imageContainer}>
        <figcaption className={styles.imageCaption}>
          <PrismicRichText field={image_description} components={htmlSerializer} />
        </figcaption>
        {image?.url && (
          <picture className={styles.image}>
            {image.mobile.url && <source srcSet={image.mobile.url} media="(max-width: 543px)" />}
            <source srcSet={image.url} />
            <img
              src={image.url}
              loading="lazy"
              alt={image.alt ?? ""}
              width={image.dimensions?.width}
              height={image.dimensions?.height}
            />
          </picture>
        )}
      </figure>
    </SectionContainer>
  </Section>
);
