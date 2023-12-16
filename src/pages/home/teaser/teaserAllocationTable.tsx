import classNames from "classnames";
import React, { FC } from "react";

import { InfoTooltip } from "src/core/infoTooltip";
import styles from "src/pages/home/teaser/teaserAllocationTable.module.scss";
import { AssetClass } from "src/pages/home/teaser/types";
import { useTranslation } from "src/shared/translations";

interface Props {
  assetClasses: AssetClass[];
}

export const TeaserAllocationTable: FC<Props> = ({ assetClasses }) => {
  const { t } = useTranslation();
  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th align="left">
              <strong>{t("homepage.teaser.assetClass")}</strong>
            </th>
            <th align="right">
              <strong>{t("homepage.teaser.allocation")}</strong>
            </th>
          </tr>
        </thead>
        <tbody>
          {assetClasses.map(({ color, label, tooltip, weight }) => (
            <tr key={label} className={classNames({ [styles.disabledRow]: weight === 0 })}>
              <td>
                <div>
                  <span
                    className={styles.bullet}
                    style={{ backgroundColor: color }}
                    aria-hidden="true"
                  />
                  <span>{label}</span>
                  <InfoTooltip tooltip={tooltip} />
                </div>
              </td>
              <td align="right">{(weight * 100).toFixed(0)}%</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>{t("homepage.teaser.total")}</td>
            <td align="right">100%</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};
