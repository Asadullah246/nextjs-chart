import { asText } from "@prismicio/client";
import { PrismicRichText } from "@prismicio/react";
import React, { FC } from "react";

import { Card } from "src/core/card";
import { Section } from "src/core/section/section";
import { SectionContainer } from "src/core/section/sectionContainer";
import styles from "src/pages/press/detailView/pressDetailView.module.scss";
import { ReadyToInvest } from "src/shared/slices/readyToInvest";

import { htmlSerializer } from "lib/prismic/htmlSerializer";
import { PressReleaseDocument } from "lib/types.generated";

export interface PressDetailViewProps {
  doc: PressReleaseDocument;
}

export const PressDetailView: FC<PressDetailViewProps> = ({ doc }) => (
  <>
    <Section variant="light">
      <SectionContainer>
        <Card className={styles.block}>
          {doc.data.title && <h1>{asText(doc.data.title)}</h1>}
          <PrismicRichText field={doc.data.content} components={htmlSerializer} />
        </Card>
      </SectionContainer>
    </Section>
    <ReadyToInvest />
  </>
);
