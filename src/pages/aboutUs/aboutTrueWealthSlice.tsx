import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import React, { FC } from "react";

import { Section } from "src/core/section/section";
import { SectionBackgroundImage } from "src/core/section/sectionBackgroundImage";
import { SectionContainer } from "src/core/section/sectionContainer";
import styles from "src/pages/aboutUs/aboutTrueWealthSlice.module.scss";

import { htmlSerializer } from "lib/prismic/htmlSerializer";
import { AboutUsDocumentDataBodyAboutTrueWealthSlice } from "lib/types.generated";

type Props = SliceComponentProps<AboutUsDocumentDataBodyAboutTrueWealthSlice>;

export const AboutTrueWealth: FC<Props> = ({
  slice: {
    primary: { title, content, image }
  }
}) => (
  <Section variant={"light"} className={styles.section}>
    <SectionBackgroundImage right={-135} top={0} inverse />
    <SectionContainer
      className={styles.container}
      imagePosition="right"
      image={image}
      imageLoading="eager"
    >
      <div className={styles.contentWrapper}>
        <PrismicRichText field={title} components={htmlSerializer} />
        <div className={styles.content}>
          <PrismicRichText field={content} components={htmlSerializer} />
        </div>
      </div>
    </SectionContainer>
  </Section>
);
