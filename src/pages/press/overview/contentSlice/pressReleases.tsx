import { asText, LinkType } from "@prismicio/client";
import React, { FC } from "react";

import { Card } from "src/core/card";
import { Icon } from "src/core/icon";
import { Link } from "src/core/link";
import styles from "src/pages/press/overview/contentSlice/pressReleases.module.scss";
import { useTranslation } from "src/shared/translations";

import { PressReleaseDocument } from "lib/types.generated";
import { sortByDate, swissFormattedDate } from "lib/utils";

interface Props {
  docs: PressReleaseDocument[];
}

export const PressReleases: FC<Props> = ({ docs }) => {
  const { t } = useTranslation();

  return (
    <Card className={styles.pressReleases}>
      <h2>{t("press.title")}</h2>
      {docs
        .sort((a, b) => sortByDate(a.data.date, b.data.date))
        .map((item) => (
          <div key={item.id} className={styles.pressRelease}>
            <div className={styles.top}>
              {item.data.date && (
                <strong>
                  <time>{swissFormattedDate(item.data.date, { year: "2-digit" })}</time>
                </strong>
              )}

              {item?.data.link?.link_type === LinkType.Media && (
                <Link link={item.data.link}>
                  <Icon icon="pdf" />
                </Link>
              )}
            </div>

            {!!item.data.content?.length ? (
              <Link
                className={styles.detailLink}
                link={{
                  ...item,
                  link_type: LinkType.Document,
                  type: "press_release"
                }}
              >
                {item.data.title && asText(item.data.title)}
              </Link>
            ) : (
              item.data.title && (
                <span className={styles.detailLink}>{asText(item.data.title)}</span>
              )
            )}
          </div>
        ))}
    </Card>
  );
};
