import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import classNames from "classnames";
import React, { FC } from "react";

import { Card } from "src/core/card";
import { Section } from "src/core/section/section";
import { SectionContainer } from "src/core/section/sectionContainer";
import styles from "src/pages/whoIsItFor/isNotRightSlice.module.scss";
import { Title } from "src/pages/whoIsItFor/isRightSlices";

import { htmlSerializer } from "lib/prismic/htmlSerializer";
import { WhoIsItForDocumentDataBodyIsNotRightSlice } from "lib/types.generated";

type Props = SliceComponentProps<WhoIsItForDocumentDataBodyIsNotRightSlice>;

export const IsNotRightSlice: FC<Props> = ({
  slice: {
    primary: { title, box_1, box_2, box_3, box_4 }
  }
}) => (
  <Section variant="light">
    <SectionContainer className={styles.container}>
      {title && <Title title={title} icon={"close"} />}

      <div className={styles.cardGroup}>
        <Card className={classNames(styles.card, styles.box1)}>
          <PrismicRichText field={box_1} components={htmlSerializer} />
        </Card>
        <Card className={classNames(styles.card, styles.box2)}>
          <PrismicRichText field={box_2} components={htmlSerializer} />
        </Card>
      </div>
      <div className={styles.cardGroup}>
        <Card className={classNames(styles.card, styles.box3)}>
          <PrismicRichText field={box_3} components={htmlSerializer} />
        </Card>
        <Card className={classNames(styles.card, styles.faq)}>
          <PrismicRichText field={box_4} components={htmlSerializer} />
        </Card>
      </div>
    </SectionContainer>
  </Section>
);
