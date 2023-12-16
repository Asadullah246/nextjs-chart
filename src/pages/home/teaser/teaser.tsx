import { scaleThreshold } from "d3-scale";
import { useRouter } from "next/router";
import React, { FC, useState } from "react";

import { InfoTooltip } from "src/core/infoTooltip";
import { InputCurrency } from "src/core/inputCurrency";
import { teaserConfig } from "src/pages/home/teaser/config";
import { Doughnut } from "src/pages/home/teaser/doughnut/doughnut";
import styles from "src/pages/home/teaser/teaser.module.scss";
import { TeaserAllocationTable } from "src/pages/home/teaser/teaserAllocationTable";
import { TeaserFooter } from "src/pages/home/teaser/teaserFooter";
import { TeaserRiskSlider } from "src/pages/home/teaser/teaserRiskSlider";
import { RiskToleranceCategory } from "src/pages/home/teaser/types";
import { useTranslation } from "src/shared/translations";

const {
  risks,
  initialInvestmentAmount,
  costs,
  assetClasses: configAssetClasses,
  minimumInvestmentAmount,
  currency,
  fee: configFee
} = teaserConfig;

const riskToleranceScale = scaleThreshold<number, RiskToleranceCategory>()
  .domain([risks.length / 3, (risks.length * 2) / 3])
  .range([RiskToleranceCategory.low, RiskToleranceCategory.moderate, RiskToleranceCategory.high]);

export const Teaser: FC = () => {
  const { locale: localeIso } = useRouter();
  const { t } = useTranslation();
  const [investmentAmount, setInvestmentAmount] = useState(initialInvestmentAmount);
  const [riskToleranceIndex, setRiskToleranceIndex] = useState(
    risks.findIndex((risk) => risk >= 0.8)
  );
  const ter = costs[riskToleranceIndex];
  const fee = determineFee(investmentAmount);
  const cost = (fee * investmentAmount) / 4;
  const riskToleranceCategory = riskToleranceScale(riskToleranceIndex);
  const riskTolerance = risks[riskToleranceIndex];
  const assetClasses = configAssetClasses.map(({ color, label, teaserWeights, tooltip }) => ({
    color,
    label: label[localeIso!],
    weight: teaserWeights[riskToleranceIndex],
    tooltip: tooltip[localeIso!]
  }));
  return (
    <div>
      <h2>{t("homepage.teaser.title")}</h2>
      <p>{t("homepage.teaser.intro")}</p>
      <div className={styles.container}>
        <div className={styles.filter}>
          <div className={styles.inputWrapper}>
            <InputCurrency
              id="investmentAmount"
              value={investmentAmount}
              onChange={setInvestmentAmount}
              currency={currency}
              min={0}
              label={
                <>
                  {t("homepage.teaser.yourInvestment")}
                  <InfoTooltip
                    tooltip={t("homepage.teaser.yourInvestment.tooltip").replace(
                      "{minimumInvestment}",
                      minimumInvestmentAmount.toString()
                    )}
                  />
                </>
              }
            />
          </div>
          <div>
            <label>
              {t("homepage.teaser.yourRiskTolerance")}
              <InfoTooltip tooltip={t("homepage.teaser.yourRiskTolerance.tooltip")} />
            </label>
            <TeaserRiskSlider
              riskToleranceCategory={riskToleranceCategory}
              riskToleranceIndex={riskToleranceIndex}
              onRiskToleranceUpdate={setRiskToleranceIndex}
              minRiskToleranceIndex={0}
              maxRiskToleranceIndex={risks.length - 1}
            />
            {t(getRiskToleranceCategoryLabelMessage(riskToleranceCategory))}
          </div>
          <br />
          {t("homepage.teaser.fees")} <strong>{(fee * 100).toFixed(2)}%</strong>
          <InfoTooltip
            tooltip={t("homepage.teaser.fees.tooltip").replace(
              "{value}",
              `${(fee * 100).toFixed(2)}%`
            )}
          />
          <br />({t("homepage.teaser.costs")} CHF {cost.toFixed(0)})<br />
          {t("homepage.teaser.ter")} <strong>{(ter * 100).toFixed(2)}%</strong>
          <InfoTooltip tooltip={t("homepage.teaser.ter.tooltip")} />
        </div>
        <div className={styles.preview}>
          <h3>{t("homepage.teaser.strategy")}</h3>
          <p>
            {t("homepage.teaser.sampleStrategy").replace(
              "{tolerance}",
              t(getRiskToleranceCategoryMessage(riskToleranceCategory))
            )}
          </p>

          <div className={styles.doughnutAndTeaserContainer}>
            <Doughnut assetClasses={assetClasses} width={236} />
            <TeaserAllocationTable assetClasses={assetClasses} />
          </div>
        </div>
      </div>

      <TeaserFooter riskTolerance={riskTolerance} investmentAmount={investmentAmount} />
    </div>
  );
};

const getRiskToleranceCategoryLabelMessage = (riskToleranceCategory: RiskToleranceCategory) => {
  switch (riskToleranceCategory) {
    case RiskToleranceCategory.high:
      return "homepage.teaser.risk.high.label";
    case RiskToleranceCategory.moderate:
      return "homepage.teaser.risk.moderate.label";
    case RiskToleranceCategory.low:
      return "homepage.teaser.risk.low.label";
  }
};

const getRiskToleranceCategoryMessage = (riskToleranceCategory: RiskToleranceCategory) => {
  switch (riskToleranceCategory) {
    case RiskToleranceCategory.high:
      return "homepage.teaser.risk.high";
    case RiskToleranceCategory.moderate:
      return "homepage.teaser.risk.moderate";
    case RiskToleranceCategory.low:
      return "homepage.teaser.risk.low";
  }
};

const determineFee = (investment: number) => {
  const matches = configFee.filter(({ nav }) => nav <= investment);
  return matches[matches.length - 1].fee;
};
