/* eslint-disable @next/next/no-img-element */
import { ImageField, RichTextField } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import React, { FC } from "react";

import { Section } from "src/core/section/section";
import { SectionContainer } from "src/core/section/sectionContainer";

import { htmlSerializer } from "lib/prismic/htmlSerializer";
import { AboutUsDocumentDataBodyManagementTeamSlice } from "lib/types.generated";

type Props = SliceComponentProps<AboutUsDocumentDataBodyManagementTeamSlice>;

export const ManagementSlice: FC<Props> = ({
  slice: {
    primary: { title },
    items
  }
}) => {
  return (
    <Section>
      <SectionContainer noMaxWidth>
        <div className="flex flex-col items-center gap-6 md:gap-10">
          <PrismicRichText field={title} components={htmlSerializer} />
          <div className="flex-1 grid grid-flow-row md:grid-cols-2 xl:grid-flow-col xl:auto-cols-fr items-start gap-10 xl:gap-20">
            {items.map(({ content, profile_picture }, i) => (
              <ManagementItem key={i} content={content} image={profile_picture} />
            ))}
          </div>
        </div>
      </SectionContainer>
    </Section>
  );
};

const ManagementItem: FC<{
  content: RichTextField;
  image: ImageField;
}> = ({ content, image }) => {
  return (
    <div className="flex flex-col gap-4 xl:gap-8 items-center">
      {!!image.url && (
        <img
          src={image.url}
          alt={image.alt ?? undefined}
          className="h-44 w-44 xl:h-60 xl:w-60 object-contain"
        />
      )}
      <div className="text-center [&>p]:text-dark-100 [&>h3]:mb-0">
        <PrismicRichText field={content} components={htmlSerializer} />
      </div>
    </div>
  );
};
