import { isFilled } from "@prismicio/client";
import { PrismicRichText } from "@prismicio/react";
import React, { FC } from "react";

import { Icon } from "src/core/icon";
import { Link } from "src/core/link";
import { Section } from "src/core/section/section";
import { SectionContainer } from "src/core/section/sectionContainer";
import styles from "src/pages/press/overview/contentSlice/resourcesAndContact.module.scss";
import { useTranslation } from "src/shared/translations";

import { htmlSerializer } from "lib/prismic/htmlSerializer";
import { PressDocument } from "lib/types.generated";
import { bytesToSize } from "lib/utils";

interface Props {
  doc: PressDocument;
}

export const ResourcesAndContact: FC<Props> = ({
  doc: {
    data: { contact, resources }
  }
}) => {
  const { t } = useTranslation();

  return (
    <Section>
      <SectionContainer className={styles.resourcesContactContainer}>
        <div className={styles.resourcesContactWrapper}>
          <div className={styles.contact}>
            <PrismicRichText field={contact} components={htmlSerializer} />
          </div>
          <div className={styles.resources}>
            <h2>{t("press.resources")}</h2>

            {resources?.map(({ resource, resource_name }) =>
              isFilled.linkToMedia(resource) ? (
                <Link key={resource.url} link={resource}>
                  <span className={styles.name}>
                    {resource_name}
                    {resource.size && (
                      <span className={styles.size}>ZIP {bytesToSize(+resource.size)}</span>
                    )}
                  </span>
                  <span className={styles.download}>
                    <Icon icon="download" />
                  </span>
                </Link>
              ) : null
            )}
          </div>
        </div>
      </SectionContainer>
    </Section>
  );
};
