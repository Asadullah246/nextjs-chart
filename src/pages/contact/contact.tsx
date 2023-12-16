import { SliceZone } from "@prismicio/react";
import React, { FC } from "react";

import { IntroSlice } from "src/pages/contact/introSlice/introSlice";
import { ReadyToInvest } from "src/shared/slices/readyToInvest";

import { ContactDocument } from "lib/types.generated";

export interface ContactProps {
  doc: ContactDocument;
}

export const Contact: FC<ContactProps> = ({ doc }) => (
  <SliceZone
    slices={doc.data.body}
    components={{
      intro: IntroSlice,
      ready_to_invest: ReadyToInvest
    }}
  />
);
