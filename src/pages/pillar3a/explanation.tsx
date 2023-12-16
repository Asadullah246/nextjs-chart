import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import React, { FC } from "react";

import { Section } from "src/core/section/section";
import { SectionContainer } from "src/core/section/sectionContainer";
import styles from "src/pages/pillar3a/explanation.module.scss";
import { Pillar3aContext } from "src/pages/pillar3a/types";

import { htmlSerializer } from "lib/prismic/htmlSerializer";
import { Pillar3aDocumentDataBodyExplanationSlice } from "lib/types.generated";

type Props = SliceComponentProps<Pillar3aDocumentDataBodyExplanationSlice, Pillar3aContext>;

export const ExplanationSlice: FC<Props> = ({
  slice: {
    primary: { title, advantages }
  }
}) => (
  <Section variant="light" className={styles.introSlice}>
    <SectionContainer>
      <PrismicRichText field={title} components={htmlSerializer} />
      <PrismicRichText field={advantages} components={htmlSerializer} />
    </SectionContainer>
  </Section>
);
