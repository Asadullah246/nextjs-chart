import { SliceZone } from "@prismicio/react";
import React, { FC } from "react";

import { ReadyToInvest } from "src/shared/slices/readyToInvest";

import { CompoundInterestCalculatorDocument } from "lib/types.generated";
import { IntroSlice } from "src/pages/compoundInterestCalculator/introSlice";




export interface CompoundInterestCalculatorProps {
  doc: CompoundInterestCalculatorDocument;
}

export const CompoundInterestCalculator: FC<CompoundInterestCalculatorProps> = ({ doc }) => (
<div>

  <SliceZone
    slices={doc.data.body}
    components={{
      intro: IntroSlice,  
      ready_to_invest: ReadyToInvest
    }}
  />

  </div>

  
);
