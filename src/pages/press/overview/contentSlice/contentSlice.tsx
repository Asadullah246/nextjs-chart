import { SliceComponentProps } from "@prismicio/react";
import React, { FC } from "react";

import { Section } from "src/core/section/section";
import { SectionBackgroundImage } from "src/core/section/sectionBackgroundImage";
import { SectionContainer } from "src/core/section/sectionContainer";
import { Intro } from "src/pages/press/overview/contentSlice/intro";
import { MediaPosts } from "src/pages/press/overview/contentSlice/mediaPosts";
import { PressReleases } from "src/pages/press/overview/contentSlice/pressReleases";
import { ResourcesAndContact } from "src/pages/press/overview/contentSlice/resourcesAndContact";

import {
  PressDocument,
  PressDocumentDataBodyMediaSlice,
  PressReleaseDocument
} from "lib/types.generated";

type Props = SliceComponentProps<
  PressDocumentDataBodyMediaSlice,
  {
    pressReleaseDocs?: PressReleaseDocument[];
    doc: PressDocument;
  }
>;

export const ContentSlice: FC<Props> = ({ context: { doc, pressReleaseDocs }, slice }) => (
  <>
    <Intro doc={doc} />

    <ResourcesAndContact doc={doc} />

    <Section variant="whiteFixedToLight">
      <SectionBackgroundImage top={700} left={-300} />
      <SectionBackgroundImage inverse top={3000} right={-80} />
      <SectionContainer>
        {pressReleaseDocs && <PressReleases docs={pressReleaseDocs} />}
        {slice && <MediaPosts posts={slice.items} />}
      </SectionContainer>
    </Section>
  </>
);
