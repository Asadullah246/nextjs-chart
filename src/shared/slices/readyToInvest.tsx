import { buttonVariants } from "@true-wealth/ui-core";
import classNames from "classnames";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { FC } from "react";

import { Section } from "src/core/section/section";
import { SectionContainer } from "src/core/section/sectionContainer";
import { RealSignUpButton } from "src/shared/buttons/realSignUpButton";
import { TestAccountSignUpButton } from "src/shared/buttons/testAccountSignUpButton";
import styles from "src/shared/slices/readyToInvest.module.scss";
import { useTranslation } from "src/shared/translations";

export const ReadyToInvest: FC = () => {
  const { t } = useTranslation();
  const { locale: localeIso } = useRouter();

  return (
    <Section variant="pearl">
      <SectionContainer noVerticalPadding noHorizontalPadding noMaxWidth>
        <div className={styles.wrapper}>
          <div className={classNames(styles.imageContainer, styles.laptop)}>
            <Image
              src={`/assets/img/readyToInvest-${localeIso}-laptop@2x.png`}
              alt="Laptop"
              width={540}
              height={496}
              style={{
                maxWidth: "100%",
                height: "auto"
              }}
            />
          </div>

          <div className={styles.content}>
            <h2>{t("readyToInvest.title")}</h2>

            <RealSignUpButton className={buttonVariants({ look: "primary", size: "big" })} />

            <p>{t("readyToInvest.content")}</p>
            <TestAccountSignUpButton className={styles.testAccount} />
          </div>

          <div className={classNames(styles.imageContainer, styles.phone)}>
            <Image
              src={`/assets/img/readyToInvest-${localeIso}-phone@2x.png`}
              alt="Phone"
              width={253}
              height={480}
              style={{
                maxWidth: "100%",
                height: "auto"
              }}
            />
          </div>
        </div>
      </SectionContainer>
    </Section>
  );
};
