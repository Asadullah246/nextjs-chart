import { SliceZone } from "@prismicio/react";
import React, { FC } from "react";

import { AssetSelection } from "src/pages/whyTrueWealth/assetSelectionSlice";
import { ComparisonSlice } from "src/pages/whyTrueWealth/comparisonSlice/comparisonSlice";
import { CustodianBanksAndSecurity } from "src/pages/whyTrueWealth/custodianBanksAndSecuritySlice";
import { RadicalCostsSlice } from "src/pages/whyTrueWealth/radicalCostsSlice";
import { ReliableGrowthSlice } from "src/pages/whyTrueWealth/reliableGrowthSlice";
import { ReadyToInvest } from "src/shared/slices/readyToInvest";

import { WhyTrueWealthDocument } from "lib/types.generated";

export interface WhyTrueWealthProps {
  doc: WhyTrueWealthDocument;
}

export const WhyTrueWealth: FC<WhyTrueWealthProps> = ({ doc }) => (
  <SliceZone
    slices={doc.data.body}
    components={{
      custodian_banks_and_security: CustodianBanksAndSecurity,
      reliable_growth: ReliableGrowthSlice,
      radical_costs: RadicalCostsSlice,
      comparison: ComparisonSlice,
      generic: AssetSelection,
      ready_to_invest: ReadyToInvest
    }}
  />
);
