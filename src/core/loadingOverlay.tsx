import classNames from "classnames";
import React, { FC, ReactNode } from "react";

import { LoadingIndicator } from "src/core/loadingIndicator";
import styles from "src/core/loadingOverlay.module.scss";

interface Props {
  isLoading?: boolean;
  error?: string | ReactNode;
  children: React.ReactNode;
}

export const LoadingOverlay: FC<Props> = ({ isLoading, error, children }) => {
  const showLoading = isLoading === true && !error;
  let content = children;
  if (error) {
    content = error;
  }

  return (
    <div className={styles.overlay_parent}>
      <div
        className={classNames(styles.overlay_content, {
          [styles.overlay_content_opaque]: showLoading
        })}
      >
        <div className={styles.overlay_children}>{content}</div>
      </div>
      {showLoading && (
        <div className={styles.overlay_spinner}>
          <LoadingIndicator size={100} />
        </div>
      )}
    </div>
  );
};
