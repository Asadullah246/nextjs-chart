import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import classNames from "classnames";
import React, { FC } from "react";

import { Section } from "src/core/section/section";
import { SectionBackgroundImage } from "src/core/section/sectionBackgroundImage";
import { SectionContainer } from "src/core/section/sectionContainer";
import styles from "src/pages/aboutUs/storySlice.module.scss";

import { htmlSerializer } from "lib/prismic/htmlSerializer";
import { AboutUsDocumentDataBodyStorySlice } from "lib/types.generated";

type Props = SliceComponentProps<AboutUsDocumentDataBodyStorySlice>;

export const StorySlice: FC<Props> = ({
  slice: {
    primary: { title },
    items
  }
}) => (
  <Section variant="light" afterExtendedImage>
    <SectionBackgroundImage bottom={320} right={-140} inverse />
    <SectionContainer noHorizontalPadding>
      <div className={styles.title}>
        <PrismicRichText field={title} components={htmlSerializer} />
      </div>
      {items.map(({ year, content }, i) => {
        const isEven = i % 2 === 0;
        return (
          <div className={styles.item} key={i}>
            <div className={styles.yearContainer}>
              <div className={styles.year}>{year}</div>
            </div>
            <div
              className={classNames(styles.content, {
                [styles.even]: isEven
              })}
            >
              <PrismicRichText field={content} components={htmlSerializer} />
            </div>
          </div>
        );
      })}
    </SectionContainer>
  </Section>
);
