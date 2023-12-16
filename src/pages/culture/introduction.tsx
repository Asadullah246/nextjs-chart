/* eslint-disable @next/next/no-img-element */
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import React, { FC } from "react";

import { Section } from "src/core/section/section";
import { SectionContainer } from "src/core/section/sectionContainer";

import { htmlSerializer } from "lib/prismic/htmlSerializer";
import { CultureDocumentDataBodyIntroductionSlice } from "lib/types.generated";

type Props = SliceComponentProps<CultureDocumentDataBodyIntroductionSlice>;

export const Introduction: FC<Props> = ({
  slice: {
    primary: { title, content, image }
  }
}) => {
  return (
    <Section variant="light">
      <SectionContainer>
        <div className="flex flex-col items-start gap-2">
          <PrismicRichText field={title} components={htmlSerializer} />
          <div className="grid grid-cols-1 xl:grid-cols-[2fr_3fr] gap-12 w-full justify-items-center">
            <div className="text-xl leading-7 text-dark-100">
              <PrismicRichText field={content} components={htmlSerializer} />
            </div>
            {!!image.url && (
              <img
                src={image.url}
                alt={image.alt ?? undefined}
                className="max-w-3xl xl:max-w-full"
              />
            )}
          </div>
        </div>
      </SectionContainer>
    </Section>
  );
};
