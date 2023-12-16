import { LinkType } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { buttonVariants } from "@true-wealth/ui-core";
import classNames from "classnames";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { FC } from "react";

import { Card } from "src/core/card";
import { Icon } from "src/core/icon";
import { Link } from "src/core/link";
import { Section } from "src/core/section/section";
import { SectionBackgroundImage } from "src/core/section/sectionBackgroundImage";
import { SectionContainer } from "src/core/section/sectionContainer";
import styles from "src/pages/home/introSlice.module.scss";
import { Teaser } from "src/pages/home/teaser/teaser";
import { HomepageContext } from "src/pages/home/types";
import { RealSignUpButton } from "src/shared/buttons/realSignUpButton";
import { TestAccountSignUpButton } from "src/shared/buttons/testAccountSignUpButton";
import { useTranslation } from "src/shared/translations";

import { LocaleISO } from "lib/languages";
import { htmlSerializer } from "lib/prismic/htmlSerializer";
import { HomepageDocumentDataBodyIntroSlice } from "lib/types.generated";

export const IntroSlice: FC<
  SliceComponentProps<HomepageDocumentDataBodyIntroSlice, HomepageContext>
> = ({ slice: { primary } }) => {
  const { t } = useTranslation();
  const { locale: localeIso } = useRouter();
  const {
    title,
    text,
    image,
    advantages_title,
    card_1_row_1_title,
    card_1_row_1_value,
    card_1_row_2_title,
    card_1_row_2_value,
    card_1_row_3_title,
    card_1_row_3_value,
    card_1_title,
    card_2_text,
    card_2_title,
    card_3_text,
    card_3_title
  } = primary;
  const childPortfolioLink = {
    link_type: LinkType.Document,
    type: "child_portfolio",
    lang: localeIso,
    uid:
      localeIso === LocaleISO.DE
        ? "kinderportfolio"
        : localeIso === LocaleISO.EN
          ? "child-portfolio"
          : "portefeuille-enfant"
  };

  return (
    <Section variant="light" beforeExtendedImage>
      <SectionBackgroundImage right={-400} top={-10} inverse />
      <SectionBackgroundImage left={-280} bottom={550} />
      <SectionContainer>
        <div className={styles.text}>
          <div className={styles.content}>
            <PrismicRichText field={title} components={htmlSerializer} />
            <PrismicRichText field={text} components={htmlSerializer} />
            <div className="flex flex-col items-start md:items-center md:flex-row gap-8">
              <RealSignUpButton
                className={buttonVariants({ look: "primary", size: "big" })}
                icon={<Icon icon="chevronRight" />}
              />
              <TestAccountSignUpButton className="text-xl" />
            </div>
          </div>

          {image?.url && (
            <figure>
              <Image
                priority
                src={image.url}
                alt="True Wealth"
                fill
                sizes="(max-width: 544px) 287px, (max-width: 992px) 356px, (max-width: 1200px) 407px, 507px"
              />
            </figure>
          )}
        </div>
        <Card className="flex flex-col items-center xl:flex-row gap-6 p-8 mb-12">
          <div>
            <h2>{t("homepage.childPortfolio.title")}</h2>
            <p className="mb-0 xl:mb-6">{t("homepage.childPortfolio.intro")}</p>
            <Link
              className={classNames(
                "hidden xl:inline-block",
                buttonVariants({ look: "tertiary", size: "big" })
              )}
              link={childPortfolioLink}
            >
              {t("homepage.childPortfolio.readMore")}
            </Link>
          </div>
          <div className="flex flex-col w-full md:flex-row gap-4 text-center">
            <div className="bg-light-100 border border-light-200 flex flex-col justify-center items-center p-6 w-full xl:w-48">
              <Icon icon="saveMoney" className="!w-16 !h-16 text-dark-100" />
              <h3 className="text-md mt-3">{t("homepage.childPortfolio.first")}</h3>
            </div>
            <div className="bg-light-100 border border-light-200 flex flex-col justify-center items-center p-6 w-full xl:w-48">
              <Icon icon="shieldTick" className="!w-16 !h-16 text-dark-100" />
              <h3 className="text-md mt-3">{t("homepage.childPortfolio.second")}</h3>
            </div>
            <div className="bg-light-100 border border-light-200 flex flex-col justify-center items-center p-6 w-full xl:w-48">
              <Icon icon="bulbFilled" className="!w-16 !h-16 text-dark-100" />
              <h3 className="text-md mt-3">{t("homepage.childPortfolio.third")}</h3>
            </div>
          </div>
          <Link
            className={classNames(
              "xl:hidden justify-center",
              buttonVariants({ look: "tertiary", size: "big" })
            )}
            link={childPortfolioLink}
          >
            {t("homepage.childPortfolio.readMore")}
          </Link>
        </Card>

        <Card className={styles.teaser}>
          <Teaser />
        </Card>

        <div className={styles.advantages}>
          <PrismicRichText field={advantages_title} components={htmlSerializer} />

          <div className={styles.cardGroup}>
            <Card className={styles.card}>
              <Icon icon="lowCosts" className={styles.cardIcon} />

              <PrismicRichText field={card_1_title} components={htmlSerializer} />

              <dl className={styles.managementFee}>
                <dt>
                  <PrismicRichText field={card_1_row_1_title} components={htmlSerializer} />
                </dt>
                <dd>
                  <PrismicRichText field={card_1_row_1_value} components={htmlSerializer} />
                </dd>
              </dl>

              <dl className={styles.custodyFee}>
                <dt>
                  <PrismicRichText field={card_1_row_2_title} components={htmlSerializer} />
                </dt>
                <dd>
                  <PrismicRichText field={card_1_row_2_value} components={htmlSerializer} />
                </dd>
              </dl>

              <dl className={styles.deposits}>
                <dt>
                  <PrismicRichText field={card_1_row_3_title} components={htmlSerializer} />
                </dt>
                <dd>
                  <PrismicRichText field={card_1_row_3_value} components={htmlSerializer} />
                </dd>
              </dl>
            </Card>
            <Card className={styles.card}>
              <Icon icon="strategy" className={styles.cardIcon} />

              <PrismicRichText field={card_2_title} components={htmlSerializer} />
              <PrismicRichText field={card_2_text} components={htmlSerializer} />
            </Card>
            <Card className={styles.card}>
              <Icon icon="secure" className={styles.cardIcon} />

              <PrismicRichText field={card_3_title} components={htmlSerializer} />
              <PrismicRichText field={card_3_text} components={htmlSerializer} />
            </Card>
          </div>
        </div>
      </SectionContainer>
    </Section>
  );
};
