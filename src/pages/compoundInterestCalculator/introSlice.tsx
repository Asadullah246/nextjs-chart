import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import React, { FC } from "react";

import { Section } from "src/core/section/section";
import { SectionBackgroundImage } from "src/core/section/sectionBackgroundImage";
import { SectionContainer } from "src/core/section/sectionContainer";
import styles from "src/pages/howItWorks/introSlice.module.scss";

import { htmlSerializer } from "lib/prismic/htmlSerializer";
import { HowItWorksDocumentDataBodyIntroSlice } from "lib/types.generated";

type Props = SliceComponentProps<HowItWorksDocumentDataBodyIntroSlice>;

export const IntroSlice: FC<Props> = ({
  slice: {
    primary: {
      content    }
  }
}) => (
  <Section variant="light" className={styles.introSlice}>
    <SectionBackgroundImage inverse top={262} right={-140} />
    <SectionContainer>
      <div className={styles.title}>
        <PrismicRichText field={content} components={htmlSerializer} />
      </div>
    </SectionContainer>
 
  </Section>
);
