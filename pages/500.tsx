import { LinkType } from "@prismicio/client";
import { buttonVariants } from "@true-wealth/ui-core";
import { useRouter } from "next/router";

import { Link } from "src/core/link";
import { Section } from "src/core/section/section";
import { SectionContainer } from "src/core/section/sectionContainer";
import { useTranslation } from "src/shared/translations";

export const ErrorPage500 = () => {
  const { t } = useTranslation();
  const { locale: localeIso } = useRouter();

  return (
    <Section>
      <SectionContainer>
        <h1>{t("error.500.title")}</h1>
        <p>{t("error.500.description")}</p>
        <Link
          className={buttonVariants({ look: "primary" })}
          locale={localeIso}
          link={{
            type: "homepage",
            link_type: LinkType.Document
          }}
        >
          {t("error.500.backToHomepage")}
        </Link>
      </SectionContainer>
    </Section>
  );
};

export default ErrorPage500;
