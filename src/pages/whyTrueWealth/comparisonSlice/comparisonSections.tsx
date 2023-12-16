import { PrismicRichText } from "@prismicio/react";
import classNames from "classnames";
import React, { FC } from "react";

import { BODY_ROWS, isTrueWealth } from "src/pages/whyTrueWealth/comparisonSlice/common";
import styles from "src/pages/whyTrueWealth/comparisonSlice/comparisonSections.module.scss";
import { useTranslation } from "src/shared/translations";

import { htmlSerializer } from "lib/prismic/htmlSerializer";
import { WhyTrueWealthDocumentDataBodyComparisonSliceItem } from "lib/types.generated";

interface ComparisonSectionsProps {
  items: WhyTrueWealthDocumentDataBodyComparisonSliceItem[];
}

export const ComparisonSections: FC<ComparisonSectionsProps> = ({ items }) => {
  const { t } = useTranslation();
  return (
    <div className={styles.comparisonSections}>
      {items.map((item, i) => (
        <div
          className={classNames(styles.comparisonSection, {
            [styles.trueWealth]: isTrueWealth(item)
          })}
          key={i}
        >
          <div className={styles.comparisonSectionHeader}>
            <PrismicRichText field={item.organization} components={htmlSerializer} key={i} />
          </div>
          <div className={styles.comparisonSectionContent}>
            {BODY_ROWS.map((name, j) => (
              <div className={styles.comparisonSectionContentPair} key={j}>
                <div className={styles.rowName}>{t("why-true-wealth." + name)}</div>
                <PrismicRichText field={item[name]} components={htmlSerializer} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
