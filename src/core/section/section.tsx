import classNames from "classnames";
import { CSSProperties, FC, PropsWithChildren } from "react";

import styles from "src/core/section/section.module.scss";

interface Props {
  className?: string;
  id?: string;
  beforeExtendedImage?: boolean;
  afterExtendedImage?: boolean;
  style?: CSSProperties;
  variant?:
    | "light"
    | "pearl"
    | "sandy"
    | "lightToPearl"
    | "pearlToLight"
    | "pearlToWhite"
    | "whiteToLight"
    | "whiteFixedToLight"
    | "transparent";
}

export const Section: FC<PropsWithChildren<Props>> = ({
  children,
  id,
  className,
  beforeExtendedImage,
  afterExtendedImage,
  style,
  variant
}) => (
  <div
    id={id}
    className={classNames(styles.section, className, {
      [styles.light]: variant === "light",
      [styles.pearl]: variant === "pearl",
      [styles.sandy]: variant === "sandy",
      [styles.lightToPearl]: variant === "lightToPearl",
      [styles.pearlToLight]: variant === "pearlToLight",
      [styles.pearlToWhite]: variant === "pearlToWhite",
      [styles.whiteToLight]: variant === "whiteToLight",
      [styles.whiteFixedToLight]: variant === "whiteFixedToLight",
      [styles.transparent]: variant === "transparent",
      [styles.beforeExtendedImage]: beforeExtendedImage,
      [styles.afterExtendedImage]: afterExtendedImage
    })}
    style={style}
  >
    {children}
  </div>
);
