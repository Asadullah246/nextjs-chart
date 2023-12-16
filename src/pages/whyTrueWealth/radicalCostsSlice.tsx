import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { useRouter } from "next/router";
import React, { FC } from "react";

import { Section } from "src/core/section/section";
import { SectionContainer } from "src/core/section/sectionContainer";
import { SectionHeading } from "src/core/section/sectionHeading";
import styles from "src/pages/whyTrueWealth/radicalCostsSlice.module.scss";
import { IFrame } from "src/shared/iFrame";

import { htmlSerializer } from "lib/prismic/htmlSerializer";
import { WhyTrueWealthDocumentDataBodyRadicalCostsSlice } from "lib/types.generated";

type Props = SliceComponentProps<WhyTrueWealthDocumentDataBodyRadicalCostsSlice>;

export const RadicalCostsSlice: FC<Props> = ({
  slice: {
    primary: { heading, content }
  }
}) => {
  const { locale: localeIso } = useRouter();
  const iframeSrc = `${process.env.NEXT_PUBLIC_APP_URL}/app/radical-costs?lang=${localeIso}`;

  return (
    <Section id={"WhyView"}>
      <SectionContainer className={styles.sectionContainer}>
        {heading && <SectionHeading title={heading} />}
        <div className={styles.content}>
          <PrismicRichText field={content} components={htmlSerializer} />
        </div>
        <IFrame src={iframeSrc} title="Radical Costs Chart" />
      </SectionContainer>
    </Section>
  );
};
