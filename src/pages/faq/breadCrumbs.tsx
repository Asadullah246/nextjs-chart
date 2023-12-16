import { isFilled, LinkField } from "@prismicio/client";
import { BreadcrumbJsonLd } from "next-seo";
import { FC, Fragment } from "react";

import { Icon } from "src/core/icon";
import { Link } from "src/core/link";
import styles from "src/pages/faq/breadCrumbs.module.scss";

import { BASE_URL, hrefResolver } from "lib/routes";
import { AllDocumentTypes } from "lib/types.generated";

interface Props {
  items: {
    label: string;
    link: LinkField<AllDocumentTypes["type"]>;
  }[];
}

export const BreadCrumbs: FC<Props> = ({ items }) => {
  const backLink = items[items.length - 2];

  return (
    <div className={styles.container}>
      <BreadcrumbJsonLd
        itemListElements={items.map(({ label, link }, i) => ({
          position: i + 1,
          name: label,
          item: isFilled.contentRelationship(link) ? `${BASE_URL}${hrefResolver(link)}` : ""
        }))}
      />

      <div className={styles.mobile}>
        {backLink?.link && (
          <Link
            key={backLink.label}
            link={backLink.link}
            icon={<Icon icon="arrowLeft" />}
            iconPosition="left"
          >
            {backLink.label}
          </Link>
        )}
      </div>
      <div className={styles.desktop}>
        {items.map(({ link, label }, i) => {
          return (
            <Fragment key={label}>
              {i === items.length - 1 ? (
                <span className={styles.currentItem}>{label}</span>
              ) : (
                <>
                  <Link link={link}>{label}</Link>
                  <Icon icon="chevronRight" />
                </>
              )}
            </Fragment>
          );
        })}
      </div>
    </div>
  );
};
