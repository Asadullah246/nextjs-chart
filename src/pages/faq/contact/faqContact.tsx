import { LinkType } from "@prismicio/client";
import { buttonVariants } from "@true-wealth/ui-core";
import { useRouter } from "next/router";
import React, { FC } from "react";

import { Link } from "src/core/link";
import { SectionContainer } from "src/core/section/sectionContainer";
import styles from "src/pages/faq/contact/faqContact.module.scss";
import { useTranslation } from "src/shared/translations";

import { getLocaleFromString } from "lib/languages";
import { getContactRootName } from "lib/routes";

export const FAQContact: FC = () => {
  const { t } = useTranslation();
  const { locale: localeIso } = useRouter();
  const { iso } = getLocaleFromString(localeIso);
  return (
    <SectionContainer className={styles.wrapper}>
      <h2>{t("faq.contact.question")}</h2>
      <Link
        link={{
          link_type: LinkType.Document,
          type: "contact",
          lang: localeIso,
          uid: getContactRootName(iso)
        }}
        className={buttonVariants({ look: "secondary", size: "big" })}
      >
        {t("faq.contact.button")}
      </Link>
    </SectionContainer>
  );
};
