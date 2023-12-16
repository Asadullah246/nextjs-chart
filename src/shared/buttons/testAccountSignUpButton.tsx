import { LinkType } from "@prismicio/client";
import { useRouter } from "next/router";
import React, { FC, PropsWithChildren } from "react";

import { Link } from "src/core/link";
import { useTranslation } from "src/shared/translations";

interface Props {
  className?: string;
}

export const TestAccountSignUpButton: FC<PropsWithChildren<Props>> = ({ className, children }) => {
  const { t } = useTranslation();
  const { locale: localeIso } = useRouter();

  return (
    <Link
      external={false}
      className={className}
      link={{
        url: `${process.env.NEXT_PUBLIC_APP_URL}/app/signup/virtual?lang=${localeIso}`,
        link_type: LinkType.Web
      }}
    >
      {children ? children : t("global.testAccountSignUp")}
    </Link>
  );
};
