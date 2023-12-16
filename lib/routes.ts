import { getLocaleFromString, Locale, LocaleISO } from "lib/languages";
import { AllDocumentTypes } from "lib/types.generated";

const NEXT_PUBLIC_VERCEL_ENV = process.env.NEXT_PUBLIC_VERCEL_ENV;
const NEXT_PUBLIC_VERCEL_URL = process.env.NEXT_PUBLIC_VERCEL_URL;

export const BASE_URL =
  NEXT_PUBLIC_VERCEL_ENV === "production"
    ? "https://www.truewealth.ch"
    : !NEXT_PUBLIC_VERCEL_ENV
      ? "http://localhost:3000"
      : `https://${NEXT_PUBLIC_VERCEL_URL}`;

export const hrefResolver = (doc: {
  type: AllDocumentTypes["type"];
  lang: string;
  url?: string | null;
  uid?: string | null;
}) => {
  const { iso } = getLocaleFromString(doc.lang);

  switch (doc.type) {
    case "pages":
    case "sustainable_investment":
    case "about_us":
    case "press":
    case "who_is_it_for":
    case "blog":
    case "contact":
    case "jobs":
    case "culture":
    case "pricing":
    case "pillar_3a":
    case "pillar_3a_tax_saving_calculator":
    case "child_portfolio":
    case "why_true_wealth":
    case "how_it_works":
    case "bond_price_calculator":
    case "compound_interest_calculator":
    case "faq_overview":
      return `/${iso}/${doc.uid}`;
    case "faq_category":
    case "faq_item":
      return `/${iso}${doc.url}`;
    case "blog_post":
      return `/${iso}/${getBlogRootName()}/${doc.uid}`;
    case "press_release":
      return `/${iso}/${getPressRootName(iso)}/${doc.uid}`;
    case "knowledge":
      const root = getKnowledgeRootName(iso);
      const uid = doc.uid === root ? "" : `/${doc.uid}`;
      return `/${iso}/${root}${uid}`;
    case "referral_invitation":
      return `/${iso}/${getInviteRootName()}/${doc.uid}`;
    // TODO
    // @ts-ignore
    case "no_translation":
      return `/${iso}/no-translation`;
    case "homepage":
    default:
      return `/${iso}`;
  }
};

export const getInviteRootName = () => "invite";
export const getBlogRootName = () => "blog";
export const getFAQRootName = () => "faq";
export const getPressRootName = (iso: Locale["iso"]) =>
  iso === LocaleISO.DE ? "presse" : iso === LocaleISO.FR ? "presse" : "press";
export const getKnowledgeRootName = (iso: Locale["iso"]) =>
  iso === LocaleISO.DE ? "wissen" : iso === LocaleISO.FR ? "connaissances" : "knowledge";
export const getContactRootName = (iso: Locale["iso"]) =>
  iso === LocaleISO.DE ? "kontakt" : "contact";
