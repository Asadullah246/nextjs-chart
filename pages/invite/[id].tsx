import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { PreviewData } from "pages/api/preview";
import React from "react";

import { ReferralRedirect } from "src/pages/invite/referralRedirect";
import { DefaultPageProps } from "src/shared/types";

import { getLocaleFromString, LOCALES } from "lib/languages";
import { createClient } from "lib/prismic/config";
import { ReferralInvitationDocument } from "lib/types.generated";

const InvitePage: NextPage<{ doc: ReferralInvitationDocument }> = () => <ReferralRedirect />;

export const getStaticPaths: GetStaticPaths<{ id: string }> = async () => {
  const client = createClient();
  const referralInvitationPages = await client.getAllByType("referral_invitation", {
    lang: "*"
  });

  return {
    paths: referralInvitationPages.flatMap((doc) => {
      const localeIso = getLocaleFromString(doc.lang).iso;

      return {
        params: {
          id: doc.uid!
        },
        locale: localeIso
      };
    }),
    fallback: true
  };
};

export const getStaticProps: GetStaticProps<
  DefaultPageProps<{}>,
  { id: string },
  PreviewData
> = async ({ params, locale: contextLocale, previewData }) => {
  const uid = params?.id;
  const locale = contextLocale ? LOCALES[contextLocale] : null;
  const client = createClient({ previewData });
  let doc;

  try {
    doc = uid ? await client.getByUID("referral_invitation", uid) : null;
  } catch (err) {
    //
  }

  if (!doc) {
    // Fallback for old referral pages (e.g. truewealth.ch/invite/9d01b095)
    return {
      redirect: {
        destination: `${process.env.NEXT_PUBLIC_APP_URL}/app/signup/real?referral=${uid}&lang=${locale?.iso}`,
        permanent: false
      }
    };
  }

  return {
    props: {
      doc,
      languageAlternates: []
    }
  };
};

export default InvitePage;
