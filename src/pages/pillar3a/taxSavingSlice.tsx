import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import React, { FC, useState } from "react";

import { Section } from "src/core/section/section";
import { SectionContainer } from "src/core/section/sectionContainer";
import { Pillar3aTaxSavingChart } from "src/pages/pillar3a/pillar3a-tax-savings/pillar3aTaxSavingChart";
import { Pillar3aTaxSavingForm } from "src/pages/pillar3a/pillar3a-tax-savings/pillar3aTaxSavingForm";
import styles from "src/pages/pillar3a/taxSavingSlice.module.scss";

import {
  Children,
  CivilStatus,
  Gender,
  Pillar3aTaxInfo,
  Religion
} from "lib/pillar3a/taxSavingDomain";
import { htmlSerializer } from "lib/prismic/htmlSerializer";
import { Pillar3aDocumentDataBodyTaxSavingsCalculatorSlice } from "lib/types.generated";

import { Pillar3aContext } from "./types";

const DEFAULT_TAX_INFO: Pillar3aTaxInfo = {
  age: 30,
  municipality: {
    bfsId: 351,
    canton: "BE",
    city: "Bern"
  },
  gender: Gender.MALE,
  civilStatus: CivilStatus.SINGLE,
  religion: Religion.OTHER_NONE,
  children: Children.WITHOUT,
  pillar3aAssets: 0,
  taxableIncome: 150000,
  pillar3aContribution: 7056,
  missedYears: 5
};

export type Props = SliceComponentProps<
  Pillar3aDocumentDataBodyTaxSavingsCalculatorSlice,
  Pillar3aContext
>;

export const TaxSavingSlice: FC<Props> = ({
  slice: {
    primary: { title, subtitle, disclaimer }
  }
}) => {
  const [info, setInfo] = useState<Pillar3aTaxInfo>(DEFAULT_TAX_INFO);
  return (
    <Section>
      <div id="taxCalculator" className={styles.anchor} />
      <SectionContainer className={styles.container}>
        <div className={styles.intro}>
          <PrismicRichText field={title} components={htmlSerializer} />
          <PrismicRichText field={subtitle} components={htmlSerializer} />
        </div>
        <div className={styles.slice_container}>
          <Pillar3aTaxSavingForm value={info} onChange={setInfo} />
          <Pillar3aTaxSavingChart info={info} disclaimerText={disclaimer} />
        </div>
      </SectionContainer>
    </Section>
  );
};
