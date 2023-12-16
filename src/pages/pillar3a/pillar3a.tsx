import { SliceZone } from "@prismicio/react";
import React, { FC } from "react";

import { AutomaticallyStaggerSlice } from "src/pages/pillar3a/automaticallyStagger";
import { AutomaticInvestmentsSlice } from "src/pages/pillar3a/automaticInvestments";
import { ComparisonSlice } from "src/pages/pillar3a/comparison";
import { ExplanationSlice } from "src/pages/pillar3a/explanation";
import { FAQSlice } from "src/pages/pillar3a/faq";
import { FreeOfChargeSlice } from "src/pages/pillar3a/freeOfCharge";
import { IntroSlice } from "src/pages/pillar3a/introSlice";
import { LeadingRoboAdvisorSlice } from "src/pages/pillar3a/leadingRoboAdvisor";
import { TaxSavingSlice } from "src/pages/pillar3a/taxSavingSlice";
import { Pillar3aContext } from "src/pages/pillar3a/types";
import { ReadyToInvest } from "src/shared/slices/readyToInvest";

import { Pillar3aDocument } from "lib/types.generated";

interface Pillar3aProps extends Pillar3aContext {
  doc: Pillar3aDocument;
}

export const Pillar3a: FC<Pillar3aProps> = ({ doc, faqItems }) => (
  <SliceZone
    slices={doc.data.body}
    components={{
      intro: IntroSlice,  
      explanation: ExplanationSlice,
      automatic_investments: AutomaticInvestmentsSlice,
      leading_robo_advisor: LeadingRoboAdvisorSlice,
      free_of_charge: FreeOfChargeSlice,
      automatically_stagger: AutomaticallyStaggerSlice,
      comparison: ComparisonSlice,
      faq: FAQSlice,
      tax_savings_calculator: TaxSavingSlice,
      ready_to_invest: ReadyToInvest
    }}
    context={{ faqItems }}
  />
);
