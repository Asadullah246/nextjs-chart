/* eslint-disable @next/next/no-img-element */
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import React, { FC, useEffect, useState } from "react";

import { Card } from "src/core/card";
import { Section } from "src/core/section/section";
import { SectionBackgroundImage } from "src/core/section/sectionBackgroundImage";
import { SectionContainer } from "src/core/section/sectionContainer";
import { getOpenJobPositions } from "src/pages/jobs/data";
import styles from "src/pages/jobs/openPositions.module.scss";
import { JobsContext } from "src/pages/jobs/types";

import { htmlSerializer } from "lib/prismic/htmlSerializer";
import { JobsDocumentDataBodyOpenPositionsSlice } from "lib/types.generated";

type Props = SliceComponentProps<JobsDocumentDataBodyOpenPositionsSlice, JobsContext>;

export const OpenPositions: FC<Props> = ({
  slice: {
    primary: { application_note }
  },
  context: { openJobPositions }
}) => (
  <Section variant="whiteFixedToLight" id="openPositions">
    <SectionBackgroundImage left={-297} top={500} />
    <SectionContainer className={styles.container}>
      <Card className={styles.card}>
        <BambooPostings ssrOpenJobPositions={openJobPositions} />
        <div className={styles.applicationNote}>
          <PrismicRichText field={application_note} components={htmlSerializer} />
        </div>
      </Card>
    </SectionContainer>
  </Section>
);

const BambooPostings: FC<{ ssrOpenJobPositions?: string }> = ({ ssrOpenJobPositions }) => {
  const [openJobPositions, setOpenJobPositions] = useState<string | undefined>(ssrOpenJobPositions);

  useEffect(() => {
    (async () => {
      // We fetch the data at build time (ssrOpenJobPositions) because some people run into CORS issues when fetching from bamboo in the browser.
      // We refetch it here so that updates to the positions don't require a new deployment.
      setOpenJobPositions(await getOpenJobPositions());
    })();
  }, []);

  if (!openJobPositions) {
    return null;
  }

  return (
    <div className={styles.bambooInclude}>
      <div dangerouslySetInnerHTML={{ __html: openJobPositions }} />
      <div className={styles.bambooIncludeFooter}>
        Powered by
        <a
          href="http://www.bamboohr.com"
          target="_blank"
          rel="noopener external nofollow noreferrer"
        >
          <img
            src="https://resources.bamboohr.com/images/footer-logo.png"
            loading="lazy"
            alt="BambooHR - HR software"
            width={96}
            height={16}
          />
        </a>
      </div>
    </div>
  );
};
