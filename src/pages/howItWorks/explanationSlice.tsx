import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { buttonVariants } from "@true-wealth/ui-core";
import React, { FC } from "react";

import { Section } from "src/core/section/section";
import { SectionContainer } from "src/core/section/sectionContainer";
import { SectionHeading } from "src/core/section/sectionHeading";
import styles from "src/pages/howItWorks/explanationSlice.module.scss";
import { TestAccountSignUpButton } from "src/shared/buttons/testAccountSignUpButton";
import { useTranslation } from "src/shared/translations";

import { htmlSerializer } from "lib/prismic/htmlSerializer";
import { HowItWorksDocumentDataBodyExplanationSlice } from "lib/types.generated";

type Props = SliceComponentProps<HowItWorksDocumentDataBodyExplanationSlice>;

export const ExplanationSlice: FC<Props> = ({
  slice: {
    primary: { left_header, left_content, right_header, right_content, after_content }
  }
}) => {
  const { t } = useTranslation();

  return (
    <Section className={styles.introSlice}>
      <SectionContainer className={styles.container}>
        <div className={styles.contentWrapper}>
          <div className={styles.leftContent}>
            {left_header && <SectionHeading title={left_header} />}
            <PrismicRichText field={left_content} components={htmlSerializer} />
          </div>
          <div className={styles.rightContent}>
            {right_header && <SectionHeading title={right_header} />}
            <PrismicRichText field={right_content} components={htmlSerializer} />
            <TestAccountSignUpButton className={buttonVariants({ look: "secondary", size: "big" })}>
              {t("howItWorks.testAccount")}
            </TestAccountSignUpButton>
          </div>
        </div>

        <div className={styles.faq}>
          <PrismicRichText field={after_content} components={htmlSerializer} />
        </div>
      </SectionContainer>
    </Section>
  );
};
