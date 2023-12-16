import { createElement, FC } from "react";

import styles from "src/core/section/sectionHeading.module.scss";

interface Props {
  title: string;
  tag?: string;
}

export const SectionHeading: FC<Props> = ({ title, tag = "div" }) =>
  createElement(
    tag,
    {
      className: styles.sectionHeading
    },
    title
  );
