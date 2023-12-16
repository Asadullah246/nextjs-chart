import { SliceZone } from "@prismicio/react";
import React, { FC } from "react";

import { IntroSlice } from "src/pages/jobs/introSlice";
import { OpenPositions } from "src/pages/jobs/openPositions";
import { JobsContext } from "src/pages/jobs/types";
import { WorkingSlice } from "src/pages/jobs/workingSlice";
import { LearnMore } from "src/shared/slices/learnMore";

import { JobsDocument } from "lib/types.generated";

export interface JobsProps extends JobsContext {
  doc: JobsDocument;
}

export const Jobs: FC<JobsProps> = ({ doc, openJobPositions }) => (
  <SliceZone
    slices={doc.data.body}
    components={{
      intro: IntroSlice,
      working: WorkingSlice,
      open_positions: OpenPositions,
      learn_more: LearnMore
    }}
    context={{ openJobPositions }}
  />
);
