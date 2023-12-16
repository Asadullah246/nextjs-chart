import React, { FC } from "react";

import { TextBlock } from "src/pages/generic/textBlock";
import { GenericPageComponent } from "src/shared/page/genericPageComponent";

import { PagesDocument, PagesDocumentDataBodyTextBlockSlice } from "lib/types.generated";

export interface GenericProps {
  doc: PagesDocument;
}

export const Generic: FC<GenericProps> = ({ doc }) => {
  const readyToInvest = doc.data.body.some((slice) => slice.slice_type === "ready_to_invest");
  const textBlockSlices = doc.data.body.filter(
    (slice) => slice.slice_type === "text_block"
  ) as PagesDocumentDataBodyTextBlockSlice[];
  return (
    <GenericPageComponent readyToInvest={readyToInvest}>
      {textBlockSlices?.map((slice, i) => <TextBlock slice={slice} key={i} />)}
    </GenericPageComponent>
  );
};
