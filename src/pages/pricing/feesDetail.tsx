import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Image from "next/image";
import { FC } from "react";

import { Anchor } from "src/core/anchor";
import { Box } from "src/core/box";
import { Icon } from "src/core/icon";
import { Section } from "src/core/section/section";
import { SectionContainer } from "src/core/section/sectionContainer";
import { SectionHeading } from "src/core/section/sectionHeading";
import styles from "src/pages/pricing/feesDetail.module.scss";
import { PrismicPricingContext } from "src/pages/pricing/types";
import { useTranslation } from "src/shared/translations";

import { htmlSerializer } from "lib/prismic/htmlSerializer";
import { radicalCostsConfig } from "lib/radicalCosts.config";
import { PricingDocumentDataBodyFeeDetailsSlice } from "lib/types.generated";

const fees = radicalCostsConfig.fee.slice(1); // Remove element with nav and fee 0

export const FeesDetail: FC<
  SliceComponentProps<PricingDocumentDataBodyFeeDetailsSlice, PrismicPricingContext>
> = ({
  slice: {
    primary: {
      intro,
      section_title,
      payment_title,
      fee_content,
      ter_content,
      save_money_title,
      payment_footer,
      fees_table_title
    },
    items
  }
}) => {
  const { t } = useTranslation();
  const feesHalf = Math.ceil(fees.length / 2);
  const feesFirstHalf = fees.slice(0, feesHalf);
  const feesSecondHalf = fees.slice(feesHalf);

  return (
    <Section>
      <Anchor id="feesInDetail" />

      <SectionContainer className={styles.sectionContainer}>
        {section_title && <SectionHeading title={section_title} />}

        <div className={styles.intro}>
          <PrismicRichText field={intro} components={htmlSerializer} />
        </div>

        <div className={styles.explanation}>
          <div>
            <h3>{payment_title}</h3>
            <Box className={styles.youPayBox}>
              <Icon icon="tickCircleFilled" />
              <div>
                <PrismicRichText field={fee_content} components={htmlSerializer} />
              </div>
            </Box>
            <Box className={styles.youPayBox}>
              <Icon icon="tickCircleFilled" />
              <div>
                <PrismicRichText field={ter_content} components={htmlSerializer} />
              </div>
            </Box>
            <div className={styles.youPayNote}>
              <PrismicRichText field={payment_footer} components={htmlSerializer} />
            </div>
          </div>
          <div>
            <h3>{save_money_title}</h3>

            {items.map(({ content, image }, i) => (
              <div key={i} className={styles.saveMoneyBox}>
                {image?.url && (
                  <Image
                    src={image.url}
                    width={80}
                    height={80}
                    alt={image.alt ? image.alt : "True Wealth Client"}
                  />
                )}
                <div>
                  <PrismicRichText field={content} components={htmlSerializer} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <h3 id="degressive-pricing" className="scroll-m-24">
          {fees_table_title}
        </h3>

        <div className={styles.feesTableContainer}>
          <table className={styles.feesTable}>
            <tbody>
              {feesFirstHalf.map(({ nav, fee }) => (
                <tr key={nav}>
                  <td>
                    {t(
                      nav < 500_000
                        ? "pricing.fees.degressive.below"
                        : "pricing.fees.degressive.from",
                      {
                        value: `CHF ${Math.max(nav, 500_000).toLocaleString("de-CH")}`
                      }
                    )}
                  </td>
                  <td>{(fee * 100).toFixed(2)}%</td>
                </tr>
              ))}
            </tbody>
          </table>
          <table className={styles.feesTable}>
            <tbody>
              {feesSecondHalf.map(({ nav, fee }) => (
                <tr key={nav}>
                  <td>
                    {t(
                      nav < 500_000
                        ? "pricing.fees.degressive.below"
                        : "pricing.fees.degressive.from",
                      {
                        value: `CHF ${Math.max(nav, 500_000).toLocaleString("de-CH")}`
                      }
                    )}
                  </td>
                  <td>{(fee * 100).toFixed(2)}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SectionContainer>
    </Section>
  );
};
