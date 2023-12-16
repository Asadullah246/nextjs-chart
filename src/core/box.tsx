import classNames from "classnames";
import { FC, PropsWithChildren } from "react";

import styles from "src/core/box.module.scss";

interface Props {
  className?: string;
}

export const Box: FC<PropsWithChildren<Props>> = ({ children, className }) => (
  <div className={classNames(styles.box, className)}>{children}</div>
);
