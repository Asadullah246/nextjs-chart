import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import React, { FC } from "react";

import { Section } from "src/core/section/section";
import { SectionBackgroundImage } from "src/core/section/sectionBackgroundImage";
import { SectionContainer } from "src/core/section/sectionContainer";
import styles from "src/pages/whoIsItFor/introSlice.module.scss";

import { htmlSerializer } from "lib/prismic/htmlSerializer";
import { WhoIsItForDocumentDataBodyIntroSlice } from "lib/types.generated";

type Props = SliceComponentProps<WhoIsItForDocumentDataBodyIntroSlice>;

export const IntroSlice: FC<Props> = ({
  slice: {
    primary: { content }
  }
}) => (
  <Section variant="light">
    <SectionBackgroundImage bottom={-290} right={-420} inverse />
    <SectionContainer className={styles.container}>
      <PrismicRichText field={content} components={htmlSerializer} />
    </SectionContainer>
  </Section>
);
