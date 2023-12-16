import { isFilled } from "@prismicio/client";
import { PrismicRichText } from "@prismicio/react";
import React, { FC } from "react";

import { Card } from "src/core/card";
import { Icon } from "src/core/icon";
import { Link } from "src/core/link";
import styles from "src/pages/press/overview/contentSlice/mediaPosts.module.scss";
import { useTranslation } from "src/shared/translations";

import { htmlSerializer } from "lib/prismic/htmlSerializer";
import { PressDocumentDataBodyMediaSliceItem } from "lib/types.generated";
import { sortByDate, swissFormattedDate } from "lib/utils";

interface Props {
  posts: PressDocumentDataBodyMediaSliceItem[];
}

export const MediaPosts: FC<Props> = ({ posts }) => {
  const { t } = useTranslation();

  return (
    <Card className={styles.mediaPosts}>
      <h2>{t("press.media")}</h2>
      {posts
        .sort((a, b) => sortByDate(a.date, b.date))
        .map(
          ({
            title,
            content,
            publisher,
            date,
            external_link,
            asset_1,
            asset_1_name,
            asset_2,
            asset_2_name
          }) => (
            <div key={`${title}${date}${publisher}`} className={styles.mediaPost}>
              <div className={styles.top}>
                {`${publisher}, `}
                {date && <time>{swissFormattedDate(date, { year: "2-digit" })}</time>}
              </div>

              <h4>{title}</h4>
              <PrismicRichText field={content} components={htmlSerializer} />

              <div className={styles.resources}>
                {isFilled.link(external_link) && external_link?.url && (
                  <Link link={external_link} icon={<Icon icon="external" />} iconPosition="left">
                    Link
                  </Link>
                )}
                {isFilled.link(asset_1) && asset_1?.url && (
                  <Link link={asset_1} icon={getAssetIcon(asset_1.url)} iconPosition="left">
                    {asset_1_name}
                  </Link>
                )}
                {isFilled.link(asset_2) && asset_2?.url && (
                  <Link link={asset_2} icon={getAssetIcon(asset_2.url)} iconPosition="left">
                    {asset_2_name}
                  </Link>
                )}
              </div>
            </div>
          )
        )}
    </Card>
  );
};

const getAssetIcon = (url: string) =>
  url.includes(".mp3") ? <Icon icon="mp3" /> : <Icon icon="pdf" />;
