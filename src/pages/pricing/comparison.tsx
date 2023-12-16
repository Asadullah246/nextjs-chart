import { RichTextField } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { Button, buttonVariants } from "@true-wealth/ui-core";
import classNames from "classnames";
import { useRouter } from "next/router";
import { FC, useEffect, useRef, useState } from "react";
import Carousel from "react-slick";

import { Card } from "src/core/card";
import { Icon } from "src/core/icon";
import { Section } from "src/core/section/section";
import { SectionContainer } from "src/core/section/sectionContainer";
import styles from "src/pages/pricing/comparison.module.scss";
import { PrismicPricingContext } from "src/pages/pricing/types";
import { RealSignUpButton } from "src/shared/buttons/realSignUpButton";
import { Logo } from "src/shared/logo";
import { useTranslation } from "src/shared/translations";

import { defaultCarouselProps } from "lib/carousel";
import { htmlSerializer } from "lib/prismic/htmlSerializer";
import {
  PricingDocumentDataBodyComparisonSlice,
  PricingDocumentDataBodyComparisonSliceItem
} from "lib/types.generated";

enum Tabs {
  UNTIED = "untied",
  CHILD_PORTFOLIO = "childPortfolio",
  S3A = "s3a"
}

export const ComparisonSlice: FC<
  SliceComponentProps<PricingDocumentDataBodyComparisonSlice, PrismicPricingContext>
> = ({ slice }) => {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [activeTab, setActiveTab] = useState(Tabs.UNTIED);
  const { query } = useRouter();

  useEffect(() => {
    if (sectionRef.current && query.productType) {
      if (query.productType === "s3a") {
        setActiveTab(Tabs.S3A);
      } else if (query.productType === "childPortfolio") {
        setActiveTab(Tabs.CHILD_PORTFOLIO);
      } else if (query.productType === "untied") {
        setActiveTab(Tabs.UNTIED);
      }
      sectionRef.current.scrollIntoView();
    }
  }, [query, sectionRef]);

  return (
    <>
      <Section variant="pearl">
        <SectionContainer className={styles.sectionContainer}>
          <div className={styles.intro} ref={sectionRef}>
            <PrismicRichText field={slice.primary.intro} components={htmlSerializer} />
          </div>
          <div className="flex flex-col gap-6">
            <div className="lg:inline-flex lg:whitespace-nowrap mb-12 lg:border border-light-400 divide-y lg:divide-y-0 lg:divide-x divide-light-400 mx-auto">
              <Button
                size="big"
                look="secondary"
                className={classNames("w-full", { "!bg-light-400": activeTab === Tabs.UNTIED })}
                onClick={() => setActiveTab(Tabs.UNTIED)}
              >
                {t("pricing.comparison.tabs.untied")}
              </Button>
              <Button
                size="big"
                look="secondary"
                className={classNames("w-full", {
                  "!bg-light-400": activeTab === Tabs.CHILD_PORTFOLIO
                })}
                onClick={() => setActiveTab(Tabs.CHILD_PORTFOLIO)}
              >
                {t("pricing.comparison.tabs.childPortfolio")}
              </Button>
              <Button
                size="big"
                look="secondary"
                className={classNames("w-full", { "!bg-light-400": activeTab === Tabs.S3A })}
                onClick={() => setActiveTab(Tabs.S3A)}
              >
                {t("pricing.comparison.tabs.s3a")}
              </Button>
            </div>
            <div>
              {activeTab === Tabs.UNTIED && <UntiedComparisonItem slice={slice} />}
              {activeTab === Tabs.CHILD_PORTFOLIO && <ChildPortfolioComparisonItem slice={slice} />}
              {activeTab === Tabs.S3A && <S3aComparisonItem slice={slice} />}
            </div>
          </div>
        </SectionContainer>
      </Section>
    </>
  );
};

const UntiedComparisonItem: FC<{ slice: PricingDocumentDataBodyComparisonSlice }> = ({
  slice: { items, primary }
}) => (
  <ComparisonItem
    trueWealthItems={items.filter(({ category }) => category === "Untied True Wealth")}
    bankItems={items.filter(({ category }) => category === "Untied Banks")}
    othersItems={items.filter(({ category }) => category === "Untied Others")}
    trueWealthFooter={primary.untied_true_wealth_footer}
    bankTitle={primary.untied_banks_title}
    bankFooter={primary.untied_banks_footer}
    othersTitle={primary.untied_others_title}
    othersFooter={primary.untied_others_footer}
  />
);

