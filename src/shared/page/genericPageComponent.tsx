import { PrismicRichText, PrismicRichTextProps } from "@prismicio/react";
import React, { FC, PropsWithChildren } from "react";

import { Card } from "src/core/card";
import { Section } from "src/core/section/section";
import { SectionBackgroundImage } from "src/core/section/sectionBackgroundImage";
import { SectionContainer } from "src/core/section/sectionContainer";
import styles from "src/shared/page/genericPageComponent.module.scss";
import { ReadyToInvest } from "src/shared/slices/readyToInvest";

import { htmlSerializer } from "lib/prismic/htmlSerializer";

interface Props {
  title?: PrismicRichTextProps["field"];
  content?: PrismicRichTextProps["field"];
  readyToInvest?: boolean;
}

export const GenericPageComponent: FC<PropsWithChildren<Props>> = ({
  title,
  content,
  readyToInvest,
  children
}) => (
  <>
    <Section variant="light">
      <SectionBackgroundImage top={1400} left={-280} />
      <SectionBackgroundImage bottom={150} right={0} inverse />
      <SectionContainer className={styles.container}>
        {title && <PrismicRichText field={title} components={htmlSerializer} />}
        {content && (
          <div className={styles.content}>
            <PrismicRichText field={content} components={htmlSerializer} />
          </div>
        )}
        <Card className={styles.card}>{children}</Card>
      </SectionContainer>
    </Section>
    {readyToInvest && <ReadyToInvest />}
  </>
);
