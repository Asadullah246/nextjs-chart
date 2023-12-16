import { isFilled } from "@prismicio/client";
import FsLightbox from "fslightbox-react";
import React, { FC } from "react";

import { BlogPostDocument, BlogPostDocumentDataBodyImageSlice } from "lib/types.generated";

interface Props {
  slices: BlogPostDocument["data"]["body"];
  showLightbox: boolean;
  activeImage: number;
}

export const Lightbox: FC<Props> = ({ slices, showLightbox, activeImage }) => {
  const postImages = isFilled.sliceZone(slices)
    ? slices
        .filter((el): el is BlogPostDocumentDataBodyImageSlice => el.slice_type === "image")
        .map((slice) => slice.primary.image?.url ?? "")
        .filter((image) => !image.includes(".svg"))
    : [];

  return postImages ? (
    <FsLightbox toggler={showLightbox} sources={postImages} slide={activeImage} />
  ) : null;
};
