import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { buttonVariants } from "@true-wealth/ui-core";
import classNames from "classnames";
import React, { FC } from "react";

import { Card } from "src/core/card";
import { Icon } from "src/core/icon";
import { Section } from "src/core/section/section";
import { SectionBackgroundImage } from "src/core/section/sectionBackgroundImage";
import { SectionContainer } from "src/core/section/sectionContainer";
import styles from "src/pages/howItWorks/introSlice.module.scss";
import { RealSignUpButton } from "src/shared/buttons/realSignUpButton";

import { htmlSerializer } from "lib/prismic/htmlSerializer";
import { HowItWorksDocumentDataBodyIntroSlice } from "lib/types.generated";

type Props = SliceComponentProps<HowItWorksDocumentDataBodyIntroSlice>;

export const IntroSlice: FC<Props> = ({
  slice: {
    primary: {
      content,
      box_1_time,
      box_1_content,
      box_2_time,
      box_2_content,
      box_3_time,
      box_3_content,
      box_4_time,
      box_4_content
    }
  }
}) => (
  <Section variant="light" className={styles.introSlice}>
    <SectionBackgroundImage inverse top={262} right={-140} />
    <SectionContainer>
      <div className={styles.title}>
        <PrismicRichText field={content} components={htmlSerializer} />
      </div>
    </SectionContainer>
    <div className={styles.cardGroup}>
      <Card className={classNames(styles.card, styles.bubbleRight, styles.card1)}>
        <div className={styles.cardTime}>
          <Icon icon="time" />
          <span>{box_1_time}</span>
        </div>
        <PrismicRichText field={box_1_content} components={htmlSerializer} />

        <RealSignUpButton
          className={buttonVariants({ look: "primary" })}
          icon={<Icon icon="chevronRight" />}
        />

        <Icon icon="profile" className={styles.cardIcon} />
      </Card>
      <Card className={classNames(styles.card, styles.bubbleLeft, styles.card2)}>
        <div className={styles.cardTime}>
          <Icon icon="time" />
          <span>{box_2_time}</span>
        </div>
        <PrismicRichText field={box_2_content} components={htmlSerializer} />

        <Icon icon="funding" className={styles.cardIcon} />
      </Card>
      <Card className={classNames(styles.card, styles.bubbleRight, styles.card3)}>
        <div className={styles.cardTime}>
          <Icon icon="time" />
          <span>{box_3_time}</span>
        </div>
        <PrismicRichText field={box_3_content} components={htmlSerializer} />

        <Icon icon="investmentMix" className={styles.cardIcon} />
      </Card>
      <Card className={classNames(styles.card, styles.bubbleLeft, styles.card4)}>
        <div className={styles.cardTime}>
          <Icon icon="time" />
          <span>{box_4_time}</span>
        </div>
        <PrismicRichText field={box_4_content} components={htmlSerializer} />

        <Icon icon="chartUp" className={styles.cardIcon} />
      </Card>
    </div>
  </Section>
);