const ChildPortfolioComparisonItem: FC<{
  slice: PricingDocumentDataBodyComparisonSlice;
}> = ({ slice: { items, primary } }) => (
  <ComparisonItem
    trueWealthItems={items.filter(({ category }) => category === "Child Portfolio True Wealth")}
    bankItems={items.filter(({ category }) => category === "Child Portfolio Banks")}
    othersItems={items.filter(({ category }) => category === "Child Portfolio Others")}
    trueWealthFooter={primary.child_portfolio_true_wealth_footer}
    bankTitle={primary.child_portfolio_funds_title}
    bankFooter={primary.child_portfolio_funds_footer}
    othersTitle={primary.child_portfolio_others_title}
    othersFooter={primary.child_portfolio_others_footer}
  />
);

const S3aComparisonItem: FC<{
  slice: PricingDocumentDataBodyComparisonSlice;
}> = ({ slice: { items, primary } }) => (
  <ComparisonItem
    trueWealthItems={items.filter(({ category }) => category === "S3A True Wealth")}
    bankItems={items.filter(({ category }) => category === "S3A Retirement Funds")}
    othersItems={items.filter(({ category }) => category === "S3A Others")}
    trueWealthFooter={primary.s3a_true_wealth_footer}
    bankTitle={primary.s3a_retirement_funds_title}
    bankFooter={primary.s3a_retirement_funds_footer}
    othersTitle={primary.s3a_others_title}
    othersFooter={primary.s3a_others_footer}
  />
);

const ComparisonItem: FC<{
  bankItems: PricingDocumentDataBodyComparisonSliceItem[];
  bankTitle: RichTextField;
  bankFooter: RichTextField;
  trueWealthItems: PricingDocumentDataBodyComparisonSliceItem[];
  trueWealthFooter: RichTextField;
  othersItems: PricingDocumentDataBodyComparisonSliceItem[];
  othersTitle: RichTextField;
  othersFooter: RichTextField;
}> = ({
  bankItems,
  bankTitle,
  bankFooter,
  trueWealthItems,
  trueWealthFooter,
  othersItems,
  othersTitle,
  othersFooter
}) => {
  return (
    <Carousel
      {...defaultCarouselProps}
      className={styles.carousel}
      slidesToShow={3}
      draggable={false}
      initialSlide={1}
      dots={false}
      responsive={[
        {
          breakpoint: 1200,
          settings: {
            draggable: true,
            autoplay: false,
            dots: true,
            infinite: false,
            centerPadding: "15px",
            centerMode: true,
            slidesToShow: 1
          }
        }
      ]}
    >
      <Card className={classNames(styles.carouselItem, styles.carouselItemSecondary)}>
        <div className={styles.carouselItemHeader}>
          <PrismicRichText field={bankTitle} components={htmlSerializer} />
        </div>
        <div>
          {bankItems.map((item) => (
            <div className={styles.carouselGridItem} key={`${item.category}${item.label}`}>
              <Icon icon={item.tick ? "tickCircle" : "closeCircle"} />
              <div>
                <div className={styles.carouselGridItemLabel}>{item.label}</div>
                <div className={styles.carouselGridItemContent}>
                  <PrismicRichText field={item.content} components={htmlSerializer} />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.carouselGridItemFooter}>
          <PrismicRichText field={bankFooter} components={htmlSerializer} />
        </div>
      </Card>

      <Card className={styles.carouselItem}>
        <div className={styles.carouselItemHeader}>
          <Logo />
        </div>
        <div>
          {trueWealthItems.map((item) => (
            <div className={styles.carouselGridItem} key={`${item.category}${item.label}`}>
              <Icon icon={item.tick ? "tickCircleFilled" : "closeCircle"} />
              <div>
                <div className={styles.carouselGridItemLabel}>{item.label}</div>
                <div className={styles.carouselGridItemContent}>
                  <PrismicRichText field={item.content} components={htmlSerializer} />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.carouselGridItemFooter}>
          <PrismicRichText field={trueWealthFooter} components={htmlSerializer} />
          <div className="flex justify-center mt-8">
            <RealSignUpButton className={buttonVariants({ look: "primary" })} />
          </div>
        </div>
      </Card>

      <Card className={classNames(styles.carouselItem, styles.carouselItemSecondary)}>
        <div className={styles.carouselItemHeader}>
          <PrismicRichText field={othersTitle} components={htmlSerializer} />
        </div>
        <div>
          {othersItems.map((item) => (
            <div className={styles.carouselGridItem} key={`${item.category}${item.label}`}>
              <Icon icon={item.tick ? "tickCircle" : "closeCircle"} />
              <div>
                <div className={styles.carouselGridItemLabel}>{item.label}</div>
                <div className={styles.carouselGridItemContent}>
                  <PrismicRichText field={item.content} components={htmlSerializer} />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.carouselGridItemFooter}>
          <PrismicRichText field={othersFooter} components={htmlSerializer} />
        </div>
      </Card>
    </Carousel>
  );
};
