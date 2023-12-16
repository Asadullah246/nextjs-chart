import { LinkType } from "@prismicio/client";
import { Button } from "@true-wealth/ui-core";
import { useRouter } from "next/router";
import React, { FC, useEffect, useState } from "react";

import { Link } from "src/core/link";
import { useTranslation } from "src/shared/translations";

import { getCookie, setCookie } from "lib/cookies";
import { LocaleISO } from "lib/languages";

const COOKIE_SETTINGS = {
  name: "tw_cookie_consent",
  value: "dismiss",
  expiryDays: 3650
};

export const CookieConsent: FC = () => {
  const [showMessage, setShowMessage] = useState(false);
  const { locale: localeIso } = useRouter();
  const { t } = useTranslation();

  useEffect(() => {
    const consentCookie = getCookie(COOKIE_SETTINGS.name);

    if (!consentCookie) {
      setShowMessage(true);
    }
  }, []);

  const setConsentCookie = () => {
    setCookie({
      name: COOKIE_SETTINGS.name,
      value: COOKIE_SETTINGS.value,
      expiryDays: COOKIE_SETTINGS.expiryDays
    });
    setShowMessage(false);
  };

  if (!showMessage) {
    return null;
  }

  return (
    <div className="fixed flex flex-col justify-center md:items-center md:flex-row gap-3 md:gap-6 left-0 right-0 bottom-0 bg-light-200 z-[999] p-6">
      <div>
        {t("cookie.consent.message")}{" "}
        <Link
          aria-label="Data protection declaration"
          link={{
            link_type: LinkType.Document,
            type: "pages",
            uid:
              localeIso === LocaleISO.DE
                ? "datenschutzerklaerung"
                : localeIso === LocaleISO.FR
                  ? "declaration-de-protection-des-donnees"
                  : "data-protection-declaration",
            lang: localeIso
          }}
        >
          {t("cookie.consent.linkText")}
        </Link>
      </div>

      <Button onClick={setConsentCookie} className="justify-center">
        {t("cookie.consent.dismiss")}
      </Button>
    </div>
  );
};
