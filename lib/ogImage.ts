import { BASE_URL } from "lib/routes";
import { fixedEncodeURIComponent } from "lib/utils";

export interface OgImage {
  title?: string;
  pathname: string;
}

export const getOgImageUrl = (ogImage: OgImage) =>
  `${BASE_URL}/api/og?config=${fixedEncodeURIComponent(JSON.stringify(ogImage))}`;

export const getConfigFromUrl = (input: string) => {
  const { searchParams } = new URL(input);
  const { title, pathname } = JSON.parse(searchParams.get("config") ?? "");

  return {
    title: title.replace(/(\s(–|-)\sTrue Wealth)|(True Wealth\s(–|-)\s)/, ""),
    url: pathname ? `truewealth.ch${pathname}` : null
  };
};
