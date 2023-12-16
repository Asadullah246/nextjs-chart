import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import React, { FC } from "react";

import { Anchor } from "src/core/anchor";
import { Icon } from "src/core/icon";
import { Section } from "src/core/section/section";
import { SectionContainer } from "src/core/section/sectionContainer";
import { ChildPortfolioContext } from "src/pages/childPortfolio/types";

import { htmlSerializer } from "lib/prismic/htmlSerializer";
import { ChildPortfolioDocumentDataBodyHeadStartSlice } from "lib/types.generated";

type Props = SliceComponentProps<
  ChildPortfolioDocumentDataBodyHeadStartSlice,
  ChildPortfolioContext
>;

export const HeadStartSlice: FC<Props> = ({
  slice: {
    primary: { intro, first, second, third, hint }
  }
}) => (
  <Section>
    <Anchor id="headStart" />
    <SectionContainer className="[&_p]:text-dark-100 [&_strong]:text-dark-200 [&_strong]:block">
      <div className="text-2xl max-w-4xl mx-auto text-center leading-7">
        <PrismicRichText field={intro} components={htmlSerializer} />
      </div>
      <div className="grid lg:grid-cols-3 gap-6 lg:gap-12 border-b my-14 pb-14 border-light-200">
        <div className="text-lg leading-7 [&_strong]:mb-1">
          <Icon
            icon="tickCircleFilled"
            className="text-dark-100 !w-5 !h-5 flex-shrink-0 float-left mr-2 mt-0.5"
          />
          <PrismicRichText field={first} components={htmlSerializer} />
        </div>
        <div className="text-lg leading-7 [&_strong]:mb-1">
          <Icon
            icon="key"
            className="text-dark-100 !w-5 !h-5 flex-shrink-0 float-left mr-2 mt-0.5"
          />
          <PrismicRichText field={second} components={htmlSerializer} />
        </div>
        <div className="text-lg leading-7 [&_strong]:mb-1">
          <Icon
            icon="book"
            className="text-dark-100 !w-5 !h-5 flex-shrink-0 float-left mr-2 mt-0.5"
          />
          <PrismicRichText field={third} components={htmlSerializer} />
        </div>
      </div>
      <div className="text-center text-dark-100 text-2xl leading-7">
        <PrismicRichText field={hint} components={htmlSerializer} />
      </div>
    </SectionContainer>
  </Section>
);
