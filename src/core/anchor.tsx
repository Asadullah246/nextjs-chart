import { FC } from "react";

import styles from "src/core/anchor.module.scss";

interface Props {
  id: string;
}

export const Anchor: FC<Props> = ({ id }) => <div id={id} className={styles.anchor} />;
