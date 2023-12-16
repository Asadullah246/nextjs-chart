import classNames from "classnames";
import { FC } from "react";

import { Icon } from "src/core/icon";
import styles from "src/core/netReturn.module.scss";

interface Props {
  netReturn: number;
}

export const NetReturn: FC<Props> = ({ netReturn }) => {
  const isPositiveNetReturn = netReturn >= 0;

  return (
    <div
      className={classNames(styles.netReturn, {
        [styles.positive]: isPositiveNetReturn,
        [styles.negative]: !isPositiveNetReturn
      })}
    >
      <Icon icon={isPositiveNetReturn ? "trendUp" : "trendDown"} />
      {Math.abs(netReturn).toFixed(2)}%
    </div>
  );
};
