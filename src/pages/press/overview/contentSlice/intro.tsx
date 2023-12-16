import { PrismicRichText } from "@prismicio/react";
import { buttonVariants } from "@true-wealth/ui-core";
import React, { FC } from "react";

import { Icon } from "src/core/icon";
import { Link } from "src/core/link";
import { Section } from "src/core/section/section";
import { SectionBackgroundImage } from "src/core/section/sectionBackgroundImage";
import { SectionContainer } from "src/core/section/sectionContainer";
import styles from "src/pages/press/overview/contentSlice/intro.module.scss";

import { htmlSerializer } from "lib/prismic/htmlSerializer";
import { PressDocument } from "lib/types.generated";

interface Props {
  doc: PressDocument;
}

export const Intro: FC<Props> = ({
  doc: {
    data: { image, intro, link, link_text }
  }
}) => (
  <Section variant="light">
    <SectionBackgroundImage inverse top={0} right={-400} />
    <SectionContainer
      image={image}
      imagePosition="right"
      imageLoading="eager"
      className={styles.introContainer}
    >
      <div className={styles.intro}>
        <PrismicRichText field={intro} components={htmlSerializer} />

        <Link
          icon={<Icon icon="chevronRight" />}
          className={buttonVariants({ look: "primary", size: "big" })}
          link={link}
        >
          {link_text}
        </Link>
      </div>
    </SectionContainer>
  </Section>
);
