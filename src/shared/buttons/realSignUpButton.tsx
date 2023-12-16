import { LinkType } from "@prismicio/client";
import { useRouter } from "next/router";
import React, { FC, PropsWithChildren } from "react";

import { Link, LinkProps } from "src/core/link";
import { useTranslation } from "src/shared/translations";

interface Props {
  className?: string;
  icon?: LinkProps["icon"];
}

export const RealSignUpButton: FC<PropsWithChildren<Props>> = ({ className, children, icon }) => {
  const { t } = useTranslation();
  const { locale: localeIso } = useRouter();

  return (
    <Link
      link={{
        url: `${process.env.NEXT_PUBLIC_APP_URL}/app/signup/real?lang=${localeIso}`,
        link_type: LinkType.Web
      }}
      external={false}
      className={className}
      icon={icon}
    >
      {children ? children : t("global.signupReal")}
    </Link>
  );
};
