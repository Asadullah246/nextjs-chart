import { LinkType } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { buttonVariants } from "@true-wealth/ui-core";
import React, { FC } from "react";

import { Icon } from "src/core/icon";
import { Link } from "src/core/link";
import { Section } from "src/core/section/section";
import { SectionBackgroundImage } from "src/core/section/sectionBackgroundImage";
import { SectionContainer } from "src/core/section/sectionContainer";
import styles from "src/pages/jobs/introSlice.module.scss";
import { JobsContext } from "src/pages/jobs/types";
import { useTranslation } from "src/shared/translations";

import { htmlSerializer } from "lib/prismic/htmlSerializer";
import { JobsDocumentDataBodyIntroSlice } from "lib/types.generated";

type Props = SliceComponentProps<JobsDocumentDataBodyIntroSlice, JobsContext>;

export const IntroSlice: FC<Props> = ({
  slice: {
    primary: { image, content }
  }
}) => {
  const { t } = useTranslation();

  return (
    <Section variant="light" className={styles.introSlice}>
      <SectionBackgroundImage inverse top={30} right={-400} />
      <SectionContainer image={image} imagePosition="right" imageLoading="eager">
        <PrismicRichText field={content} components={htmlSerializer} />
        <Link
          link={{
            link_type: LinkType.Web,
            url: `#openPositions`
          }}
          external={false}
          className={buttonVariants({ look: "primary", size: "big" })}
          icon={<Icon icon="chevronRight" />}
        >
          {t("jobs.openPositions")}
        </Link>
      </SectionContainer>
    </Section>
  );
};
