/* eslint-disable @next/next/no-img-element */
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { buttonVariants } from "@true-wealth/ui-core";
import React, { FC } from "react";

import { Card } from "src/core/card";
import { Section } from "src/core/section/section";
import { SectionContainer } from "src/core/section/sectionContainer";
import styles from "src/pages/home/investmentUniverse.module.scss";
import { HomepageContext } from "src/pages/home/types";
import {
  InvestmentUniverse,
  SamplePortfolioButton
} from "src/shared/buttons/samplePortfolioButton";

import { htmlSerializer } from "lib/prismic/htmlSerializer";
import { HomepageDocumentDataBodyInvestmentUniverseSlice } from "lib/types.generated";

export const InvestmentUniverseSlice: FC<
  SliceComponentProps<HomepageDocumentDataBodyInvestmentUniverseSlice, HomepageContext>
> = ({ slice: { primary } }) => {
  const { title, intro, sustainable_image, sustainable_text, global_image, global_text } = primary;
  return (
    <Section variant="light" beforeExtendedImage>
      <SectionContainer className={styles.container}>
        <div className={styles.intro}>
          <PrismicRichText field={title} components={htmlSerializer} />
          <PrismicRichText field={intro} components={htmlSerializer} />
        </div>

        <div className={styles.cardGroup}>
          <Card className={styles.card}>
            {global_image?.url && (
              <figure>
                <img
                  src={global_image.url}
                  loading="lazy"
                  alt={global_image.alt ?? "Global"}
                  width={531}
                  height={256}
                />
              </figure>
            )}
            <div className={styles.cardContent}>
              <PrismicRichText field={global_text} components={htmlSerializer} />
              <SamplePortfolioButton
                className={buttonVariants({ look: "primary" })}
                investmentUniverse={InvestmentUniverse.STANDARD}
              />
            </div>
          </Card>
          <Card className={styles.card}>
            {sustainable_image?.url && (
              <figure>
                <img
                  src={sustainable_image.url}
                  loading="lazy"
                  alt={sustainable_image.alt ?? "Sustainable"}
                  width={531}
                  height={256}
                />
              </figure>
            )}
            <div className={styles.cardContent}>
              <PrismicRichText field={sustainable_text} components={htmlSerializer} />
              <SamplePortfolioButton
                className={buttonVariants({ look: "primary" })}
                investmentUniverse={InvestmentUniverse.SRI}
              />
            </div>
          </Card>
        </div>
      </SectionContainer>
    </Section>
  );
};
