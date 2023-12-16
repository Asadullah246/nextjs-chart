import { buttonVariants } from "@true-wealth/ui-core";
import React, { FC } from "react";

import styles from "src/pages/home/teaser/teaserFooter.module.scss";
import { SamplePortfolioButton } from "src/shared/buttons/samplePortfolioButton";
import { useTranslation } from "src/shared/translations";

interface Props {
  riskTolerance: number;
  investmentAmount: number;
}

export const TeaserFooter: FC<Props> = ({ riskTolerance, investmentAmount }) => {
  const { t } = useTranslation();

  return (
    <div className={styles.footer}>
      <h4>{t("homepage.teaser.propose")}</h4>
      <SamplePortfolioButton
        className={buttonVariants({ look: "secondary", size: "big" })}
        riskTolerance={riskTolerance}
        investmentAmount={investmentAmount}
      />
    </div>
  );
};
