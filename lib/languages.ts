import { useContext } from "react";

import { PagePropsContext } from "src/shared/pageContext";

import { hrefResolver } from "lib/routes";

export enum LocaleISO {
  EN = "en",
  DE = "de",
  FR = "fr"
}

export enum LocaleIETF {
  EN = "en-gb",
  DE = "de-ch",
  FR = "fr-fr"
}

export interface Locale {
  iso: LocaleISO;
  ietf: LocaleIETF;
  name: string;
}

export const LOCALES: {
  [key: string]: Readonly<Locale>;
} = {
  en: {
    iso: LocaleISO.EN,
    ietf: LocaleIETF.EN,
    name: "English"
  },
  de: {
    iso: LocaleISO.DE,
    ietf: LocaleIETF.DE,
    name: "Deutsch"
  },
  fr: {
    iso: LocaleISO.FR,
    ietf: LocaleIETF.FR,
    name: "Français"
  }
};
export const DEFAULT_LOCALE = LOCALES[LocaleISO.EN];

export const isIETF = (test: string | undefined): test is LocaleIETF =>
  test === LocaleIETF.EN || test === LocaleIETF.DE || test === LocaleIETF.FR;

export const getLocaleFromString = (lang: string | undefined) => {
  if (!lang) {
    return DEFAULT_LOCALE;
  }

  return isIETF(lang) ? getLocaleByIETF(lang) : LOCALES[lang];
};

const getLocaleByIETF = (ietf: string) => {
  let locale = DEFAULT_LOCALE;

  for (const [, value] of Object.entries(LOCALES)) {
    if (value.ietf === ietf) {
      locale = value;
    }
  }

  return locale;
};

export const useAlternateLinks = () => {
  const { doc, languageAlternates } = useContext(PagePropsContext);

  return Object.values(LOCALES).map((locale) => {
    const isActive = doc?.lang === locale.ietf;
    const alternateDoc = languageAlternates?.find((d) => d.lang === locale.ietf);
    const url = alternateDoc
      ? alternateDoc.url
      : // TODO
        hrefResolver({ type: "no_translation", lang: locale.ietf } as any);

    return {
      url,
      locale,
      isActive
    };
  });
};
