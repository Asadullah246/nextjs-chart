import classNames from "classnames";
import { FC, PropsWithChildren } from "react";

import styles from "src/core/card.module.scss";

interface Props {
  className?: string;
}

export const Card: FC<PropsWithChildren<Props>> = ({ children, className }) => (
  <div className={classNames(styles.card, className)}>{children}</div>
);
