import { PrismicRichText } from "@prismicio/react";
import classNames from "classnames";
import React, { FC } from "react";

import { Section } from "src/core/section/section";
import { SectionContainer } from "src/core/section/sectionContainer";
import { SectionHeading } from "src/core/section/sectionHeading";
import styles from "src/shared/slices/genericSlice.module.scss";
import { PrismicGenericSlice } from "src/shared/slices/types";

import { htmlSerializer } from "lib/prismic/htmlSerializer";

type Props = {
  slice: PrismicGenericSlice;
  context?: any;
};

export const GenericSlice: FC<Props> = ({ slice: { primary }, context }) => {
  const { header, content, image, image_position, extended_image } = primary;
  return (
    <Section>
      <SectionContainer
        image={image}
        imagePosition={image_position}
        extendedImage={extended_image}
        className={classNames(
          styles.wrapper,
          context ? context.sectionContainerClassName : undefined
        )}
      >
        {header && <SectionHeading title={header} />}
        <PrismicRichText field={content} components={htmlSerializer} />
      </SectionContainer>
    </Section>
  );
};
