import { LinkType } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { useRouter } from "next/router";
import React, { FC } from "react";

import { Pillar3aContext } from "src/pages/pillar3a/types";
import { LeadingRoboAdvisor } from "src/shared/leadingRoboAdvisor";

import { Pillar3aDocumentDataBodyLeadingRoboAdvisorSlice } from "lib/types.generated";

type Props = SliceComponentProps<Pillar3aDocumentDataBodyLeadingRoboAdvisorSlice, Pillar3aContext>;

export const LeadingRoboAdvisorSlice: FC<Props> = ({
  slice: {
    primary: {
      intro,
      clients,
      aum,
      award_winning,
      customer_support,
      no_lock_in,
      open_account,
      open_account_link_text
    }
  }
}) => {
  const { locale: localeIso } = useRouter();
  return (
    <LeadingRoboAdvisor
      intro={intro}
      items={[
        {
          icon: "shieldTick",
          label: clients
        },
        {
          icon: "coinStack",
          label: aum
        },
        {
          icon: "starCircle",
          label: award_winning
        },
        {
          icon: "customerSupport",
          label: customer_support
        },
        {
          icon: "noLocKIn",
          label: no_lock_in
        }
      ]}
      ctaIntro={open_account}
      ctaLabel={open_account_link_text}
      ctaLink={{
        url: `${process.env.NEXT_PUBLIC_APP_URL}/app/signup/child-only?lang=${localeIso}`,
        link_type: LinkType.Web
      }}
    />
  );
};
