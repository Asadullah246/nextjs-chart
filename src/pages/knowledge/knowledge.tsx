import { PrismicRichText, SliceComponentProps, SliceZone } from "@prismicio/react";
import React, { FC } from "react";

import { Card } from "src/core/card";
import { Section } from "src/core/section/section";
import { SectionBackgroundImage } from "src/core/section/sectionBackgroundImage";
import { SectionContainer } from "src/core/section/sectionContainer";
import styles from "src/pages/knowledge/knowledge.module.scss";
import { Navigation } from "src/pages/knowledge/navigation";
import { ReadyToInvest } from "src/shared/slices/readyToInvest";
import { useTranslation } from "src/shared/translations";

import { htmlSerializer } from "lib/prismic/htmlSerializer";
import {
  KnowledgeDocument,
  KnowledgeDocumentDataBodyFeesTableSlice,
  KnowledgeDocumentDataBodyTextSlice
} from "lib/types.generated";

export interface KnowledgeProps {
  doc: KnowledgeDocument;
}

export const Knowledge: FC<KnowledgeProps> = ({ doc }) => {
  const { body, intro } = doc.data;

  return (
    <>
      <Section variant="light">
        <SectionBackgroundImage top={120} left={-300} />
        <SectionBackgroundImage inverse bottom={-330} right={-52} />
        <SectionContainer>
          <div className={styles.intro}>
            <PrismicRichText field={intro} components={htmlSerializer} />
          </div>

          <Card className={styles.block}>
            <Navigation />

            <div className={styles.content}>
              <SliceZone
                slices={body}
                components={{
                  text: TextSlice,
                  fees_table: FeesTableSlice
                }}
              />
            </div>
          </Card>
        </SectionContainer>
      </Section>
      <ReadyToInvest />
    </>
  );
};

const TextSlice: FC<SliceComponentProps<KnowledgeDocumentDataBodyTextSlice>> = ({
  slice: {
    primary: { content }
  }
}) => <PrismicRichText field={content} components={htmlSerializer} />;

const FeesTableSlice: FC<SliceComponentProps<KnowledgeDocumentDataBodyFeesTableSlice>> = ({
  slice: { items }
}) => {
  const { t } = useTranslation();

  return (
    <table>
      <thead>
        <tr>
          <th>
            <span>{t("pages.knowledge.portfolioValue")}</span>
          </th>
          <th>
            <span>{t("pages.knowledge.managementFee")}</span>
          </th>
        </tr>
      </thead>
      <tbody>
        {items.map(({ portfolio_value, management_fee }) => (
          <tr key={portfolio_value}>
            <td>{portfolio_value}</td>
            <td>{management_fee}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
