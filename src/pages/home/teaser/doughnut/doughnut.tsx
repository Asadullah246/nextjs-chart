import React, { FC } from "react";

import styles from "src/pages/home/teaser/doughnut/doughnut.module.scss";
import { StaticRing } from "src/pages/home/teaser/doughnut/staticRing";
import { AssetClass } from "src/pages/home/teaser/types";

interface Props {
  assetClasses: AssetClass[];
  width: number;
}

export const Doughnut: FC<Props> = ({ assetClasses, width }) => {
  const size = width;
  const radius = size / 2;
  const innerRadius = radius - 50;

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className={styles.doughnut}>
      <g transform={`translate(${radius}, ${radius})`}>
        <StaticRing
          innerRadius={innerRadius}
          outerRadius={radius}
          data={assetClasses.map(({ weight, color }) => ({
            value: weight,
            color
          }))}
        />
      </g>
    </svg>
  );
};
