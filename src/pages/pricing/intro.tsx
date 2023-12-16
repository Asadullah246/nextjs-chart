import { LinkType } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Image from "next/image";
import { FC, useState } from "react";

import { Card } from "src/core/card";
import { InfoTooltip } from "src/core/infoTooltip";
import { Link } from "src/core/link";
import { Section } from "src/core/section/section";
import { SectionBackgroundImage } from "src/core/section/sectionBackgroundImage";
import { SectionContainer } from "src/core/section/sectionContainer";
import { Slider } from "src/core/slider";
import styles from "src/pages/pricing/intro.module.scss";
import { PrismicPricingContext } from "src/pages/pricing/types";
import { useTranslation } from "src/shared/translations";

import { htmlSerializer } from "lib/prismic/htmlSerializer";
import { determineFee, radicalCostsConfig } from "lib/radicalCosts.config";
import { PricingDocumentDataBodyIntroSlice } from "lib/types.generated";

const {
  untiedInitialInvestmentAmount,
  untiedInvestmentAmounts,
  s3aInitialInvestmentAmount,
  s3aInvestmentAmounts,
  childPortfolioInitialInvestmentAmount,
  childPortfolioInvestmentAmounts,
  averageTER,
  untiedStandardFee,
  s3aStandardFee,
  fee
} = radicalCostsConfig;

type Props = SliceComponentProps<PricingDocumentDataBodyIntroSlice, PrismicPricingContext>;

export const IntroSlice: FC<Props> = ({
  slice: {
    primary: { title, quote_rich, quote_image, quote_link, quote_link_text }
  }
}) => {
  const { t } = useTranslation();
  const [plannedUntiedInvestmentIndex, setPlannedUntiedInvestmentIndex] = useState(
    untiedInvestmentAmounts.indexOf(untiedInitialInvestmentAmount)
  );
  const [plannedS3aInvestmentIndex, setPlannedS3aInvestmentIndex] = useState(
    s3aInvestmentAmounts.indexOf(s3aInitialInvestmentAmount)
  );
  const [plannedChildPortfolioInvestmentIndex, setPlannedChildPortfolioInvestmentIndex] = useState(
    childPortfolioInvestmentAmounts.indexOf(childPortfolioInitialInvestmentAmount)
  );
  const untiedAmount = untiedInvestmentAmounts[plannedUntiedInvestmentIndex];
  const s3aAmount = s3aInvestmentAmounts[plannedS3aInvestmentIndex];
  const childPortfolioAmount =
    childPortfolioInvestmentAmounts[plannedChildPortfolioInvestmentIndex];
  const totalAmount = untiedAmount + s3aAmount + childPortfolioAmount;
  const feeRelevantAmount = untiedAmount + childPortfolioAmount;

  const trueWealthFees = determineFee(feeRelevantAmount, fee);
  const feeRelevantAmountWeightedFee =
    (feeRelevantAmount * trueWealthFees) / Math.max(totalAmount, 1);
  const s3aAmountWeightedFee = (s3aAmount * s3aStandardFee) / Math.max(totalAmount, 1);
  const totalAmountWeightedFee = feeRelevantAmountWeightedFee + s3aAmountWeightedFee;
  const totalCosts = totalAmountWeightedFee + averageTER;

  return (
    <Section variant="lightToPearl">
      <SectionBackgroundImage inverse top={120} right={-300} />
      <SectionContainer noMaxWidth>
        <div className={styles.title}>
          <PrismicRichText field={title} components={htmlSerializer} />
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 max-w-xl xl:max-w-7xl mx-auto">
          <Card className={styles.card}>
            <div className={styles.fees}>
              <h2>{t("pricing.fees.title")}</h2>
              <div className={styles.feesTotalContainer}>
                <div className={styles.feesMax}>
                  {totalAmountWeightedFee === untiedStandardFee && "max."}
                </div>
                <div className={styles.feesTotal}>{(totalAmountWeightedFee * 100).toFixed(2)}</div>
                <div className={styles.feesPercentage}>%</div>
              </div>
              <div className={styles.feesPerAnnum}>{t("pricing.fees.perAnnum")}</div>
            </div>
            <div className={styles.feesSliders}>
              <Slider
                ariaLabelForHandle="Planned untied investment amount slider"
                label={t("pricing.fees.plannedUntied")}
                labelValue={untiedAmount.toLocaleString("de-CH")}
                min={0}
                max={untiedInvestmentAmounts.length - 1}
                marks={Object.fromEntries(untiedInvestmentAmounts.map((e) => [e, e]))}
                value={plannedUntiedInvestmentIndex}
                onChange={(val) => {
                  if (val < untiedInvestmentAmounts.length) {
                    setPlannedUntiedInvestmentIndex(val);
                  }
                }}
              />
              <Slider
                ariaLabelForHandle="Planned S3a investment amount slider"
                label={t("pricing.fees.plannedS3a")}
                labelValue={s3aAmount.toLocaleString("de-CH")}
                min={0}
                max={s3aInvestmentAmounts.length - 1}
                marks={Object.fromEntries(s3aInvestmentAmounts.map((e) => [e, e]))}
                value={plannedS3aInvestmentIndex}
                onChange={(val) => {
                  if (val < s3aInvestmentAmounts.length) {
                    setPlannedS3aInvestmentIndex(val);
                  }
                }}
              />
              <Slider
                ariaLabelForHandle="Child portfolio investment amount slider"
                label={t("pricing.fees.childPortfolio")}
                labelValue={childPortfolioAmount.toLocaleString("de-CH")}
                min={0}
                max={childPortfolioInvestmentAmounts.length - 1}
                marks={Object.fromEntries(childPortfolioInvestmentAmounts.map((e) => [e, e]))}
                value={plannedChildPortfolioInvestmentIndex}
                onChange={(val) => {
                  if (val < childPortfolioInvestmentAmounts.length) {
                    setPlannedChildPortfolioInvestmentIndex(val);
                  }
                }}
              />
            </div>
            <div className={styles.feesTableContainer}>
              <table className={styles.feesTable}>
                <tbody>
                  <tr>
                    <td>
                      {t("pricing.fees.table.trueWealth")}
                      <InfoTooltip tooltip={t("pricing.fees.table.trueWealth.tooltip")} />
                    </td>
                    <td>{(totalAmountWeightedFee * 100).toFixed(2)}%</td>
                  </tr>
                  <tr>
                    <td>{t("pricing.fees.table.ter")}</td>
                    <td>{averageTER * 100}%</td>
                  </tr>
                  <tr>
                    <td>Total</td>
                    <td>
                      {(totalCosts * 100).toFixed(2)}% {t("pricing.fees.table.ter.perYear")}
                    </td>
                  </tr>
                </tbody>
              </table>
              <Link
                external={false}
                link={{
                  link_type: LinkType.Web,
                  url: "#feesInDetail"
                }}
              >
                {t("pricing.fees.detail")}
              </Link>
            </div>
          </Card>
          <Card className={styles.card}>
            <blockquote className="w-full">
              <PrismicRichText field={quote_rich} components={htmlSerializer} />
              {quote_image?.url && (
                <Image src={quote_image.url} alt={quote_image.alt ?? ""} width={258} height={36} />
              )}
              <div>{quote_link && <Link link={quote_link}>{quote_link_text}</Link>}</div>
            </blockquote>
          </Card>
        </div>
      </SectionContainer>
    </Section>
  );
};
