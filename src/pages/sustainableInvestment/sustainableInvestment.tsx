import { SliceZone } from "@prismicio/react";
import React, { FC } from "react";

import { GoingSustainableSlice } from "src/pages/sustainableInvestment/goingSustainableSlice";
import { IntroSlice } from "src/pages/sustainableInvestment/introSlice";
import { OurMethodSlice } from "src/pages/sustainableInvestment/ourMethodSlice";
import { ResponsibilitySlice } from "src/pages/sustainableInvestment/responsibilitySlice";
import { MinimalReadyToInvestSlice } from "src/shared/slices/minimalReadyToInvestSlice";
import { ReadyToInvest } from "src/shared/slices/readyToInvest";

import { SustainableInvestmentDocument } from "lib/types.generated";

export interface SustainableInvestmentProps {
  doc: SustainableInvestmentDocument;
}

export const SustainableInvestment: FC<SustainableInvestmentProps> = ({ doc }) => (
  <SliceZone
    slices={doc.data.body}
    components={{
      intro: IntroSlice,
      responsability: ResponsibilitySlice,
      going_sustainable: GoingSustainableSlice,
      generic: OurMethodSlice,
      ready_to_invest: ReadyToInvest,
      minimal_ready_to_invest: MinimalReadyToInvestSlice
    }}
  />
);
