import { isFilled } from "@prismicio/client";
import classNames from "classnames";
import { useRouter } from "next/router";
import React, { FC, useContext } from "react";

import { Link } from "src/core/link";
import styles from "src/pages/knowledge/navigation.module.scss";
import { PagePropsContext } from "src/shared/pageContext";

import { hrefResolver } from "lib/routes";

export const Navigation: FC = () => {
  const { knowledgeNavigation, doc } = useContext(PagePropsContext);
  const { push, locale: localeIso } = useRouter();
  const onSelectChange = (ev: React.ChangeEvent<HTMLSelectElement>) => {
    if (localeIso) {
      const asPath = hrefResolver({
        lang: localeIso,
        type: "knowledge",
        uid: ev.target.value
      });

      push(asPath);
    }
  };

  return (
    <div className={styles.navigation}>
      <select onChange={onSelectChange} aria-label="Mobile Navigation">
        {knowledgeNavigation?.data.links?.map(({ link, label }, i) => (
          <option key={i} value={isFilled.contentRelationship(link) ? link.uid : undefined}>
            {label}
          </option>
        ))}
      </select>
      <ul>
        {knowledgeNavigation?.data.links?.map(({ link, label }, i) => {
          const isActive = isFilled.contentRelationship(link) ? link.uid === doc?.uid : false;

          return (
            <li key={i} className={classNames({ [styles.active]: isActive })}>
              <Link link={link} scroll={false}>
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
