import { LocaleIETF } from "lib/languages";

export const sortByDate = (a?: string | null, b?: string | null) =>
  !b || !a ? 0 : new Date(b).getTime() - new Date(a).getTime();

export const bytesToSize = (bytes: number) => {
  const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
  if (bytes === 0) {
    return "0 Byte";
  }
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  return Math.round(bytes / Math.pow(1024, i)) + " " + sizes[i];
};

interface FormattingOptions {
  year: "numeric" | "2-digit";
}

export const swissFormattedDate = (date: string | Date, options?: FormattingOptions) =>
  new Date(date).toLocaleDateString(LocaleIETF.DE, {
    year: options?.year ? options.year : "numeric",
    month: "2-digit",
    day: "2-digit"
  });

export const formatCurrency = (value: number, minimumFractionDigits = 0, currency = "CHF") =>
  new Intl.NumberFormat("de-CH", { style: "currency", currency, minimumFractionDigits }).format(
    value
  );

/**
 * From https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent
 * To be more stringent in adhering to RFC 3986 (which reserves !, ', (, ), and *), even though these characters have no formalized URI delimiting uses, the following can be safely used:
 */
export const fixedEncodeURIComponent = (input: string) =>
  encodeURIComponent(input).replace(
    /[!'()*]/g,
    (c) => `%${c.charCodeAt(0).toString(16).toUpperCase()}`
  );

export const truncate = (str: string, n: number) =>
  str.length > n ? str.slice(0, n - 1) + "..." : str;
