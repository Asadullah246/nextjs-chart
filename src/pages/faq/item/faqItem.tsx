import { asText, LinkType } from "@prismicio/client";
import { PrismicRichText } from "@prismicio/react";
import { FAQPageJsonLd } from "next-seo";
import React, { FC } from "react";

import { Link } from "src/core/link";
import { Section } from "src/core/section/section";
import { SectionBackgroundImage } from "src/core/section/sectionBackgroundImage";
import { SectionContainer } from "src/core/section/sectionContainer";
import { BreadCrumbs } from "src/pages/faq/breadCrumbs";
import { FAQContact } from "src/pages/faq/contact/faqContact";
import { FAQCard } from "src/pages/faq/faqCard";
import styles from "src/pages/faq/item/faqItem.module.scss";
import { FAQItemRelatedCategory, FAQItemRelatedItem } from "src/pages/faq/item/types";
import { ReadyToInvest } from "src/shared/slices/readyToInvest";
import { useTranslation } from "src/shared/translations";

import { htmlSerializer } from "lib/prismic/htmlSerializer";
import { FaqItemDocument } from "lib/types.generated";

export interface FAQItemProps {
  doc: FaqItemDocument;
  faqItemCategory?: FAQItemRelatedCategory;
  faqItemRelatedItems?: FAQItemRelatedItem[];
}

export const FAQItem: FC<FAQItemProps> = ({ doc, faqItemCategory, faqItemRelatedItems }) => {
  const { t } = useTranslation();

  return (
    <>
      <FAQPageJsonLd
        mainEntity={[
          {
            questionName: asText(doc.data.question),
            acceptedAnswerText: asText(doc.data.answer)
          }
        ]}
      />
      <Section variant="light">
        <SectionBackgroundImage top={50} left={-220} />
        <SectionContainer>
          <FAQCard>
            <BreadCrumbs
              items={[
                {
                  label: t("help.center.label"),
                  link: {
                    link_type: LinkType.Document,
                    type: "faq_overview",
                    uid: "faq",
                    lang: doc.lang
                  }
                },
                {
                  label: faqItemCategory?.label ?? "",
                  link: {
                    link_type: LinkType.Document,
                    type: "faq_category",
                    ...faqItemCategory?.link
                  }
                },
                {
                  label: asText(doc.data.question),
                  link: {
                    link_type: LinkType.Document,
                    type: "faq_item",
                    uid: doc.uid,
                    url: doc.url ?? undefined,
                    lang: doc.lang
                  }
                }
              ]}
            />
            <div className={styles.intro}>
              <h1>{asText(doc.data.question)}</h1>
              <PrismicRichText field={doc.data.answer} components={htmlSerializer} />
            </div>

            {faqItemRelatedItems && faqItemRelatedItems.length > 0 && (
              <>
                <h3>
                  {t("faq.detail.moreQuestions")} &quot;{faqItemCategory?.label}&quot;
                </h3>
                <div className={styles.items}>
                  {faqItemRelatedItems.map((item) => {
                    return (
                      <Link
                        key={item.link.uid}
                        link={{
                          ...item.link,
                          type: "faq_item",
                          link_type: LinkType.Document
                        }}
                      >
                        {item.label}
                      </Link>
                    );
                  })}
                </div>
              </>
            )}
          </FAQCard>
        </SectionContainer>
        <FAQContact />
      </Section>
      <ReadyToInvest />
    </>
  );
};
