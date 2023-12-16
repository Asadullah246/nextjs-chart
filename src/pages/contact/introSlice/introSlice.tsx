import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import React, { FC } from "react";

import { Section } from "src/core/section/section";
import { SectionBackgroundImage } from "src/core/section/sectionBackgroundImage";
import { SectionContainer } from "src/core/section/sectionContainer";
import styles from "src/pages/contact/introSlice/introSlice.module.scss";
import { IntroSliceContactCards } from "src/pages/contact/introSlice/introSliceContactCards";

import { htmlSerializer } from "lib/prismic/htmlSerializer";
import { ContactDocumentDataBodyIntroSlice } from "lib/types.generated";

type Props = SliceComponentProps<ContactDocumentDataBodyIntroSlice>;

export const IntroSlice: FC<Props> = ({ slice: { primary } }) => (
  <>
    <Section variant="light">
      <SectionBackgroundImage className={styles.backgroundImage} left={-296} bottom={-355} />
      <SectionContainer>
        <div className={styles.introSlice}>
          <PrismicRichText field={primary.intro_content} components={htmlSerializer} />
        </div>
      </SectionContainer>
    </Section>
    <IntroSliceContactCards item={primary} />
    <Section className={styles.mainContent}>
      <SectionContainer
        className={styles.mainContentContainer}
        image={primary.image}
        imagePosition="right"
      >
        <PrismicRichText field={primary.main_content} components={htmlSerializer} />
      </SectionContainer>
    </Section>
  </>
);
