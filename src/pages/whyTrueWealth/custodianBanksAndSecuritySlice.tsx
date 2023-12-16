import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Image from "next/image";
import React, { FC } from "react";

import { Card } from "src/core/card";
import { Section } from "src/core/section/section";
import { SectionContainer } from "src/core/section/sectionContainer";
import styles from "src/pages/whyTrueWealth/custodianBanksAndSecuritySlice.module.scss";

import { htmlSerializer } from "lib/prismic/htmlSerializer";
import { WhyTrueWealthDocumentDataBodyCustodianBanksAndSecuritySlice } from "lib/types.generated";

type Props = SliceComponentProps<WhyTrueWealthDocumentDataBodyCustodianBanksAndSecuritySlice>;

export const CustodianBanksAndSecurity: FC<Props> = ({
  slice: {
    primary: { custodian_bank_content, blkb_content, saxo_content, security_content }
  }
}) => (
  <Section variant={"light"} className={styles.section}>
    <SectionContainer>
      <div className={styles.cardGroup}>
        <Card className={styles.card}>
          <div className={styles.custodianBanksContent}>
            <PrismicRichText field={custodian_bank_content} components={htmlSerializer} />
          </div>
          <div className={styles.bankContent}>
            <div className={styles.imageContainer}>
              <Image
                src="/blkb.svg"
                alt="BLKB Logo"
                width={126}
                height={37}
                style={{
                  maxWidth: "100%",
                  height: "auto"
                }}
              />
            </div>
            <PrismicRichText field={blkb_content} components={htmlSerializer} />
          </div>
          <div className={styles.bankContent}>
            <div className={styles.imageContainer}>
              <Image
                src="/saxo.svg"
                alt="SAXO Logo"
                width={90}
                height={71}
                style={{
                  maxWidth: "100%",
                  height: "auto"
                }}
              />
            </div>
            <PrismicRichText field={saxo_content} components={htmlSerializer} />
          </div>
        </Card>
        <Card className={styles.card}>
          <PrismicRichText field={security_content} components={htmlSerializer} />
        </Card>
      </div>
    </SectionContainer>
  </Section>
);
