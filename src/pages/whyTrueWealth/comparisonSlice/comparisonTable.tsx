import { PrismicRichText } from "@prismicio/react";
import classNames from "classnames";
import React, { FC } from "react";

import { BODY_ROWS, isTrueWealth } from "src/pages/whyTrueWealth/comparisonSlice/common";
import styles from "src/pages/whyTrueWealth/comparisonSlice/comparisonTable.module.scss";
import { useTranslation } from "src/shared/translations";

import { htmlSerializer } from "lib/prismic/htmlSerializer";
import { WhyTrueWealthDocumentDataBodyComparisonSliceItem } from "lib/types.generated";

interface TableProps {
  items: WhyTrueWealthDocumentDataBodyComparisonSliceItem[];
}

export const ComparisonTable: FC<TableProps> = ({ items }) => {
  const { t } = useTranslation();
  return (
    <div className={styles.comparisonTable}>
      <table>
        <thead>
          <tr>
            <th />
            {items.map((item, i) => (
              <th
                key={i}
                className={classNames({
                  [styles.trueWealth]: isTrueWealth(item)
                })}
              >
                <PrismicRichText field={item.organization} components={htmlSerializer} />
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {BODY_ROWS.map((name, i) => (
            <tr key={i}>
              <td>{t("why-true-wealth." + name)}</td>
              {items.map((item, j) => (
                <td
                  key={j}
                  className={classNames({
                    [styles.trueWealth]: isTrueWealth(item)
                  })}
                >
                  <PrismicRichText field={item[name]} components={htmlSerializer} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
