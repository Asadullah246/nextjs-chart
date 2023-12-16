import { LinkType } from "@prismicio/client";
import { Button } from "@true-wealth/ui-core";
import { useRouter } from "next/router";
import React, { FC, useEffect, useState } from "react";

import { Icon } from "src/core/icon";
import { Link } from "src/core/link";
import styles from "src/pages/blog/detailView/share.module.scss";

import { BASE_URL } from "lib/routes";

interface Props {
  seoTitle?: string;
  seoDescription?: string;
}

export const Share: FC<Props> = ({ seoTitle, seoDescription }) => {
  const [shareAPISupported, setShareAPISupported] = useState(false);
  const { asPath, locale: localeIso } = useRouter();
  const shareUrl = `${BASE_URL}/${localeIso}${asPath}`;

  useEffect(() => {
    if ("share" in navigator) {
      setShareAPISupported(true);
    }
  }, []);

  return shareAPISupported ? (
    <Button
      look="tertiary"
      onClick={() =>
        navigator
          .share({
            url: shareUrl,
            title: seoTitle,
            text: seoDescription
          })
          .then(() => null)
          .catch(() => null)
      }
    >
      <Icon icon="share" />
    </Button>
  ) : (
    <>
      <Link
        className={styles.facebook}
        aria-label="Share on facebook"
        link={{
          link_type: LinkType.Web,
          url: `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`
        }}
      >
        <Icon icon={"facebook"} />
      </Link>

      <Link
        className={styles.linkedIn}
        aria-label="Share on LinkedIn"
        link={{
          link_type: LinkType.Web,
          url: `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`
        }}
      >
        <Icon icon={"linkedin"} />
      </Link>
    </>
  );
};
