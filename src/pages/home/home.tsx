import { SliceZone } from "@prismicio/react";
import React, { FC } from "react";

import { BlogPostsSliceContainer } from "src/pages/home/blogPostSliceContainer";
import { IntroSlice } from "src/pages/home/introSlice";
import { InvestmentUniverseSlice } from "src/pages/home/investmentUniverse";
import { PressSliceContainer } from "src/pages/home/pressSliceContainer";
import { TestimonialsSliceContainer } from "src/pages/home/testimonialsSliceContainer";
import { HomepageContext } from "src/pages/home/types";
import { GenericSlice } from "src/shared/slices/genericSlice";
import { ReadyToInvest } from "src/shared/slices/readyToInvest";

import { HomepageDocument } from "lib/types.generated";

export interface HomeProps extends HomepageContext {
  doc: HomepageDocument;
}

export const Home: FC<HomeProps> = ({ doc, postDocs }) => (
  <SliceZone
    slices={doc.data.body}
    components={{
      testimonials: TestimonialsSliceContainer,
      press: PressSliceContainer,
      blog_posts: BlogPostsSliceContainer,
      intro: IntroSlice,
      investment_universe: InvestmentUniverseSlice,
      ready_to_invest: ReadyToInvest,
      generic: GenericSlice
    }}
    context={{ postDocs }}
  />
);
