import { LogoJsonLd, SocialProfileJsonLd } from "next-seo";
import { FC } from "react";

import { BASE_URL } from "lib/routes";

export const GeneralStructuredData: FC = () => (
  <>
    <SocialProfileJsonLd
      type="Organization"
      name="True Wealth AG"
      url={BASE_URL}
      sameAs={[
        "https://www.facebook.com/pages/True-Wealth/175945535896582",
        "https://www.linkedin.com/company/true-wealth"
      ]}
    />
    <LogoJsonLd logo={`${BASE_URL}/logo.png`} url={BASE_URL} />
  </>
);
