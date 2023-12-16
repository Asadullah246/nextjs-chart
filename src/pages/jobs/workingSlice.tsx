/* eslint-disable @next/next/no-img-element */
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import React, { FC } from "react";

import { Section } from "src/core/section/section";
import { SectionContainer } from "src/core/section/sectionContainer";
import { SectionHeading } from "src/core/section/sectionHeading";
import { JobsContext } from "src/pages/jobs/types";
import styles from "src/pages/jobs/workingSlice.module.scss";

import { htmlSerializer } from "lib/prismic/htmlSerializer";
import { JobsDocumentDataBodyWorkingSlice } from "lib/types.generated";

type Props = SliceComponentProps<JobsDocumentDataBodyWorkingSlice, JobsContext>;

export const WorkingSlice: FC<Props> = ({
  slice: {
    items,
    primary: { header, left_content }
  }
}) => (
  <Section>
    <SectionContainer className={styles.container}>
      <div className={styles.contentWrapper}>
        <div className={styles.leftContent}>
          {header && <SectionHeading title={header} />}
          <PrismicRichText field={left_content} components={htmlSerializer} />
        </div>
        <div className={styles.rightContent}>
          <ul>
            {items.map(({ image, content }) => (
              <li key={image?.url}>
                {image?.url && (
                  <img
                    src={image.url}
                    loading="lazy"
                    alt={image.alt ?? ""}
                    width={54}
                    height={64}
                  />
                )}
                <PrismicRichText field={content} components={htmlSerializer} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionContainer>
  </Section>
);
