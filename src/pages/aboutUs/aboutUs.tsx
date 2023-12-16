import { SliceZone } from "@prismicio/react";
import React, { FC } from "react";

import { AboutTrueWealth } from "src/pages/aboutUs/aboutTrueWealthSlice";
import { StorySlice } from "src/pages/aboutUs/storySlice";
import { ReadyToInvest } from "src/shared/slices/readyToInvest";

import { AboutUsDocument } from "lib/types.generated";

import { ManagementSlice } from "./managementSlice";

export interface AboutUsProps {
  doc: AboutUsDocument;
}

export const AboutUs: FC<AboutUsProps> = ({ doc }) => (
  <SliceZone
    slices={doc.data.body}
    components={{
      about_true_wealth: AboutTrueWealth,
      story: StorySlice,
      ready_to_invest: ReadyToInvest,
      management_team: ManagementSlice
    }}
  />
);
