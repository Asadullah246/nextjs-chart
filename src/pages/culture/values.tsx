/* eslint-disable @next/next/no-img-element */
import { RichTextField } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import React, { FC } from "react";

import { Card } from "src/core/card";
import { Section } from "src/core/section/section";
import { SectionContainer } from "src/core/section/sectionContainer";

import { htmlSerializer } from "lib/prismic/htmlSerializer";
import { CultureDocumentDataBodyValuesSlice } from "lib/types.generated";

type Props = SliceComponentProps<CultureDocumentDataBodyValuesSlice>;

export const Values: FC<Props> = ({
  slice: {
    primary: { title, content },
    items
  }
}) => {
  return (
    <Section variant="light">
      <SectionContainer noMaxWidth noVerticalPadding>
        <div className="mx-auto flex flex-col items-center max-w-7xl gap-12 pb-8 xl:pb-14">
          <div className="flex flex-col items-center">
            <div>
              <PrismicRichText field={title} components={htmlSerializer} />
            </div>
            <div className="text-xl leading-7 text-dark-100 text-center max-w-4xl">
              <PrismicRichText field={content} components={htmlSerializer} />
            </div>
          </div>
          <Card>
            <div className="p-14 grid grid-flow-row xl:grid-flow-col gap-8 xl:gap-14">
              {items.map(({ value }, i) => (
                <ValueItem key={i} value={value} />
              ))}
            </div>
          </Card>
        </div>
      </SectionContainer>
    </Section>
  );
};

const ValueItem: FC<{ value: RichTextField }> = ({ value }) => (
  <div className="[&>p]:text-dark-100 [&>h4]:mb-3 text-center max-w-lg">
    <PrismicRichText field={value} components={htmlSerializer} />
  </div>
);
