import Spinner from "public/loadingIndicator.svg";
import { FC } from "react";

import styles from "src/core/loadingIndicator.module.scss";

interface Props {
  size?: number;
}

export const LoadingIndicator: FC<Props> = ({ size = 24 }) => (
  <Spinner
    aria-hidden="true"
    className={styles.loadingIndicator}
    style={{
      width: size,
      height: size
    }}
  />
);
