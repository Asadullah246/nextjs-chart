import { SliceZone } from "@prismicio/react";
import React, { FC } from "react";


import { ReadyToInvest } from "src/shared/slices/readyToInvest";

import { Pillar3aTaxSavingCalculatorDocument } from "lib/types.generated";

export interface Pillar3aTaxSavingsCalculatorProps {
  doc: Pillar3aTaxSavingCalculatorDocument;
}

export const Pillar3aTaxSavingsCalculator: FC<Pillar3aTaxSavingsCalculatorProps> = ({ doc }) => (
  <SliceZone
    slices={doc.data.body}
    components={{
      ready_to_invest: ReadyToInvest
    }}
  />
);
