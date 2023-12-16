import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import React, { FC } from "react";

import { Card } from "src/core/card";
import { Icon } from "src/core/icon";
import { Section } from "src/core/section/section";
import { SectionBackgroundImage } from "src/core/section/sectionBackgroundImage";
import { SectionContainer } from "src/core/section/sectionContainer";
import { SectionHeading } from "src/core/section/sectionHeading";
import styles from "src/pages/sustainableInvestment/responsibilitySlice.module.scss";
import { ReadyToInvestGroup } from "src/shared/readyToInvestGroup";

import { htmlSerializer } from "lib/prismic/htmlSerializer";
import { SustainableInvestmentDocumentDataBodyResponsabilitySlice } from "lib/types.generated";

type Props = SliceComponentProps<SustainableInvestmentDocumentDataBodyResponsabilitySlice>;

export const ResponsibilitySlice: FC<Props> = ({
  slice: {
    primary: {
      title,
      header,
      content_left,
      content_right,
      cards_title,
      card_1_title,
      card_1_content,
      card_2_title,
      card_2_content,
      card_3_title,
      card_3_content
    }
  }
}) => (
  <Section variant="whiteToLight" beforeExtendedImage>
    <SectionBackgroundImage bottom={100} left={-200} />
    <SectionContainer>
      <div className={styles.wrapper}>
        {header && <SectionHeading title={header} />}
        {title && <PrismicRichText field={title} components={htmlSerializer} />}
        <div className={styles.content}>
          <div className={styles.contentLeft}>
            <PrismicRichText field={content_left} components={htmlSerializer} />
          </div>
          <div className={styles.contentRight}>
            <PrismicRichText field={content_right} components={htmlSerializer} />
          </div>
        </div>
        <div className={styles.cardTitle}>
          <PrismicRichText field={cards_title} components={htmlSerializer} />
        </div>
      </div>

      <div className={styles.cardGroup}>
        <Card className={styles.card}>
          <Icon icon="envCare" className={styles.cardIcon} />
          <PrismicRichText field={card_1_title} components={htmlSerializer} />
          <PrismicRichText field={card_1_content} components={htmlSerializer} />
        </Card>

        <Card className={styles.card}>
          <Icon icon="socialResp" className={styles.cardIcon} />
          <PrismicRichText field={card_2_title} components={htmlSerializer} />
          <PrismicRichText field={card_2_content} components={htmlSerializer} />
        </Card>

        <Card className={styles.card}>
          <Icon icon="governance" className={styles.cardIcon} />
          <PrismicRichText field={card_3_title} components={htmlSerializer} />
          <PrismicRichText field={card_3_content} components={htmlSerializer} />
        </Card>
      </div>

      <ReadyToInvestGroup className={styles.readyToInvest} />
    </SectionContainer>
  </Section>
);
