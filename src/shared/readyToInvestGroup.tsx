import { buttonVariants } from "@true-wealth/ui-core";
import classNames from "classnames";
import React, { FC } from "react";

import { RealSignUpButton } from "src/shared/buttons/realSignUpButton";
import styles from "src/shared/readyToInvestGroup.module.scss";
import { useTranslation } from "src/shared/translations";

interface Props {
  className?: string;
}

export const ReadyToInvestGroup: FC<Props> = ({ className }) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(styles.readyToInvestGroup, className)}>
      <div className={styles.container}>
        <h3>{t("readyToInvest.title")}</h3>
        <p>{t("readyToInvest.createPortfolioNow")}</p>
        <RealSignUpButton className={buttonVariants({ look: "primary", size: "big" })}>
          {t("global.createPortfolio")}
        </RealSignUpButton>
      </div>
    </div>
  );
};
