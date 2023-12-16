import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Image from "next/image";
import React, { FC } from "react";

import { Anchor } from "src/core/anchor";
import { Section } from "src/core/section/section";
import { SectionContainer } from "src/core/section/sectionContainer";
import styles from "src/pages/childPortfolio/investing.module.scss";
import { ChildPortfolioContext } from "src/pages/childPortfolio/types";

import { htmlSerializer } from "lib/prismic/htmlSerializer";
import { ChildPortfolioDocumentDataBodyInvestingSlice } from "lib/types.generated";

type Props = SliceComponentProps<
  ChildPortfolioDocumentDataBodyInvestingSlice,
  ChildPortfolioContext
>;

export const InvestingSlice: FC<Props> = ({
  slice: {
    primary: { content }
  }
}) => (
  <Section>
    <Anchor id="investing" />
    <SectionContainer className={styles.container}>
      <div className={styles.grid}>
        <div>
          <PrismicRichText field={content} components={htmlSerializer} />
        </div>
        <div className={styles.imageContainer}>
          <Image src="/assets/img/freeOfCharge.svg" alt="Free of charge" fill sizes="100vw" />
        </div>
      </div>
    </SectionContainer>
  </Section>
);
