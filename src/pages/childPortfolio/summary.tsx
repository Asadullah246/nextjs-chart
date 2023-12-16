import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import React, { FC } from "react";

import { Section } from "src/core/section/section";
import { SectionContainer } from "src/core/section/sectionContainer";
import styles from "src/pages/childPortfolio/summary.module.scss";
import { ChildPortfolioContext } from "src/pages/childPortfolio/types";

import { htmlSerializer } from "lib/prismic/htmlSerializer";
import { ChildPortfolioDocumentDataBodySummarySlice } from "lib/types.generated";

type Props = SliceComponentProps<ChildPortfolioDocumentDataBodySummarySlice, ChildPortfolioContext>;

export const SummarySlice: FC<Props> = ({
  slice: {
    primary: { title, content }
  }
}) => (
  <Section variant="light" className={styles.introSlice}>
    <SectionContainer>
      <PrismicRichText field={title} components={htmlSerializer} />
      <div className={styles.content}>
        <PrismicRichText field={content} components={htmlSerializer} />
      </div>
    </SectionContainer>
  </Section>
);
