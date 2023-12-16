import { SliceZone } from "@prismicio/react";
import React, { FC } from "react";

import { ChildOwnerSlice } from "src/pages/childPortfolio/childOwner";
import { FAQSlice } from "src/pages/childPortfolio/faq";
import { HeadStartSlice } from "src/pages/childPortfolio/headStart";
import { IntroSlice } from "src/pages/childPortfolio/introSlice";
import { InvestingSlice } from "src/pages/childPortfolio/investing";
import { LeadingRoboAdvisorSlice } from "src/pages/childPortfolio/leadingRoboAdvisor";
import { PerformanceSlice } from "src/pages/childPortfolio/performance";
import { SummarySlice } from "src/pages/childPortfolio/summary";
import { ChildPortfolioContext } from "src/pages/childPortfolio/types";
import { ReadyToInvest } from "src/shared/slices/readyToInvest";

import { ChildPortfolioDocument } from "lib/types.generated";

interface ChildPortfolioProps extends ChildPortfolioContext {
  doc: ChildPortfolioDocument;
}

export const ChildPortfolio: FC<ChildPortfolioProps> = ({ doc, faqItems }) => (
  <SliceZone
    slices={doc.data.body}
    components={{
      intro: IntroSlice,
      summary: SummarySlice,
      investing: InvestingSlice,
      child_owner: ChildOwnerSlice,
      leading_robo_advisor: LeadingRoboAdvisorSlice,
      head_start: HeadStartSlice,
      performance: PerformanceSlice,
      faq: FAQSlice,
      ready_to_invest: ReadyToInvest
    }}
    context={{ faqItems }}
  />
);
