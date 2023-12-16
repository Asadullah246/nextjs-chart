import { SliceZone } from "@prismicio/react";
import React, { FC } from "react";

import { CalculatorSlice } from "src/pages/bondPriceCalculator/calculatorSlice";
import { ReadyToInvest } from "src/shared/slices/readyToInvest";

import { BondPriceCalculatorDocument } from "lib/types.generated";

export interface BondPriceCalculatorProps {
  doc: BondPriceCalculatorDocument;
}

export const BondPriceCalculator: FC<BondPriceCalculatorProps> = ({ doc }) => (
  <SliceZone
    slices={doc.data.body}
    components={{
      bond_price_calculator: CalculatorSlice,
      ready_to_invest: ReadyToInvest
    }}
  />
);
