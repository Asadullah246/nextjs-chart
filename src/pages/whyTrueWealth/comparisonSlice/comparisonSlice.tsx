import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { buttonVariants } from "@true-wealth/ui-core";
import React, { FC } from "react";

import { Card } from "src/core/card";
import { Section } from "src/core/section/section";
import { SectionBackgroundImage } from "src/core/section/sectionBackgroundImage";
import { SectionContainer } from "src/core/section/sectionContainer";
import { ComparisonMobile } from "src/pages/whyTrueWealth/comparisonSlice/comparisonMobile";
import { ComparisonSections } from "src/pages/whyTrueWealth/comparisonSlice/comparisonSections";
import styles from "src/pages/whyTrueWealth/comparisonSlice/comparisonSlice.module.scss";
import { ComparisonTable } from "src/pages/whyTrueWealth/comparisonSlice/comparisonTable";
import { SamplePortfolioButton } from "src/shared/buttons/samplePortfolioButton";
import { TestAccountSignUpButton } from "src/shared/buttons/testAccountSignUpButton";
import { useTranslation } from "src/shared/translations";

import { htmlSerializer } from "lib/prismic/htmlSerializer";
import { WhyTrueWealthDocumentDataBodyComparisonSlice } from "lib/types.generated";

type Props = SliceComponentProps<WhyTrueWealthDocumentDataBodyComparisonSlice>;

export const ComparisonSlice: FC<Props> = ({
  slice: {
    primary: { heading },
    items
  }
}) => {
  const { t } = useTranslation();
  return (
    <Section variant={"lightToPearl"}>
      <SectionBackgroundImage inverse right={-130} top={340} />
      <SectionContainer noHorizontalPadding className={styles.comparisonSliceSectionContainer}>
        <div className={styles.headerContainer}>
          <div className={styles.header}>
            <PrismicRichText field={heading} components={htmlSerializer} />
          </div>
        </div>
        <Card className={styles.comparisonCard}>
          <ComparisonTable items={items} />
          <ComparisonSections items={items} />
          <ComparisonMobile items={items} />
          <div className={styles.samplePortfolioTextContainer}>
            <div className={styles.samplePortfolioText}>
              {t("why-true-wealth.free_sample_portfolio")}
            </div>
          </div>
          <div className={styles.samplePortfolioButtonContainer}>
            <SamplePortfolioButton className={buttonVariants({ size: "big" })} />
          </div>
          <div className={styles.testAccountButtonContainer}>
            <TestAccountSignUpButton className="text-xl" />
          </div>
        </Card>
      </SectionContainer>
    </Section>
  );
};
