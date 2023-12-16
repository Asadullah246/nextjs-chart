import { asText, LinkType } from "@prismicio/client";
import { PrismicRichText } from "@prismicio/react";
import { useRouter } from "next/router";
import React, { FC } from "react";

import { Link } from "src/core/link";
import { Section } from "src/core/section/section";
import { SectionBackgroundImage } from "src/core/section/sectionBackgroundImage";
import { SectionContainer } from "src/core/section/sectionContainer";
import { BreadCrumbs } from "src/pages/faq/breadCrumbs";
import styles from "src/pages/faq/category/faqCategory.module.scss";
import { FAQCategoryItem, FAQCategorySubcategory } from "src/pages/faq/category/types";
import { FAQContact } from "src/pages/faq/contact/faqContact";
import { FAQCard } from "src/pages/faq/faqCard";
import { ReadyToInvest } from "src/shared/slices/readyToInvest";
import { useTranslation } from "src/shared/translations";

import { htmlSerializer } from "lib/prismic/htmlSerializer";
import { FaqCategoryDocument } from "lib/types.generated";

export interface FAQCategorywProps {
  doc: FaqCategoryDocument;
  faqCategoryItems?: FAQCategoryItem[];
  faqCategorySubcategories?: FAQCategorySubcategory[];
}

export const FAQCategory: FC<FAQCategorywProps> = ({
  doc,
  faqCategoryItems,
  faqCategorySubcategories
}) => {
  const { t } = useTranslation();
  return (
    <>
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
                    lang: doc?.lang
                  }
                },
                {
                  label: asText(doc?.data.title),
                  link: {
                    link_type: LinkType.Document,
                    type: "faq_category",
                    uid: doc.uid,
                    url: doc.url ?? undefined,
                    lang: doc.lang
                  }
                }
              ]}
            />

            <div className={styles.intro}>
              <h1>{asText(doc?.data.title)}</h1>
              <PrismicRichText field={doc?.data.description} components={htmlSerializer} />
            </div>
            <div className={styles.items}>
              {faqCategorySubcategories && faqCategorySubcategories?.length > 0 ? (
                <Subcategories faqCategorySubcategories={faqCategorySubcategories} />
              ) : (
                <NoSubcategories faqCategoryItems={faqCategoryItems} />
              )}
            </div>
          </FAQCard>
        </SectionContainer>
        <FAQContact />
      </Section>
      <ReadyToInvest />
    </>
  );
};

const Subcategories: FC<{ faqCategorySubcategories: FAQCategorySubcategory[] }> = ({
  faqCategorySubcategories
}) => {
  const { locale: localeIso } = useRouter();

  return (
    <>
      {faqCategorySubcategories.map((subcategory) => (
        <div key={subcategory.heading}>
          <h2>{subcategory.heading}</h2>
          {subcategory.items.map((item) => (
            <Link
              key={item.url}
              link={{
                type: "faq_item",
                link_type: LinkType.Document,
                lang: localeIso,
                url: item.url
              }}
            >
              {item.question}
            </Link>
          ))}
        </div>
      ))}
    </>
  );
};

const NoSubcategories: FC<{ faqCategoryItems?: FAQCategoryItem[] }> = ({ faqCategoryItems }) => (
  <>
    {faqCategoryItems?.map((item) => (
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
    ))}
  </>
);
