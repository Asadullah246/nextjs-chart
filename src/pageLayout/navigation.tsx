import { LinkTarget, MainMenu, MainMenuContent, NavigationLoggedOut } from "@true-wealth/ui-core";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { FC } from "react";

import { useAlternateLinks } from "lib/languages";

export const Navigation: FC = () => {
  const { locale: localeIso, asPath, locale } = useRouter();
  const alternateLinks = useAlternateLinks();

  if (!localeIso) {
    return null;
  }

  return (
    <MainMenu>
      <MainMenuContent>
        <NavigationLoggedOut
          pathname={`/${locale}${asPath}`}
          language={localeIso}
          onLanguageChange={(val) => {
            const newLocale = alternateLinks.find((l) => l.locale.iso === val);
            if (newLocale) {
              window.location.href = newLocale.url;
            }
          }}
          renderLink={({ href, linkTarget, ...rest }) =>
            linkTarget === LinkTarget.MARCOMM ? (
              <Link href={href.includes("http") ? new URL(href).pathname : href} {...rest} />
            ) : (
              <a href={href} {...rest} />
            )
          }
        />
      </MainMenuContent>
    </MainMenu>
  );
};
