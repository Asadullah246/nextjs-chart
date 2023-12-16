import classNames from "classnames";
import BackgroundLogo from "public/background-logo.svg";
import { FC } from "react";

import styles from "src/core/section/sectionBackgroundImage.module.scss";

interface Props {
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
  inverse?: boolean;
  className?: string;
}

export const SectionBackgroundImage: FC<Props> = ({
  top,
  right,
  bottom,
  left,
  inverse,
  className
}) => (
  <div className={classNames(styles.container, className)}>
    <div
      className={classNames(styles.imageWrapper, {
        [styles.inverse]: inverse
      })}
      style={{ top, right, bottom, left }}
    >
      <BackgroundLogo />
    </div>
  </div>
);
