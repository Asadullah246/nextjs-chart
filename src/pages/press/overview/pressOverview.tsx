import { SliceZone } from "@prismicio/react";
import React, { FC } from "react";

import { ContentSlice } from "src/pages/press/overview/contentSlice/contentSlice";
import { ReadyToInvest } from "src/shared/slices/readyToInvest";

import { PressDocument, PressReleaseDocument } from "lib/types.generated";

export type PressOverviewProps = {
  pressReleaseDocs?: PressReleaseDocument[];
  doc: PressDocument;
};

export const PressOverview: FC<PressOverviewProps> = ({ doc, pressReleaseDocs }) => (
  <SliceZone
    slices={doc.data.body}
    components={{
      media: ContentSlice,
      ready_to_invest: ReadyToInvest
    }}
    context={{ pressReleaseDocs, doc }}
  />
);
