import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Image from "next/image";
import React, { FC, useEffect, useState } from "react";
import Carousel from "react-slick";

import { Icon } from "src/core/icon";
import { Section } from "src/core/section/section";
import { SectionBackgroundImage } from "src/core/section/sectionBackgroundImage";
import { SectionContainer } from "src/core/section/sectionContainer";
import { NUMBER_OF_SLIDER_ITEMS } from "src/pages/home/config";
import styles from "src/pages/home/testimonialsSlice.module.scss";
import { HomepageContext } from "src/pages/home/types";
import { ReadyToInvestGroup } from "src/shared/readyToInvestGroup";

import { defaultCarouselProps } from "lib/carousel";
import { htmlSerializer } from "lib/prismic/htmlSerializer";
import {
  HomepageDocumentDataBodyTestimonialsSlice,
  HomepageDocumentDataBodyTestimonialsSliceItem
} from "lib/types.generated";

export type TestimonialsSliceProps = SliceComponentProps<
  HomepageDocumentDataBodyTestimonialsSlice,
  HomepageContext
>;

export const TestimonialsSlice: FC<TestimonialsSliceProps> = ({ slice: { items } }) => {
  const [sortedItems, setSortedItems] = useState<HomepageDocumentDataBodyTestimonialsSliceItem[]>();

  useEffect(() => {
    if (items) {
      const permanentItems = items
        .filter((item) => item.permanent)
        .slice(0, NUMBER_OF_SLIDER_ITEMS);
      const nonPermanentItems = items
        .filter((item) => !item.permanent)
        .sort(() => 0.5 - Math.random())
        .slice(0, NUMBER_OF_SLIDER_ITEMS - permanentItems.length);

      setSortedItems([...permanentItems, ...nonPermanentItems]);
    }
  }, [items]);

  return (
    <Section variant="light" afterExtendedImage>
      <SectionBackgroundImage right={0} inverse />
      <SectionContainer>
        <ReadyToInvestGroup className={styles.readyToInvestGroup} />
      </SectionContainer>
      <div className={styles.carouselContainer}>
        <Carousel
          className={styles.carousel}
          {...defaultCarouselProps}
          autoplay={false}
          adaptiveHeight={false}
        >
          {sortedItems?.map((slide, i) => <SliderItem slide={slide} key={i} />)}
        </Carousel>
      </div>
    </Section>
  );
};

const SliderItem: FC<{ slide: HomepageDocumentDataBodyTestimonialsSliceItem }> = ({
  slide: { quote, first_name, last_name, profession, image }
}) => {
  const author = "-" + first_name + " " + last_name + ", " + profession;

  return (
    <div className={styles.slideContainer}>
      <div className={styles.slide}>
        {image?.url && (
          <div className={styles.quoteImage}>
            <Image
              src={image.url}
              width={image.dimensions?.width}
              height={image.dimensions?.height}
              alt={image.alt ? image.alt : "True Wealth Client"}
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto"
              }}
            />
          </div>
        )}
        <div className={styles.quote}>
          <div className={styles.quoteMark}>
            <Icon icon="quote" />
          </div>
          <PrismicRichText field={quote} components={htmlSerializer} />
          <div className={styles.author}>{author}</div>
        </div>
      </div>
    </div>
  );
};
