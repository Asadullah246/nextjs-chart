import React, { FC } from "react";

import { Section } from "src/core/section/section";
import { SectionContainer } from "src/core/section/sectionContainer";
import { ReadyToInvestGroup } from "src/shared/readyToInvestGroup";

export const MinimalReadyToInvestSlice: FC = () => (
  <Section variant="light">
    <SectionContainer>
      <ReadyToInvestGroup />
    </SectionContainer>
  </Section>
);
