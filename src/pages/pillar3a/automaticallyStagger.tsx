import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { buttonVariants } from "@true-wealth/ui-core";
import React, { FC } from "react";

import { Section } from "src/core/section/section";
import { SectionContainer } from "src/core/section/sectionContainer";
import styles from "src/pages/pillar3a/automaticallyStagger.module.scss";
import { Pillar3aContext } from "src/pages/pillar3a/types";
import { RealSignUpButton } from "src/shared/buttons/realSignUpButton";

import { htmlSerializer } from "lib/prismic/htmlSerializer";
import { Pillar3aDocumentDataBodyAutomaticallyStaggerSlice } from "lib/types.generated";

type Props = SliceComponentProps<
  Pillar3aDocumentDataBodyAutomaticallyStaggerSlice,
  Pillar3aContext
>;

export const AutomaticallyStaggerSlice: FC<Props> = ({
  slice: {
    primary: { intro, open_account, open_account_link_text },
    items
  }
}) => (
  <Section variant="light">
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
        <RealSignUpButton className={buttonVariants({ look: "primary" })}>
          {open_account_link_text}
        </RealSignUpButton>
      </div>
    </SectionContainer>
  </Section>
);
