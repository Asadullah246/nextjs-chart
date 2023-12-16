/* eslint-disable @next/next/no-img-element */
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import classNames from "classnames";
import React, { FC } from "react";

import { Card } from "src/core/card";
import { Icon, IconType } from "src/core/icon";
import { Section } from "src/core/section/section";
import { SectionBackgroundImage } from "src/core/section/sectionBackgroundImage";
import { SectionContainer } from "src/core/section/sectionContainer";
import styles from "src/pages/whoIsItFor/isRightSlice.module.scss";
import { ReadyToInvestGroup } from "src/shared/readyToInvestGroup";

import { htmlSerializer } from "lib/prismic/htmlSerializer";
import { WhoIsItForDocumentDataBodyIsRightSlice } from "lib/types.generated";

type Props = SliceComponentProps<WhoIsItForDocumentDataBodyIsRightSlice>;

export const IsRightSlice: FC<Props> = ({
  slice: {
    primary: { title, image, box_1, box_2, box_3, box_4, box_5 }
  }
}) => (
  <Section variant="pearl">
    <SectionBackgroundImage bottom={50} right={-140} inverse />
    <SectionContainer className={styles.container}>
      {title && <Title title={title} icon={"tickOutline"} />}

      <div className={styles.cardGroup}>
        <Card className={classNames(styles.card, styles.box1)}>
          <PrismicRichText field={box_1} components={htmlSerializer} />
        </Card>
        <Card className={classNames(styles.card, styles.box2)}>
          <PrismicRichText field={box_2} components={htmlSerializer} />
        </Card>
        <Card className={classNames(styles.card, styles.box3)}>
          <PrismicRichText field={box_3} components={htmlSerializer} />
        </Card>
        <Card className={classNames(styles.card, styles.box4)}>
          <PrismicRichText field={box_4} components={htmlSerializer} />
        </Card>
        <Card className={classNames(styles.imageCard, styles.box5)}>
          {image?.url && (
            <img
              src={image.url}
              loading="lazy"
              width={image.dimensions?.width}
              height={image.dimensions?.height}
              alt={image.alt ?? "Who is it for"}
            />
          )}
        </Card>
        <Card className={classNames(styles.card, styles.box6)}>
          <PrismicRichText field={box_5} components={htmlSerializer} />
        </Card>
      </div>
      <ReadyToInvestGroup className={styles.readyToInvest} />
    </SectionContainer>
  </Section>
);

export const Title: FC<{ title: string; icon: IconType }> = ({ title, icon }) => (
  <h2 className={styles.title}>
    <span className={styles.icon}>
      <Icon icon={icon} />
    </span>
    <span>{title}</span>
  </h2>
);
