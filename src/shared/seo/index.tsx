import { NextSeo } from "next-seo";
import { FC, useContext } from "react";

import { PagePropsContext } from "src/shared/pageContext";
import { MetaTags } from "src/shared/seo/metaTags";
import { GeneralStructuredData } from "src/shared/seo/structuredData";

import { DEFAULT_LOCALE, getLocaleFromString } from "lib/languages";
import { BASE_URL } from "lib/routes";

export const SEO: FC = () => {
  const { doc, languageAlternates } = useContext(PagePropsContext);

  if (!doc) {
    return <NextSeo noindex />;
  }

  const {
    // @ts-ignore
    data: { seo_title, seo_description, social_media_image }
  } = doc;

  return (
    <>
      <MetaTags
        title={seo_title ?? undefined}
        description={seo_description ?? undefined}
        socialMediaImage={social_media_image}
        doc={doc}
        languageAlternates={languageAlternates
          .map((alternate) => ({
            hrefLang: getLocaleFromString(alternate.lang).iso.toString(),
            href: `${BASE_URL}${alternate.url}`
          }))
          .concat([
            {
              // fallback page definition
              hrefLang: "x-default",
              href: `${BASE_URL}${languageAlternates.find((l) => l.lang === DEFAULT_LOCALE.ietf)
                ?.url}`
            }
          ])}
      />
      <GeneralStructuredData />
    </>
  );
};
