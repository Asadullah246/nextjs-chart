import { asDate, DateField } from "@prismicio/client";
import { useRouter } from "next/router";
import { ArticleJsonLd } from "next-seo";
import React, { FC } from "react";

import { getLocaleFromString } from "lib/languages";
import { BASE_URL } from "lib/routes";
import { BlogPostDocument } from "lib/types.generated";

interface Props {
  doc: BlogPostDocument;
  authorName?: string;
}

export const Seo: FC<Props> = ({ doc, authorName }) => {
  const { asPath } = useRouter();
  const { cover_image, publishing_date, seo_description, social_media_image, seo_title } = doc.data;
  const { iso } = getLocaleFromString(doc.lang);
  const shareUrl = `${BASE_URL}/${iso}${asPath}`;
  const datePublished = publishing_date ? asDate(publishing_date)?.toString() ?? "" : "";
  const dateModified = doc.last_publication_date
    ? asDate(doc.last_publication_date as DateField)?.toString() ?? ""
    : "";

  return (
    <ArticleJsonLd
      url={shareUrl}
      title={seo_title ?? ""}
      images={[social_media_image?.url ?? "", cover_image?.url ?? ""]}
      datePublished={datePublished}
      dateModified={dateModified}
      authorName={authorName ?? ""}
      publisherName={authorName ?? ""}
      publisherLogo="https://www.truewealth.ch/logoSmall.png"
      description={seo_description ?? ""}
    />
  );
};
