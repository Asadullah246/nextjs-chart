import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { FC } from "react";

import { Section } from "src/core/section/section";
import { SectionContainer } from "src/core/section/sectionContainer";
import styles from "src/pages/pricing/faq.module.scss";
import { PrismicPricingContext } from "src/pages/pricing/types";
import { FaqItems } from "src/shared/faqItems";

import { htmlSerializer } from "lib/prismic/htmlSerializer";
import { PricingDocumentDataBodyFaqSlice } from "lib/types.generated";

export const FAQSlice: FC<
  SliceComponentProps<PricingDocumentDataBodyFaqSlice, PrismicPricingContext>
> = ({
  slice: {
    primary: { intro, more_text }
  },
  context: { faqItems }
}) => (
  <Section>
    <SectionContainer>
      <div className={styles.intro}>
        <PrismicRichText field={intro} components={htmlSerializer} />
      </div>
      <div>{faqItems && <FaqItems items={faqItems} />}</div>
      <div className={styles.showAll}>
        <PrismicRichText field={more_text} components={htmlSerializer} />
      </div>
    </SectionContainer>
  </Section>
);
