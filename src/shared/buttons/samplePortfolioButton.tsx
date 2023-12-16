import { LinkType } from "@prismicio/client";
import { useRouter } from "next/router";
import React, { FC } from "react";

import { Link } from "src/core/link";
import { useTranslation } from "src/shared/translations";

export enum InvestmentUniverse {
  STANDARD = "STANDARD",
  SRI = "SRI"
}

interface Props {
  className?: string;
  investmentUniverse?: InvestmentUniverse;
  riskTolerance?: number;
  investmentAmount?: number;
}

export const SamplePortfolioButton: FC<Props> = ({
  className,
  investmentUniverse,
  riskTolerance,
  investmentAmount
}) => {
  const { t } = useTranslation();
  const { locale: localeIso } = useRouter();
  const params = new URLSearchParams();

  if (localeIso) {
    params.append("lang", localeIso);
  }

  if (investmentUniverse) {
    params.append("investmentUniverse", investmentUniverse);
  }

  if (riskTolerance) {
    params.append("riskTolerance", riskTolerance.toString());
  }

  if (investmentAmount) {
    params.append("investmentAmount", investmentAmount.toString());
  }

  return (
    <Link
      external={false}
      className={className}
      link={{
        url: `${
          process.env.NEXT_PUBLIC_APP_URL
        }/app/demo/allocation/management-cost?${params.toString()}`,
        link_type: LinkType.Web
      }}
    >
      {t("global.samplePortfolio")}
    </Link>
  );
};
