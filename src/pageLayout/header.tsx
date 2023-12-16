import { LinkType } from "@prismicio/client";
import { useRouter } from "next/router";
import React, { FC, useContext } from "react";

import { Icon } from "src/core/icon";
import { Link } from "src/core/link";
import { Section } from "src/core/section/section";
import { SectionContainer } from "src/core/section/sectionContainer";
import styles from "src/pageLayout/header.module.scss";
import { PagePropsContext } from "src/shared/pageContext";
import { useTranslation } from "src/shared/translations";

import { LocaleISO } from "lib/languages";
import { getBlogRootName, getPressRootName } from "lib/routes";

export const Header: FC = () => (
  <Section variant="transparent" className={styles.header}>
    <SectionContainer noVerticalPadding>
      <BackLink />
    </SectionContainer>
  </Section>
);

const BackLink: FC = () => {
  const { t } = useTranslation();
  const { locale: localeIso } = useRouter();
  const { doc } = useContext(PagePropsContext);

  switch (doc?.type) {
    case "blog_post":
      return (
        <Link
          className={styles.backLink}
          icon={<Icon icon="arrowLeft" />}
          iconPosition="left"
          link={{
            link_type: LinkType.Document,
            type: "blog",
            lang: localeIso,
            uid: getBlogRootName()
          }}
        >
          {t("navigation.backToOverview")}
        </Link>
      );
    case "press_release":
      return (
        <Link
          className={styles.backLink}
          icon={<Icon icon="arrowLeft" />}
          iconPosition="left"
          link={{
            link_type: LinkType.Document,
            type: "press",
            lang: localeIso,
            uid: getPressRootName(localeIso as LocaleISO)
          }}
        >
          {t("navigation.backToOverview")}
        </Link>
      );
    default:
      return null;
  }
};
