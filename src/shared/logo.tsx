import { LinkType } from "@prismicio/client";
import { useRouter } from "next/router";
import TWLogo from "public/logo.svg";
import React, { FC } from "react";

import { Link } from "src/core/link";
import styles from "src/shared/logo.module.scss";

export const Logo: FC = () => {
  const { locale: localeIso } = useRouter();

  return (
    <Link
      locale={localeIso}
      link={{
        type: "homepage",
        lang: localeIso,
        link_type: LinkType.Document
      }}
      className={styles.logo}
      aria-label="Logo"
    >
      <TWLogo />
    </Link>
  );
};
