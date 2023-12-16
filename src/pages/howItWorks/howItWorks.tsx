import { SliceZone } from "@prismicio/react";
import React, { FC } from "react";

import { ExplanationSlice } from "src/pages/howItWorks/explanationSlice";
import { IntroSlice } from "src/pages/howItWorks/introSlice";
import { ReadyToInvest } from "src/shared/slices/readyToInvest";

import { HowItWorksDocument } from "lib/types.generated";

export interface HowItWorksProps {
  doc: HowItWorksDocument;
}

export const HowItWorks: FC<HowItWorksProps> = ({ doc }) => (
  <SliceZone
    slices={doc.data.body}
    components={{
      intro: IntroSlice,
      explanation: ExplanationSlice,
      ready_to_invest: ReadyToInvest
    }}
  />
);
