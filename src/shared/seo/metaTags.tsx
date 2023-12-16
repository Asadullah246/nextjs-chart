import { ImageField } from "@prismicio/client";
import { NextSeo, NextSeoProps } from "next-seo";
import { FC } from "react";

import { getLocaleFromString } from "lib/languages";
import { getOgImageUrl } from "lib/ogImage";
import { BASE_URL, hrefResolver } from "lib/routes";
import { AllDocumentTypes } from "lib/types.generated";

interface MetaTagsProps {
  title?: string;
  description?: string;
  socialMediaImage?: ImageField;
  doc: AllDocumentTypes;
  languageAlternates?: NextSeoProps["languageAlternates"];
}

export const MetaTags: FC<MetaTagsProps> = ({
  title,
  description,
  socialMediaImage,
  doc,
  languageAlternates
}) => {
  const { iso } = getLocaleFromString(doc.lang);
  const canonicalUrl = languageAlternates?.find((l) => l.hrefLang === iso)?.href;

  return (
    <NextSeo
      title={title}
      description={description}
      languageAlternates={languageAlternates}
      canonical={canonicalUrl}
      openGraph={{
        url: `${BASE_URL}${hrefResolver(doc)}`,
        title,
        description,
        images: [
          { url: socialMediaImage?.url ?? getOgImageUrl({ title, pathname: hrefResolver(doc) }) }
        ],
        site_name: "True Wealth"
      }}
      twitter={{
        handle: "@True_Wealth_",
        site: "@True_Wealth_",
        cardType: "summary_large_image"
      }}
    />
  );
};
