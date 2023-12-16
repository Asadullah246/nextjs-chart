/* eslint-disable @next/next/no-img-element */
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { buttonVariants } from "@true-wealth/ui-core";
import React, { FC } from "react";

import { Link } from "src/core/link";
import { Section } from "src/core/section/section";
import { SectionContainer } from "src/core/section/sectionContainer";
import { JobsContext } from "src/pages/jobs/types";

import { htmlSerializer } from "lib/prismic/htmlSerializer";
import { JobsDocumentDataBodyLearnMoreSlice } from "lib/types.generated";

type Props = SliceComponentProps<JobsDocumentDataBodyLearnMoreSlice, JobsContext>;

export const LearnMore: FC<Props> = ({
  slice: {
    primary: { content, link_target, link_content }
  }
}) => (
  <Section variant="pearl">
    <SectionContainer>
      <div className="flex flex-col items-center gap-4">
        <div className="text-center max-w-xl">
          <PrismicRichText field={content} components={htmlSerializer} />
        </div>
        <Link className={buttonVariants({ look: "primary" })} link={link_target}>
          <PrismicRichText field={link_content} components={htmlSerializer} />
        </Link>
      </div>
    </SectionContainer>
  </Section>
);
