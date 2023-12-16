/* eslint-disable @next/next/no-img-element */
import { PrismicRichText } from "@prismicio/react";
import { FC } from "react";

import styles from "src/pages/blog/detailView/author.module.scss";
import { useTranslation } from "src/shared/translations";

import { htmlSerializer } from "lib/prismic/htmlSerializer";
import { AuthorsDocument } from "lib/types.generated";

interface Props {
  doc: AuthorsDocument;
}

export const Author: FC<Props> = ({
  doc: {
    data: { picture, name, description }
  }
}) => {
  const { t } = useTranslation();

  return (
    <div className={styles.author}>
      <h3>{t("blog.aboutAuthor")}</h3>
      <figure>
        {picture?.url && (
          <img
            src={picture.url}
            loading="lazy"
            alt={picture.alt ?? "author"}
            width={110}
            height={110}
          />
        )}
        <figcaption>
          <strong>{name}</strong>
          <PrismicRichText field={description} components={htmlSerializer} />
        </figcaption>
      </figure>
    </div>
  );
};
