import { RichTextField } from "@prismicio/client";
import { PrismicRichText } from "@prismicio/react";
import dynamic from "next/dynamic";
import React, { FC, useEffect, useState } from "react";

import { LoadingOverlay } from "src/core/loadingOverlay";
import styles from "src/pages/pillar3a/pillar3a-tax-savings/pillar3aTaxSavingChart.module.scss";
import { usePillar3aTaxSavings } from "src/pages/pillar3a/pillar3a-tax-savings/usePillar3aTaxSavings";
import { useTranslation } from "src/shared/translations";

import { Pillar3aTaxInfo, Pillar3aTaxSavings } from "lib/pillar3a/taxSavingDomain";
import { htmlSerializer } from "lib/prismic/htmlSerializer";
import { formatCurrency } from "lib/utils";

const TrueWealthStackedBarChart = dynamic(
  () => import("src/pages/pillar3a/pillar3a-tax-savings/TrueWealthStackedBarChart"),
  { ssr: false }
);

interface Props {
  info: Pillar3aTaxInfo;
  disclaimerText: RichTextField;
}

export const ZERO: Pillar3aTaxSavings = {
  generalSavings: 0,
  automaticDepositSavings: 0,
  staggeredPayoutSavings: 0
};

export const Pillar3aTaxSavingChart: FC<Props> = ({ info, disclaimerText }) => {
  const { t } = useTranslation();
  const {
    data: savings,
    isError: savingsError,
    isLoading: loadingSavings
  } = usePillar3aTaxSavings(info);

  const isLg = useMinWidthMatch(992);

  const { generalSavings, automaticDepositSavings, staggeredPayoutSavings } = savings ?? ZERO;

  const traditionalTotal = generalSavings;
  const trueWealthTotal = generalSavings + automaticDepositSavings + staggeredPayoutSavings;

  const traditionalName = t("pillar3aTaxSavingCalculator.chart.traditionalLabel");
  const trueWealthName = t("pillar3aTaxSavingCalculator.chart.trueWealthLabel");

  const traditionalLabel = `${traditionalName}\n(${formatCurrency(traditionalTotal)})`;
  const trueWealthLabel = `${trueWealthName}\n(${formatCurrency(trueWealthTotal)})`;

  const generalSavingsLabel = t("pillar3aTaxSavingCalculator.chart.generalSavings");
  const staggeredPayoutSavingsLabel = t("pillar3aTaxSavingCalculator.chart.staggeredPayoutSavings");
  const automaticDepositSavingsLabel = t(
    "pillar3aTaxSavingCalculator.chart.automaticDepositSavings"
  );

  const data = [
    {
      type: traditionalLabel,
      [generalSavingsLabel]: generalSavings,
      [automaticDepositSavingsLabel]: 0,
      [staggeredPayoutSavingsLabel]: 0
    },
    {
      type: trueWealthLabel,
      [generalSavingsLabel]: generalSavings,
      [automaticDepositSavingsLabel]: automaticDepositSavings,
      [staggeredPayoutSavingsLabel]: staggeredPayoutSavings
    }
  ];

  const colors = {
    [generalSavingsLabel]: "#E0D5C7",
    [automaticDepositSavingsLabel]: "#DD8217",
    [staggeredPayoutSavingsLabel]: "#9E5600"
  };

  return (
    <div>
      <LoadingOverlay
        isLoading={loadingSavings || !savings}
        error={savingsError ? <Pillar3aTaxSavingChartError /> : undefined}
      >
        <div className={styles.chart}>
          {savings && (
            <TrueWealthStackedBarChart
              datum={data}
              layout={isLg ? "horizontal" : "vertical"}
              keys={Object.keys(colors)}
              colors={colors}
            />
          )}
        </div>
      </LoadingOverlay>
      <div className={styles.explanation}>
        <h6>{t("pillar3aTaxSavingCalculator.chart.explanation.title")}</h6>
        <p>
          {t("pillar3aTaxSavingCalculator.chart.explanation.content", {
            generalSavings: savings ? formatCurrency(savings.generalSavings) : "",
            automaticDepositSavings: savings ? formatCurrency(savings.automaticDepositSavings) : "",
            staggeredPayoutSavings: savings ? formatCurrency(savings.staggeredPayoutSavings) : ""
          })}
        </p>
      </div>
      <div className={styles.disclaimer}>
        <PrismicRichText field={disclaimerText} components={htmlSerializer} />
      </div>
    </div>
  );
};

const Pillar3aTaxSavingChartError = () => {
  const { t } = useTranslation();
  return (
    <div>
      <h4 className={styles.chart_error}>{t("pillar3aTaxSavingCalculator.chart.errorHeader")}</h4>
      <p>{t("pillar3aTaxSavingCalculator.chart.errorText")}</p>
    </div>
  );
};

const useMinWidthMatch = (width: number) => {
  const [query, setQuery] = useState({
    matches: typeof window !== "undefined" ? window.innerWidth >= width : undefined
  });
  useEffect(() => {
    if (typeof window !== "undefined") {
      const mediaQuery = window.matchMedia(`(min-width: ${width}px)`);
      mediaQuery.addEventListener("change", setQuery);
      return () => mediaQuery.removeEventListener("change", setQuery);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return query.matches;
};
