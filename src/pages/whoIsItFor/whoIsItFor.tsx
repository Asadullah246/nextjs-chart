import { SliceZone } from "@prismicio/react";
import React, { FC } from "react";

import { IntroSlice } from "src/pages/whoIsItFor/introSlice";
import { IsNotRightSlice } from "src/pages/whoIsItFor/isNotRightSlice";
import { IsRightSlice } from "src/pages/whoIsItFor/isRightSlices";
import { ReadyToInvest } from "src/shared/slices/readyToInvest";

import { WhoIsItForDocument } from "lib/types.generated";

export interface WhoIsItForProps {
  doc: WhoIsItForDocument;
}

export const WhoIsItFor: FC<WhoIsItForProps> = ({ doc }) => (
  <SliceZone
    slices={doc.data.body}
    components={{
      intro: IntroSlice,
      is_right: IsRightSlice,
      is_not_right: IsNotRightSlice,
      ready_to_invest: ReadyToInvest
    }}
  />
);
