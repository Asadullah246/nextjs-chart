import { asText } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import React, { FC, useState } from "react";

import { Box } from "src/core/box";
import { Card } from "src/core/card";
import { InputCurrency } from "src/core/inputCurrency";
import { NetReturn } from "src/core/netReturn";
import { Section } from "src/core/section/section";
import { SectionBackgroundImage } from "src/core/section/sectionBackgroundImage";
import { SectionContainer } from "src/core/section/sectionContainer";
import { Slider } from "src/core/slider";
import {
  annualCouponRateConfig,
  currencyConfig,
  faceValueConfig,
  percentageconfig,
  yearsToMaturityConfig,
  yieldToMaturityConfig
} from "src/pages/bondPriceCalculator/calculatorConfig";
import styles from "src/pages/bondPriceCalculator/calculatorSlice.module.scss";

import { htmlSerializer } from "lib/prismic/htmlSerializer";
import { BondPriceCalculatorDocumentDataBodyBondPriceCalculatorSlice } from "lib/types.generated";

type Props = SliceComponentProps<BondPriceCalculatorDocumentDataBodyBondPriceCalculatorSlice>;

export const CalculatorSlice: FC<Props> = ({
  slice: {
    primary: {
      intro,
      face_value_description,
      face_value_label,
      years_to_maturity_label,
      annual_coupon_rate_description,
      annual_coupon_rate_label,
      yield_to_maturity_description,
      yield_to_maturity_label,
      bond_value_description,
      further_information
    }
  }
}) => {
  const [faceValue, setFaceValue] = useState(faceValueConfig.default);
  const [yearsToMaturity, setYearsToMaturity] = useState(yearsToMaturityConfig.default);
  const [annualCouponRate, setAnnualCouponRate] = useState(annualCouponRateConfig.default);
  const [yieldToMaturity, setYieldToMaturity] = useState(yieldToMaturityConfig.default);
  const getBondValue = () => {
    const pvYieldToMaturity = yieldToMaturity / 100;
    const pvAnnualCouponRate = annualCouponRate / 100;
    const pvNotional = faceValue / (1 + pvYieldToMaturity) ** yearsToMaturity;
    const pvCoupons =
      pvAnnualCouponRate *
      faceValue *
      (pvYieldToMaturity !== 0
        ? (1 / pvYieldToMaturity) * (1 - 1 / (1 + pvYieldToMaturity) ** yearsToMaturity)
        : yearsToMaturity);

    return Math.floor(pvCoupons + pvNotional);
  };
  const bondValue = getBondValue();
  const netReturn = faceValue > 0 ? bondValue / (faceValue / 100) - 100 : 0;
  const interest = Math.floor((faceValue * annualCouponRate) / 100);
  return (
    <Section variant="light">
      <SectionBackgroundImage top={120} left={-300} />
      <SectionContainer>
        <div className={styles.intro}>
          <PrismicRichText field={intro} components={htmlSerializer} />
        </div>

        <Card className={styles.card}>
          <div className={styles.block}>
            {face_value_description && (
              <p
                dangerouslySetInnerHTML={{
                  __html: asText(face_value_description)
                    .replace(
                      "{{faceValue}}",
                      `<strong>${faceValue.toLocaleString("de-CH", currencyConfig)}</strong>`
                    )
                    .replace("{{yearsToMaturity}}", `<strong>${yearsToMaturity}</strong>`)
                }}
              />
            )}
            <div className={styles.inputBlock}>
              <InputCurrency
                id="faceValue"
                label={face_value_label}
                value={faceValue}
                onChange={setFaceValue}
                currency={faceValueConfig.valueSuffix}
                min={faceValueConfig.min}
              />
              <Box>
                <Slider
                  ariaLabelForHandle="Face value slider"
                  label={years_to_maturity_label}
                  labelValue={yearsToMaturity}
                  labelValueSuffix={yearsToMaturityConfig.valueSuffix}
                  min={yearsToMaturityConfig.min}
                  max={yearsToMaturityConfig.max}
                  step={yearsToMaturityConfig.step}
                  value={yearsToMaturity}
                  onChange={setYearsToMaturity}
                />
              </Box>
            </div>
          </div>

          <div className={styles.block}>
            {annual_coupon_rate_description && (
              <p
                dangerouslySetInnerHTML={{
                  __html: asText(annual_coupon_rate_description)
                    .replace(
                      "{{annualCouponRate}}",
                      `<strong>${(annualCouponRate / 100).toLocaleString(
                        "de-CH",
                        percentageconfig
                      )}</strong>`
                    )
                    .replace(
                      "{{interest}}",
                      `<strong>${interest.toLocaleString("de-CH", currencyConfig)}</strong>`
                    )
                }}
              />
            )}
            <div className={styles.inputBlock}>
              <Box>
                <Slider
                  ariaLabelForHandle="Annual coupon rate slider"
                  label={annual_coupon_rate_label}
                  labelValue={annualCouponRate.toFixed(2)}
                  labelValueSuffix={annualCouponRateConfig.valueSuffix}
                  min={annualCouponRateConfig.min}
                  max={annualCouponRateConfig.max}
                  step={annualCouponRateConfig.step}
                  value={annualCouponRate}
                  onChange={setAnnualCouponRate}
                />
              </Box>
            </div>
          </div>

          <div className={styles.block}>
            <PrismicRichText field={yield_to_maturity_description} components={htmlSerializer} />
            <div className={styles.inputBlock}>
              <Box>
                <Slider
                  ariaLabelForHandle="Yield to maturity slider"
                  label={yield_to_maturity_label}
                  labelValue={yieldToMaturity.toFixed(2)}
                  labelValueSuffix={yieldToMaturityConfig.valueSuffix}
                  min={yieldToMaturityConfig.min}
                  max={yieldToMaturityConfig.max}
                  step={yieldToMaturityConfig.step}
                  value={yieldToMaturity}
                  onChange={setYieldToMaturity}
                />
              </Box>
            </div>
          </div>

          <div className={styles.summary}>
            <PrismicRichText field={bond_value_description} components={htmlSerializer} />
            <div className={styles.bondValue}>
              <div className={styles.netReturn}>
                <NetReturn netReturn={netReturn} />
              </div>
              <div>
                {currencyConfig.currency} <strong>{bondValue.toLocaleString("de-CH")}</strong>
              </div>
            </div>
          </div>
          <PrismicRichText field={further_information} components={htmlSerializer} />
        </Card>
      </SectionContainer>
    </Section>
  );
};
