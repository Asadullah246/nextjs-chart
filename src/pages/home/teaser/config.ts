import { generated } from "src/pages/home/teaser/config.generated";
import { FeeForNav } from "src/pages/home/teaser/types";

export interface TeaserConfig {
  fee: FeeForNav[];
  investmentAmountCustomizable: boolean;
  teaserHeaderEnabled: boolean;
  teaserFooterEnabled: boolean;
  initialInvestmentAmount: number;
  minimumInvestmentAmount: number;
  maximumInvestmentAmount: number;
  currency: string;
  demoLinkTarget: string;
  assetClasses: {
    id: string;
    label: { [index: string]: string };
    tooltip: { [index: string]: string };
    color: string;
    teaserWeights: number[];
  }[];
  costs: number[];
  risks: number[];
}

export const teaserConfig: TeaserConfig = {
  investmentAmountCustomizable: true,
  teaserHeaderEnabled: true,
  teaserFooterEnabled: true,
  initialInvestmentAmount: 100000,
  maximumInvestmentAmount: 8000000,
  currency: "CHF",
  demoLinkTarget: "_parent",
  ...generated
};
