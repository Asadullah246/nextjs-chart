/* eslint-disable jsx-a11y/alt-text */
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button
} from "@true-wealth/ui-core";
import classNames from "classnames";
import { useRouter } from "next/router";
import React, { FC, Fragment, useEffect, useState } from "react";

import { Anchor } from "src/core/anchor";
import { Section } from "src/core/section/section";
import { SectionContainer } from "src/core/section/sectionContainer";
import styles from "src/pages/pillar3a/automaticInvestments.module.scss";
import { Pillar3aContext } from "src/pages/pillar3a/types";

import { htmlSerializer } from "lib/prismic/htmlSerializer";
import {
  Pillar3aDocumentDataBodyAutomaticInvestmentsSlice,
  Pillar3aDocumentDataBodyAutomaticInvestmentsSlicePrimary
} from "lib/types.generated";

enum Option {
  AUTO_TOP_UP = "autoTopUp",
  HOLISTIC = "holistic",
  SAVE_TAXES = "saveTaxes"
}

export const AutomaticInvestmentsSlice: FC<
  SliceComponentProps<Pillar3aDocumentDataBodyAutomaticInvestmentsSlice, Pillar3aContext>
> = ({ slice: { primary } }) => {
  const {
    intro,
    auto_top_up_title,
    auto_top_up_description,
    auto_top_up_image,
    holistic_title,
    holistic_description,
    holistic_image,
    save_taxes_title,
    save_taxes_description,
    save_taxes_image
  } = primary;
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const { description, image } = getSelectedContent(selectedOption, primary);
  const { asPath } = useRouter();
  const acordionItems = [
    {
      option: Option.AUTO_TOP_UP,
      title: auto_top_up_title,
      description: auto_top_up_description,
      image: auto_top_up_image
    },
    {
      option: Option.HOLISTIC,
      title: holistic_title,
      description: holistic_description,
      image: holistic_image
    },
    {
      option: Option.SAVE_TAXES,
      title: save_taxes_title,
      description: save_taxes_description,
      image: save_taxes_image
    }
  ];

  useEffect(() => {
    const hash = asPath.split("#")[1];
    if (hash === "autoTopUp") {
      setSelectedOption(Option.AUTO_TOP_UP);
    } else if (hash === "holistic") {
      setSelectedOption(Option.HOLISTIC);
    }
  }, [asPath]);

  return (
    <Section variant="light">
      <Anchor id="autoTopUp" />
      <Anchor id="holistic" />

      <SectionContainer className={styles.container}>
        <div className={styles.intro}>
          <PrismicRichText field={intro} components={htmlSerializer} />
        </div>
        <div className={styles.mobileView}>
          <Accordion
            collapsible
            type="single"
            value={selectedOption?.toString()}
            onValueChange={(value) => setSelectedOption(value as Option)}
          >
            {acordionItems.map((item) => (
              <Fragment key={item.title}>
                <AccordionItem value={item.option}>
                  <AccordionTrigger className="text-lg font-bold">{item.title}</AccordionTrigger>
                  <AccordionContent className="-mx-8 px-8 pb-3 text-lg leading-7 text-dark-100">
                    <PrismicRichText field={item.description} components={htmlSerializer} />
                    <Image image={item.image} />
                  </AccordionContent>
                </AccordionItem>
              </Fragment>
            ))}
          </Accordion>
        </div>
        <div className={styles.desktopView}>
          <div className={styles.sidebar}>
            <nav className={styles.nav}>
              <Button
                size="big"
                look="ghost"
                onClick={() => setSelectedOption(Option.AUTO_TOP_UP)}
                className={classNames("py-3 px-6 w-full font-bold !text-dark-100", {
                  "bg-light-200": selectedOption === Option.AUTO_TOP_UP || !selectedOption
                })}
              >
                {auto_top_up_title}
              </Button>
              <Button
                size="big"
                look="ghost"
                onClick={() => setSelectedOption(Option.HOLISTIC)}
                className={classNames("py-3 px-6 w-full font-bold !text-dark-100", {
                  "bg-light-200": selectedOption === Option.HOLISTIC
                })}
              >
                {holistic_title}
              </Button>
              <Button
                size="big"
                look="ghost"
                onClick={() => setSelectedOption(Option.SAVE_TAXES)}
                className={classNames("py-3 px-6 w-full font-bold !text-dark-100", {
                  "bg-light-200": selectedOption === Option.SAVE_TAXES
                })}
              >
                {save_taxes_title}
              </Button>
            </nav>

            <div className={styles.description}>
              <PrismicRichText field={description} components={htmlSerializer} />
            </div>
          </div>
          <Image image={image} />
        </div>
      </SectionContainer>
    </Section>
  );
};

const getSelectedContent = (
  selectedOption: Option | null,
  slice: Pillar3aDocumentDataBodyAutomaticInvestmentsSlicePrimary
) => {
  switch (selectedOption) {
    case Option.HOLISTIC:
      return {
        title: slice.holistic_title,
        description: slice.holistic_description,
        image: slice.holistic_image
      };
    case Option.SAVE_TAXES:
      return {
        title: slice.save_taxes_title,
        description: slice.save_taxes_description,
        image: slice.save_taxes_image
      };
    default:
      return {
        title: slice.auto_top_up_title,
        description: slice.auto_top_up_description,
        image: slice.auto_top_up_image
      };
  }
};

const Image: FC<{
  image: Pillar3aDocumentDataBodyAutomaticInvestmentsSlicePrimary["holistic_image"];
}> = ({ image }) => (
  <div className={styles.imageContainer}>
    {image?.url && (
      <picture className={styles.image}>
        {image.mobile.url && (
          <source
            srcSet={image.mobile.url}
            media="(max-width: 1199px)"
            width={image.mobile.dimensions.width / 2}
            height={image.mobile.dimensions.height / 2}
          />
        )}
        <source srcSet={image.url} />
        <img
          src={image.url}
          loading="lazy"
          alt={image.alt ?? ""}
          width={image.dimensions?.width / 2}
          height={image.dimensions?.height / 2}
        />
      </picture>
    )}
  </div>
);
