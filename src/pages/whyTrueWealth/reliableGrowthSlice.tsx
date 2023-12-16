import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import React, { FC } from "react";

import { Card } from "src/core/card";
import { Section } from "src/core/section/section";
import { SectionBackgroundImage } from "src/core/section/sectionBackgroundImage";
import { SectionContainer } from "src/core/section/sectionContainer";
import styles from "src/pages/whyTrueWealth/reliableGrowthSlice.module.scss";
import { ReadyToInvestGroup } from "src/shared/readyToInvestGroup";

import { htmlSerializer } from "lib/prismic/htmlSerializer";
import { WhyTrueWealthDocumentDataBodyReliableGrowthSlice } from "lib/types.generated";

type Props = SliceComponentProps<WhyTrueWealthDocumentDataBodyReliableGrowthSlice>;

export const ReliableGrowthSlice: FC<Props> = ({
  slice: {
    primary: { title, left_content, right_content }
  }
}) => (
  <Section variant={"pearlToLight"} beforeExtendedImage>
    <SectionBackgroundImage inverse bottom={-250} right={-200} />
    <SectionContainer>
      <div className={styles.titleContainer}>
        <div className={styles.title}>
          <PrismicRichText field={title} components={htmlSerializer} />
        </div>
      </div>
      <div className={styles.cardGroup}>
        <Card className={styles.card}>
          <PrismicRichText field={left_content} components={htmlSerializer} />
        </Card>
        <Card className={styles.card}>
          <PrismicRichText field={right_content} components={htmlSerializer} />
        </Card>
      </div>
      <ReadyToInvestGroup />
    </SectionContainer>
  </Section>
);
