/* eslint-disable @next/next/no-img-element */
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import React, { FC } from "react";
import Carousel from "react-slick";

import { Section } from "src/core/section/section";
import { SectionContainer } from "src/core/section/sectionContainer";

import { defaultCarouselProps } from "lib/carousel";
import { htmlSerializer } from "lib/prismic/htmlSerializer";
import { CultureDocumentDataBodyCarouselSlice } from "lib/types.generated";

type Props = SliceComponentProps<CultureDocumentDataBodyCarouselSlice>;

export const TeamPictures: FC<Props> = ({
  slice: {
    primary: { title, content },
    items
  }
}) => {
  return (
    <Section>
      <SectionContainer noMaxWidth>
        <div className="mx-auto flex flex-col items-center max-w-7xl gap-12">
          <div className="flex flex-col items-center">
            <div>
              <PrismicRichText field={title} components={htmlSerializer} />
            </div>
            <div className="text-xl leading-7 text-dark-100 text-center max-w-4xl">
              <PrismicRichText field={content} components={htmlSerializer} />
            </div>
          </div>
          <Carousel
            {...defaultCarouselProps}
            autoplay={true}
            infinite={true}
            slidesToShow={3}
            slidesToScroll={1}
            className="max-w-full"
            responsive={[
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 2
                }
              },
              {
                breakpoint: 640,
                settings: {
                  slidesToShow: 1
                }
              }
            ]}
          >
            {items.map(
              ({ image }, i) =>
                !!image.url && (
                  <img
                    key={i}
                    src={image.url}
                    alt={image.alt ?? undefined}
                    className="px-4 pb-12 object-contain"
                  />
                )
            )}
          </Carousel>
        </div>
      </SectionContainer>
    </Section>
  );
};

// {!!image.url && (
//     <img src={image.url} alt={image.alt ?? undefined} className="max-w-full" />
//   )}
