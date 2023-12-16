import { NextPage } from "next";
import React from "react";

import { Section } from "src/core/section/section";
import { SectionContainer } from "src/core/section/sectionContainer";
import { useTranslation } from "src/shared/translations";

const Custom404Page: NextPage = () => {
  const { t } = useTranslation();

  return (
    <Section>
      <SectionContainer>
        <h1>{t("error.404.title")}</h1>
        <p>{t("error.404.description")}</p>
      </SectionContainer>
    </Section>
  );
};

export default Custom404Page;
