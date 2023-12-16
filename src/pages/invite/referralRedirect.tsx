import { useRouter } from "next/router";
import { FC, useEffect } from "react";

export const ReferralRedirect: FC = () => {
  const { query, locale } = useRouter();
  const inviteCode = query.code;

  useEffect(() => {
    if (inviteCode) {
      // This logic should redirect the referral pages defined in Prismic to our app (e.g. truewealth.ch/invite/pelsulopb9?code=9d01b095)
      window.location.href = `${process.env.NEXT_PUBLIC_APP_URL}/app/signup/real?referral=${inviteCode}&lang=${locale}`;
    }
  }, [inviteCode, locale]);

  return null;
};
