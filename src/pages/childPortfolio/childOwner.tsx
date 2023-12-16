import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import dynamic from "next/dynamic";
import React, { FC } from "react";

import { Anchor } from "src/core/anchor";
import { Section } from "src/core/section/section";
import { SectionContainer } from "src/core/section/sectionContainer";
import styles from "src/pages/childPortfolio/childOwner.module.scss";
import { ChildPortfolioContext } from "src/pages/childPortfolio/types";

import { htmlSerializer } from "lib/prismic/htmlSerializer";
import { ChildPortfolioDocumentDataBodyChildOwnerSlice } from "lib/types.generated";

const ChildOwnerShareButton = dynamic(
  () =>
    import("src/pages/childPortfolio/childOwnerShareButton").then((m) => m.ChildOwnerShareButton),
  { ssr: false }
);

type Props = SliceComponentProps<
  ChildPortfolioDocumentDataBodyChildOwnerSlice,
  ChildPortfolioContext
>;

export const ChildOwnerSlice: FC<Props> = ({
  slice: {
    primary: { intro, open_account, open_account_link_text },
    items
  }
}) => (
  <Section variant="light">
    <Anchor id="childOwner" />
    <SectionContainer>
      <div className={styles.intro}>
        <PrismicRichText field={intro} components={htmlSerializer} />
      </div>
      <div className={styles.grid}>
        {items.map((item, i) => (
          <div key={`automatically-staggered-${i}`} className={styles.gridItem}>
            <PrismicRichText field={item.content} components={htmlSerializer} />
          </div>
        ))}
      </div>
      <div className="text-center mt-14 lg:mt-20">
        <div className="text-xl mb-6">
          <PrismicRichText field={open_account} components={htmlSerializer} />
        </div>
        <ChildOwnerShareButton label={open_account_link_text} />
      </div>
    </SectionContainer>
  </Section>
);
