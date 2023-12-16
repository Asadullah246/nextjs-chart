import { isFilled, LinkType } from "@prismicio/client";
import { PrismicRichText } from "@prismicio/react";
import Image from "next/image";
import React, { FC } from "react";

import { Link } from "src/core/link";
import { Section } from "src/core/section/section";
import { SectionBackgroundImage } from "src/core/section/sectionBackgroundImage";
import { SectionContainer } from "src/core/section/sectionContainer";
import { FAQContact } from "src/pages/faq/contact/faqContact";
import { FAQCard } from "src/pages/faq/faqCard";
import styles from "src/pages/faq/overview/faqOverview.module.scss";
import { FAQSearch } from "src/pages/faq/overview/faqSearch";
import { FAQOverviewCategory } from "src/pages/faq/overview/types";
import { ReadyToInvest } from "src/shared/slices/readyToInvest";

import { htmlSerializer } from "lib/prismic/htmlSerializer";
import { FaqOverviewDocument } from "lib/types.generated";

export interface FAQOverviewProps {
  doc: FaqOverviewDocument;
  faqOverviewCategories?: FAQOverviewCategory[];
}

export const FAQOverview: FC<FAQOverviewProps> = ({ doc, faqOverviewCategories }) => (
  <>
    <Section variant="light">
      <SectionBackgroundImage top={50} left={-220} />
      <SectionContainer>
        <FAQCard>
          <div className={styles.intro}>
            <PrismicRichText field={doc?.data.intro} components={htmlSerializer} />
          </div>

          <FAQSearch faqCategories={faqOverviewCategories}>
            <div className={styles.categories}>
              {doc.data.categories.map(({ category: relationship }) => {
                const category = faqOverviewCategories?.find(
                  (c) =>
                    isFilled.contentRelationship(relationship) && c.link.uid === relationship.uid
                );
                if (!category) {
                  return null;
                }
                return (
                  <Link
                    key={category.link.uid}
                    className={styles.category}
                    link={{
                      ...category.link,
                      type: "faq_category",
                      link_type: LinkType.Document
                    }}
                  >
                    <span className={styles.categoryTitle}>
                      {category.icon && (
                        <Image
                          priority
                          width={16}
                          height={16}
                          src={category.icon}
                          alt={category.title}
                          style={{
                            maxWidth: "100%",
                            height: "auto"
                          }}
                        />
                      )}
                      {category.title}
                    </span>
                    <span className={styles.categoryDescription}>{category.description}</span>
                  </Link>
                );
              })}
            </div>
          </FAQSearch>
        </FAQCard>
      </SectionContainer>
    </Section>
    <FAQContact />
    <ReadyToInvest />
  </>
);
