import { SliceZone } from "@prismicio/react";
import React, { FC } from "react";

import { LearnMore } from "src/shared/slices/learnMore";

import { CultureDocument } from "lib/types.generated";

import { Introduction } from "./introduction";
import { TeamPictures } from "./teamPictures";
import { Values } from "./values";

export interface CultureProps {
  doc: CultureDocument;
}

export const Culture: FC<CultureProps> = ({ doc }) => (
  <SliceZone
    slices={doc.data.body}
    components={{
      introduction: Introduction,
      values: Values,
      learn_more: LearnMore,
      carousel: TeamPictures
    }}
  />
);
