import { KeyTextField, LinkField, RichTextField } from "@prismicio/client";
import { PrismicRichText } from "@prismicio/react";
import { buttonVariants } from "@true-wealth/ui-core";
import React, { FC } from "react";

import { Card } from "src/core/card";
import { Icon, IconType } from "src/core/icon";
import { Link } from "src/core/link";
import { Section } from "src/core/section/section";
import { SectionContainer } from "src/core/section/sectionContainer";

import { htmlSerializer } from "lib/prismic/htmlSerializer";
import { AllDocumentTypes } from "lib/types.generated";

type Props = {
  intro: RichTextField;
  items: {
    label: KeyTextField;
    icon: IconType;
  }[];
  ctaIntro: RichTextField;
  ctaLabel: KeyTextField;
  ctaLink: LinkField<AllDocumentTypes["type"]>;
};

export const LeadingRoboAdvisor: FC<Props> = ({ intro, items, ctaIntro, ctaLabel, ctaLink }) => (
  <Section variant="light">
    <SectionContainer className="!max-w-[1333px]">
      <div className="text-center lg:mb-14">
        <PrismicRichText field={intro} components={htmlSerializer} />
      </div>

      <Card className="py-4 px-9 lg:py-14 lg:px-3">
        <ul className="grid lg:grid-cols-5 text-center divide-y lg:divide-y-0 lg:divide-x divide-light-200">
          {items.map((item) => (
            <li key={item.label} className="font-bold p-4 xl:py-0 xl:p-6 xl:text-lg xl:leading-6">
              <Icon icon={item.icon} className="block !w-12 !h-12 text-dark-100 mx-auto mb-4" />
              {item.label}
            </li>
          ))}
        </ul>
      </Card>
      <div className="text-center mt-14 lg:mt-20">
        <div className="text-xl mb-6">
          <PrismicRichText field={ctaIntro} components={htmlSerializer} />
        </div>
        <Link link={ctaLink} external={false} className={buttonVariants({ look: "primary" })}>
          {ctaLabel}
        </Link>
      </div>
    </SectionContainer>
  </Section>
);
