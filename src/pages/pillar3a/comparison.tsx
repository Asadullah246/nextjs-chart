import { asText } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import TWLogo from "public/logo.svg";
import TWLogoSmall from "public/logoSmall.svg";
import React, { FC } from "react";

import { Card } from "src/core/card";
import { Icon } from "src/core/icon";
import { InfoTooltip } from "src/core/infoTooltip";
import { Section } from "src/core/section/section";
import { SectionContainer } from "src/core/section/sectionContainer";
import styles from "src/pages/pillar3a/comparison.module.scss";
import { Pillar3aContext } from "src/pages/pillar3a/types";
import { useTranslation } from "src/shared/translations";

import { htmlSerializer } from "lib/prismic/htmlSerializer";
import { Pillar3aDocumentDataBodyComparisonSlice } from "lib/types.generated";

type Props = SliceComponentProps<Pillar3aDocumentDataBodyComparisonSlice, Pillar3aContext>;

export const ComparisonSlice: FC<Props> = ({
  slice: {
    primary: {
      intro,
      hint,
      fee_label,
      tw_fee_text,
      competitor_fee_text,
      competitor_fee_tooltip,
      interests_text,
      tw_interests_text,
      competitor_interests_text,
      competitor_interests_tooltip
    },
    items
  }
}) => {
  const { t } = useTranslation();

  return (
    <Section variant="pearlToWhite">
      <SectionContainer>
        <div className={styles.intro}>
          <PrismicRichText field={intro} components={htmlSerializer} />
        </div>

        <Card className={styles.card}>
          <div className={styles.grid}>
            <div />
            <div>
              <div className={styles.logo}>
                <TWLogo />
              </div>
              <div className={styles.logoSmall}>
                <TWLogoSmall />
              </div>
            </div>
            <div className={styles.competitor}>{t("s3a.competitor")}</div>
          </div>
          {items.map(({ text, tooltip, true_wealth, competitor }, i) => (
            <div className={styles.grid} key={`comparison-item-${i}`}>
              <div className={styles.itemText}>
                <PrismicRichText field={text} components={htmlSerializer} />
                {tooltip && tooltip?.length > 0 && <InfoTooltip tooltip={asText(tooltip)} />}
              </div>
              <div className={styles.twItem}>
                <Icon icon={true_wealth ? "tickCircleFilled" : "closeCircle"} />
              </div>
              <div className={styles.competitorItem}>
                <Icon icon={competitor ? "tickCircle" : "closeCircle"} />
              </div>
            </div>
          ))}

          <div className={styles.grid}>
            <PrismicRichText field={fee_label} components={htmlSerializer} />
            <div className={styles.twItem}>
              <PrismicRichText field={tw_fee_text} components={htmlSerializer} />
            </div>
            <div className={styles.competitorItem}>
              {asText(competitor_fee_text)}
              <InfoTooltip tooltip={asText(competitor_fee_tooltip)} />
            </div>
          </div>
          <div className={styles.grid}>
            <PrismicRichText field={interests_text} components={htmlSerializer} />
            <div className={styles.twItem}>
              <PrismicRichText field={tw_interests_text} components={htmlSerializer} />
            </div>
            <div className={styles.competitorItem}>
              {asText(competitor_interests_text)}
              <InfoTooltip tooltip={asText(competitor_interests_tooltip)} />
            </div>
          </div>

          <small className={styles.hint}>
            <PrismicRichText field={hint} components={htmlSerializer} />
          </small>
        </Card>
      </SectionContainer>
    </Section>
  );
};
