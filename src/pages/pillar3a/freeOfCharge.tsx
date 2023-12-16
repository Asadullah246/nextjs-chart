import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Image from "next/image";
import React, { FC } from "react";

import { Anchor } from "src/core/anchor";
import { Section } from "src/core/section/section";
import { SectionContainer } from "src/core/section/sectionContainer";
import styles from "src/pages/pillar3a/freeOfCharge.module.scss";
import { Pillar3aContext } from "src/pages/pillar3a/types";

import { htmlSerializer } from "lib/prismic/htmlSerializer";
import { Pillar3aDocumentDataBodyFreeOfChargeSlice } from "lib/types.generated";

type Props = SliceComponentProps<Pillar3aDocumentDataBodyFreeOfChargeSlice, Pillar3aContext>;

export const FreeOfChargeSlice: FC<Props> = ({
  slice: {
    primary: { content, hint }
  }
}) => (
  <Section>
    <Anchor id="freeOfCharge" />
    <SectionContainer className={styles.container}>
      <div className={styles.grid}>
        <div>
          <PrismicRichText field={content} components={htmlSerializer} />
          <PrismicRichText field={hint} components={htmlSerializer} />
        </div>
        <div className={styles.imageContainer}>
          <Image src="/assets/img/freeOfCharge.svg" alt="Free of charge" fill sizes="100vw" />
        </div>
      </div>
    </SectionContainer>
  </Section>
);
