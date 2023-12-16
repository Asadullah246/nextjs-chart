import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import React, { FC } from "react";
import Carousel from "react-slick";

import { Card } from "src/core/card";
import { Icon } from "src/core/icon";
import { Section } from "src/core/section/section";
import { SectionBackgroundImage } from "src/core/section/sectionBackgroundImage";
import { SectionContainer } from "src/core/section/sectionContainer";
import styles from "src/pages/childPortfolio/introSlice.module.scss";
import { ChildPortfolioContext } from "src/pages/childPortfolio/types";

import { defaultCarouselProps } from "lib/carousel";
import { htmlSerializer } from "lib/prismic/htmlSerializer";
import { ChildPortfolioDocumentDataBodyIntroSlice } from "lib/types.generated";

type Props = SliceComponentProps<ChildPortfolioDocumentDataBodyIntroSlice, ChildPortfolioContext>;

export const IntroSlice: FC<Props> = ({
  slice: {
    primary: { intro, title, first, second, third }
  }
}) => (
  <Section variant="light" className={styles.introSlice}>
    <SectionBackgroundImage inverse top={30} right={-400} />
    <SectionContainer className={styles.intro}>
      <PrismicRichText field={intro} components={htmlSerializer} />
    </SectionContainer>
    <SectionContainer noVerticalPadding className={styles.advantages}>
      <PrismicRichText field={title} components={htmlSerializer} />

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
            <Icon icon="chartUp" className={styles.icon} />
            <PrismicRichText field={first} components={htmlSerializer} />
          </div>
        </Card>
        <Card className={styles.card}>
          <div>
            <Icon icon="shieldTick" className={styles.icon} />
            <PrismicRichText field={second} components={htmlSerializer} />
          </div>
        </Card>
        <Card className={styles.card}>
          <div>
            <Icon icon="bulbFilled" className={styles.icon} />
            <PrismicRichText field={third} components={htmlSerializer} />
          </div>
        </Card>
      </Carousel>
    </SectionContainer>
  </Section>
);
