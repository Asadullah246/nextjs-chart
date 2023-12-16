import React from "react";

import { Section } from "src/core/section/section";
import { SectionContainer } from "src/core/section/sectionContainer";
import { SectionHeading } from "src/core/section/sectionHeading";

const defaultSectionContainerProps = {
  id: "",
  edit: {
    x: 0,
    y: 0,
    zoom: 1,
    background: ""
  },
  alt: "",
  dimensions: { width: 500, height: 500 },
  copyright: null
};
const defaultText =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo repellat eius libero blanditiis iste velit inventore accusantium vel, eveniet amet asperiores, minus doloribus, voluptatum enim commodi perspiciatis rerum doloremque sequi?";

const StyleGuide = () => (
  <>
    <Section variant="light">
      <SectionContainer>
        <h1>Styleguide</h1>
      </SectionContainer>
    </Section>
    <Section variant="light">
      <SectionContainer
        image={{
          ...defaultSectionContainerProps,
          url: "https://images.prismic.io/truewealth/1a2ff030-75a6-4a7b-b636-225dc2312e66_thomas-richter-B09tL5bSQJk-unsplash+2.png?auto=compress,format&w=900"
        }}
        imagePosition="left"
        extendedImage
      >
        <SectionHeading title="Some header" />
        <h2>Extended Image Left</h2>
        <p>{defaultText}</p>
        <p>{defaultText}</p>
      </SectionContainer>
    </Section>
    <Section afterExtendedImage>
      <SectionContainer>
        <SectionHeading title="Some header" />
        <h2>Simple Section With Text</h2>
        <p>{defaultText}</p>
      </SectionContainer>
    </Section>
    <Section variant="light">
      <SectionContainer
        image={{
          ...defaultSectionContainerProps,
          url: "https://images.prismic.io/truewealth/1a2ff030-75a6-4a7b-b636-225dc2312e66_thomas-richter-B09tL5bSQJk-unsplash+2.png?auto=compress,format&w=900"
        }}
        imagePosition="left"
      >
        <SectionHeading title="Some header" />
        <h2>Image Left</h2>
        <p>{defaultText}</p>
        <p>{defaultText}</p>
      </SectionContainer>
    </Section>
    <Section beforeExtendedImage>
      <SectionContainer>
        <SectionHeading title="Some header" />
        <h2>Simple Section With Text</h2>
        <p>{defaultText}</p>
      </SectionContainer>
    </Section>
    <Section variant="light">
      <SectionContainer
        image={{
          ...defaultSectionContainerProps,
          url: "https://images.prismic.io/truewealth/1a2ff030-75a6-4a7b-b636-225dc2312e66_thomas-richter-B09tL5bSQJk-unsplash+2.png?auto=compress,format&w=900"
        }}
        imagePosition="right"
        extendedImage
      >
        <SectionHeading title="Some header" />
        <h2>Extended Image Right</h2>
        <p>{defaultText}</p>
        <p>{defaultText}</p>
      </SectionContainer>
    </Section>
    <Section afterExtendedImage>
      <SectionContainer>
        <SectionHeading title="Some header" />
        <h2>Simple Section With Text</h2>
        <p>{defaultText}</p>
      </SectionContainer>
    </Section>
    <Section variant="light">
      <SectionContainer
        image={{
          ...defaultSectionContainerProps,
          url: "https://images.prismic.io/truewealth/1a2ff030-75a6-4a7b-b636-225dc2312e66_thomas-richter-B09tL5bSQJk-unsplash+2.png?auto=compress,format&w=900"
        }}
        imagePosition="right"
      >
        <SectionHeading title="Some header" />
        <h2>Image Right</h2>
        <p>{defaultText}</p>
        <p>{defaultText}</p>
      </SectionContainer>
    </Section>
    <Section variant="pearl">
      <SectionContainer>
        <SectionHeading title="Some header" />
        <h2>Simple Section With Text</h2>
        <p>{defaultText}</p>
        <p>{defaultText}</p>
      </SectionContainer>
    </Section>
    <Section variant="light">
      <SectionContainer
        image={{
          ...defaultSectionContainerProps,
          url: "https://images.prismic.io/truewealth/db27cbd5-eb8d-43ed-8aa5-555fc30070e2_post-image-preview-24%402x.png?auto=compress,format&rect=0,0,800,528&w=800&h=528"
        }}
        imagePosition="right"
        imageText="Image with some description on top"
      >
        <SectionHeading title="Some header" />
        <h2>Image Right With Text</h2>
        <p>{defaultText}</p>
        <p>{defaultText}</p>
      </SectionContainer>
    </Section>
    <Section>
      <SectionContainer>
        <SectionHeading title="Some header" />
        <h2>Simple Section With Text</h2>
        <p>{defaultText}</p>
        <p>{defaultText}</p>
      </SectionContainer>
    </Section>
  </>
);

export default StyleGuide;
