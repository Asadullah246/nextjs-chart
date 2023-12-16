import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import React, { FC } from "react";

import { Card } from "src/core/card";
import { Section } from "src/core/section/section";
import { SectionContainer } from "src/core/section/sectionContainer";
import { PerformanceChart } from "src/pages/childPortfolio/performanceChart";
import { ChildPortfolioContext } from "src/pages/childPortfolio/types";

import { htmlSerializer } from "lib/prismic/htmlSerializer";
import { ChildPortfolioDocumentDataBodyPerformanceSlice } from "lib/types.generated";

type Props = SliceComponentProps<
  ChildPortfolioDocumentDataBodyPerformanceSlice,
  ChildPortfolioContext
>;

export const PerformanceSlice: FC<Props> = ({
  slice: {
    primary: { intro, chart_title, hint }
  }
}) => (
  <Section variant="pearl">
    <SectionContainer className="[&_p]:text-dark-100 [&_strong]:text-dark-200 [&_strong]:block">
      <div className="text-2xl max-w-4xl mx-auto text-center leading-7">
        <PrismicRichText field={intro} components={htmlSerializer} />
      </div>
      <Card className="p-5 md:p-12 mt-12 text-lg -mx-5 md:mx-0">
        <PrismicRichText field={chart_title} components={htmlSerializer} />
        <PerformanceChart />
        <div className="text-dark-100 leading-7">
          <PrismicRichText field={hint} components={htmlSerializer} />
        </div>
      </Card>
    </SectionContainer>
  </Section>
);
