import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { Button, SpinnerIcon } from "@true-wealth/ui-core";
import { useRouter } from "next/router";
import React, { FC } from "react";

import { Icon } from "src/core/icon";
import { Section } from "src/core/section/section";
import { SectionContainer } from "src/core/section/sectionContainer";
import { CHILD_PORTFOLIO_FAQ_CATEGORY_ID } from "src/pages/childPortfolio/faq.config";
import styles from "src/pages/childPortfolio/faq.module.scss";
import { ChildPortfolioContext } from "src/pages/childPortfolio/types";
import { FaqItems, useFetchAllFaqCategoryItems } from "src/shared/faqItems";

import { htmlSerializer } from "lib/prismic/htmlSerializer";
import { ChildPortfolioDocumentDataBodyFaqSlice } from "lib/types.generated";

type Props = SliceComponentProps<ChildPortfolioDocumentDataBodyFaqSlice, ChildPortfolioContext>;

export const FAQSlice: FC<Props> = ({
  slice: {
    primary: { intro, more_button_label }
  },
  context: { faqItems }
}) => {
  const { locale } = useRouter();
  const { items, isLoading, isFetched, fetchAll } = useFetchAllFaqCategoryItems({
    initialItems: faqItems,
    cagegoryId: CHILD_PORTFOLIO_FAQ_CATEGORY_ID[locale!]
  });

  return (
    <Section>
      <SectionContainer>
        <div className={styles.intro}>
          <PrismicRichText field={intro} components={htmlSerializer} />
        </div>
        <div>
          <FaqItems items={items} />
        </div>
        <div className={styles.showAll}>
          {isFetched ? null : (
            <Button look="secondary" onClick={fetchAll}>
              {more_button_label}
              {isLoading ? <SpinnerIcon className="h-5 ml-1" /> : <Icon icon="chevronDown" />}
            </Button>
          )}
        </div>
      </SectionContainer>
    </Section>
  );
};
