import { LinkType } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { useRouter } from "next/router";
import React, { FC } from "react";
import Carousel from "react-slick";

import { Card } from "src/core/card";
import { Icon } from "src/core/icon";
import { Link } from "src/core/link";
import { Section } from "src/core/section/section";
import { SectionBackgroundImage } from "src/core/section/sectionBackgroundImage";
import { SectionContainer } from "src/core/section/sectionContainer";
import styles from "src/pages/pillar3a/introSlice.module.scss";
import { Pillar3aContext } from "src/pages/pillar3a/types";
import { useTranslation } from "src/shared/translations";

import { defaultCarouselProps } from "lib/carousel";
import { htmlSerializer } from "lib/prismic/htmlSerializer";
import { Pillar3aDocumentDataBodyIntroSlice } from "lib/types.generated";

type Props = SliceComponentProps<Pillar3aDocumentDataBodyIntroSlice, Pillar3aContext>;

export const IntroSlice: FC<Props> = ({
  slice: {
    primary: { intro, advantages_title, save_taxes, holistic, no_fees }
  }
}) => {
  const { t } = useTranslation();
  const { replace } = useRouter();

  return (
    <Section variant="light" className={styles.introSlice}>
      <SectionBackgroundImage inverse top={30} right={-400} />
      <SectionContainer className={styles.intro}>
        <PrismicRichText field={intro} components={htmlSerializer} />
      </SectionContainer>
      <SectionContainer noVerticalPadding className={styles.advantages}>
        <PrismicRichText field={advantages_title} components={htmlSerializer} />

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
          <Card className={styles.card}>
            <div>
              <div>
                <Icon icon="saveTaxes" className={styles.icon} />
                <PrismicRichText field={save_taxes} components={htmlSerializer} />
              </div>
              <Link
                external={false}
                onClick={() => replace("#autoTopUp")}
                link={{
                  link_type: LinkType.Web,
                  url: "#autoTopUp"
                }}
              >
                {t("global.learnMore")}
              </Link>
            </div>
          </Card>
          <Card className={styles.card}>
            <div>
              <div>
                <Icon icon="holistic" className={styles.icon} />
                <PrismicRichText field={holistic} components={htmlSerializer} />
              </div>
              <Link
                external={false}
                onClick={() => replace("#holistic")}
                link={{
                  link_type: LinkType.Web,
                  url: "#holistic"
                }}
              >
                {t("global.learnMore")}
              </Link>
            </div>
          </Card>
          <Card className={styles.card}>
            <div>
              <div>
                <Icon icon="noFees" className={styles.icon} />
                <PrismicRichText field={no_fees} components={htmlSerializer} />
              </div>
              <Link
                external={false}
                onClick={() => replace("#freeOfCharge")}
                link={{
                  link_type: LinkType.Web,
                  url: "#freeOfCharge"
                }}
              >
                {t("global.learnMore")}
              </Link>
            </div>
          </Card>
        </Carousel>
      </SectionContainer>
    </Section>
  );
};
