import { PrismicRichText } from "@prismicio/react";
import classNames from "classnames";
import React, { FC, Fragment, useState } from "react";

import { BODY_ROWS, isTrueWealth } from "src/pages/whyTrueWealth/comparisonSlice/common";
import styles from "src/pages/whyTrueWealth/comparisonSlice/comparisonMobile.module.scss";
import { useTranslation } from "src/shared/translations";

import { htmlSerializer } from "lib/prismic/htmlSerializer";
import { WhyTrueWealthDocumentDataBodyComparisonSliceItem } from "lib/types.generated";

interface ComparisonMobileProps {
  items: WhyTrueWealthDocumentDataBodyComparisonSliceItem[];
}

export const ComparisonMobile: FC<ComparisonMobileProps> = ({ items }) => {
  const { t } = useTranslation();
  const trueWealthData = items.find(isTrueWealth);
  const [optionsShown, setOptionsShown] = useState(false);
  return (
    <div className={styles.comparisonMobileSections}>
      <div className={classNames(styles.comparisonMobileSection, styles.trueWealth)}>
        <div className={styles.comparisonMobileSectionHeader}>
          <PrismicRichText field={trueWealthData?.organization} components={htmlSerializer} />
        </div>
        <div className={styles.comparisonMobileSectionContent}>
          {BODY_ROWS.map((name, i) => (
            <Fragment key={i}>
              <div className={styles.rowName}>{t("why-true-wealth." + name)}</div>
              <PrismicRichText field={trueWealthData?.[name]} components={htmlSerializer} />
            </Fragment>
          ))}
        </div>
      </div>
      {items
        .filter((item) => !isTrueWealth(item))
        .map((item, i) => (
          <div
            className={classNames(styles.comparisonMobileSection, {
              [styles.optionsShown]: optionsShown
            })}
            key={i}
          >
            <div className={styles.comparisonMobileSectionHeader}>
              <PrismicRichText field={item.organization} components={htmlSerializer} key={i} />
            </div>
            <div className={styles.comparisonMobileSectionContent}>
              {BODY_ROWS.map((name, j) => (
                <Fragment key={j}>
                  <div className={styles.rowName}>{t("why-true-wealth." + name)}</div>
                  <PrismicRichText field={item[name]} components={htmlSerializer} />
                </Fragment>
              ))}
            </div>
          </div>
        ))}
      <div className={styles.optionsContainer}>
        {!optionsShown && (
          <div onClick={() => setOptionsShown(true)}>{t("why-true-wealth.other_options")}</div>
        )}
        {optionsShown && (
          <div onClick={() => setOptionsShown(false)}>{t("why-true-wealth.collapse")}</div>
        )}
      </div>
    </div>
  );
};
