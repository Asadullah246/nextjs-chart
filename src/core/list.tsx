import classNames from "classnames";
import { createElement, FC, PropsWithChildren } from "react";

import styles from "src/core/list.module.scss";

export enum ListVariant {
  TICK = "tick",
  SQUARE = "square",
  FORBIDDEN = "forbidden",
  ORDERED = "ordered",
  NONE = "none"
}

interface Props {
  variant: ListVariant;
}

export const List: FC<PropsWithChildren<Props>> = ({ children, variant = ListVariant.SQUARE }) =>
  createElement(
    variant === ListVariant.ORDERED ? "ol" : "ul",
    {
      className: classNames(styles.list, {
        [styles.ordered]: variant === ListVariant.ORDERED,
        [styles.square]: variant === ListVariant.SQUARE,
        [styles.forbidden]: variant === ListVariant.FORBIDDEN,
        [styles.tick]: variant === ListVariant.TICK,
        [styles.none]: variant === ListVariant.NONE
      })
    },
    children
  );
