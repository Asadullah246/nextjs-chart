import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { buttonVariants } from "@true-wealth/ui-core";
import React, { FC } from "react";

import { Icon } from "src/core/icon";
import { Section } from "src/core/section/section";
import { SectionContainer } from "src/core/section/sectionContainer";
import styles from "src/pages/sustainableInvestment/introSlice.module.scss";
import { RealSignUpButton } from "src/shared/buttons/realSignUpButton";
import { TestAccountSignUpButton } from "src/shared/buttons/testAccountSignUpButton";

import { htmlSerializer } from "lib/prismic/htmlSerializer";
import { SustainableInvestmentDocumentDataBodyIntroSlice } from "lib/types.generated";

type Props = SliceComponentProps<SustainableInvestmentDocumentDataBodyIntroSlice>;

export const IntroSlice: FC<Props> = ({
  slice: {
    primary: { image, content }
  }
}) => (
  <Section variant="light" className={styles.introSlice}>
    <SectionContainer image={image} imagePosition="right" imageLoading="eager">
      <div className={styles.content}>
        <PrismicRichText field={content} components={htmlSerializer} />

        <div className="flex flex-col items-start md:items-center md:flex-row gap-8">
          <RealSignUpButton
            className={buttonVariants({ look: "primary", size: "big" })}
            icon={<Icon icon="chevronRight" />}
          />
          <TestAccountSignUpButton className="text-xl" />
        </div>
      </div>
    </SectionContainer>
  </Section>
);
