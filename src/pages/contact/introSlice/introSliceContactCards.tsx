import { LinkType } from "@prismicio/client";
import { PrismicRichText } from "@prismicio/react";
import { buttonVariants } from "@true-wealth/ui-core";
import classNames from "classnames";
import React, { FC } from "react";

import { Card } from "src/core/card";
import { Icon } from "src/core/icon";
import { Link } from "src/core/link";
import { Section } from "src/core/section/section";
import { SectionContainer } from "src/core/section/sectionContainer";
import styles from "src/pages/contact/introSlice/introSliceContactCards.module.scss";

import { htmlSerializer } from "lib/prismic/htmlSerializer";
import { ContactDocumentDataBodyIntroSlicePrimary } from "lib/types.generated";

interface Props {
  item: ContactDocumentDataBodyIntroSlicePrimary;
}

export const IntroSliceContactCards: FC<Props> = ({
  item: {
    box_1_title,
    box_1_link,
    box_1_link_label,
    box_1_content,
    box_2_title,
    box_2_content,
    box_2_email_address,
    box_3_title,
    box_3_content,
    box_3_phone_number
  }
}) => (
  <Section className={styles.cardSection}>
    <SectionContainer className={styles.cardSectionContainer}>
      <div className={styles.cardGroup}>
        <Card className={classNames(styles.card, styles.onlineHelp)}>
          <h2>
            <Icon icon="help" />
            <span>{box_1_title}</span>
          </h2>
          {box_1_link && (
            <Link className={styles.faqLink} link={box_1_link}>
              {box_1_link_label}
            </Link>
          )}
          <PrismicRichText field={box_1_content} components={htmlSerializer} />
        </Card>
        <Card className={classNames(styles.card, styles.email)}>
          <h2>
            <Icon icon="email" />
            <span>{box_2_title}</span>
          </h2>
          <Link
            className={buttonVariants({ look: "secondary" })}
            link={{
              link_type: LinkType.Web,
              url: `mailto:${box_2_email_address}`
            }}
          >
            {box_2_email_address}
          </Link>
          <PrismicRichText field={box_2_content} components={htmlSerializer} />
        </Card>
        <Card className={classNames(styles.card, styles.phone)}>
          <h2>
            <Icon icon="phone" />
            <span>{box_3_title}</span>
          </h2>
          <Link
            className={buttonVariants({ look: "secondary" })}
            link={{
              link_type: LinkType.Web,
              url: `tel:${box_3_phone_number}`
            }}
          >
            {box_3_phone_number}
          </Link>
          <PrismicRichText field={box_3_content} components={htmlSerializer} />
        </Card>
      </div>
    </SectionContainer>
  </Section>
);
