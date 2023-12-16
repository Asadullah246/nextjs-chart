import { Button } from "@true-wealth/ui-core";
import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

import { Section } from "src/core/section/section";
import { SectionContainer } from "src/core/section/sectionContainer";
import { useTranslation } from "src/shared/translations";

const NoTranslationPage: NextPage = () => {
  const { t } = useTranslation();
  const { back } = useRouter();
  const [showBackLink, setShowBackLink] = useState(false);

  useEffect(() => {
    if (window.PAGE_NAVIGATED) {
      setShowBackLink(true);
    }
  }, []);

  return (
    <Section>
      <SectionContainer>
        <h1>{t("noTranslation.title")}</h1>
        <p>{t("noTranslation.content")}</p>
        {showBackLink && <Button onClick={() => back()}>{t("noTranslation.backLink")}</Button>}
      </SectionContainer>
    </Section>
  );
};

export default NoTranslationPage;
