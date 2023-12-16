/* eslint-disable @next/next/no-img-element */
import { asText } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import React, { FC, useEffect, useRef, useState } from "react";
import Carousel from "react-slick";

import { Section } from "src/core/section/section";
import { SectionContainer } from "src/core/section/sectionContainer";
import styles from "src/pages/home/pressSlice.module.scss";
import { HomepageContext } from "src/pages/home/types";

import { defaultCarouselProps } from "lib/carousel";
import { htmlSerializer } from "lib/prismic/htmlSerializer";
import { HomepageDocumentDataBodyPressSlice } from "lib/types.generated";

export type PressSliceProps = SliceComponentProps<
  HomepageDocumentDataBodyPressSlice,
  HomepageContext
>;

export const PressSlice: FC<PressSliceProps> = ({
  slice: {
    items,
    primary: { heading }
  }
}) => {
  const initialSlide = Math.floor(items.length / 2);
  const quotesRef = useRef<Carousel>(null);
  const logosRef = useRef<Carousel>(null);
  const [quotes, setQuotes] = useState<Carousel | null>(null);
  const [logosSlider, setLogosSlider] = useState<Carousel | null>(null);
  const sharedConfig = {
    ...defaultCarouselProps,
    initialSlide,
    infinite: false,
    autoplay: false,
    swipeToSlide: true
  };

  useEffect(() => {
    logosRef.current?.slickGoTo(initialSlide);
    setQuotes(quotesRef.current);
    setLogosSlider(logosRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Section className={styles.press} variant="light">
      <SectionContainer noVerticalPadding>
        <PrismicRichText field={heading} components={htmlSerializer} />
      </SectionContainer>

      <Carousel
        {...sharedConfig}
        className={styles.quotes}
        ref={quotesRef}
        asNavFor={logosSlider ?? undefined}
        dots={false}
        swipe={false}
      >
        {items.map((item, i) => (
          <div key={i} className={styles.quote}>
            {item.quote && <blockquote>{asText(item.quote)}</blockquote>}
          </div>
        ))}
      </Carousel>

      <Carousel
        {...sharedConfig}
        className={styles.logos}
        ref={logosRef}
        asNavFor={quotes ?? undefined}
        pauseOnHover
        pauseOnFocus
        pauseOnDotsHover
        centerMode
        variableWidth
      >
        {items.map(({ image }, i) => (
          <div key={i} onClick={() => logosRef.current?.slickGoTo(i)}>
            <div className={styles.logo}>
              {image?.url && (
                <img
                  src={image.url}
                  loading="lazy"
                  width={image.dimensions?.width}
                  height={image.dimensions?.height}
                  alt={image.alt ?? "Company logo"}
                />
              )}
            </div>
          </div>
        ))}
      </Carousel>
    </Section>
  );
};
