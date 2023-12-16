import { RTTextNode } from "@prismicio/client";

import { WhyTrueWealthDocumentDataBodyComparisonSliceItem } from "lib/types.generated";

export const isTrueWealth = (item: WhyTrueWealthDocumentDataBodyComparisonSliceItem) =>
  item?.organization?.some((i) => (i as RTTextNode).text === "True Wealth") ?? false;

export type BodyRowsType = Exclude<
  keyof WhyTrueWealthDocumentDataBodyComparisonSliceItem,
  "organization"
>;

export const BODY_ROWS: BodyRowsType[] = [
  "minimum_investment",
  "costs",
  "convenience",
  "withdrawals",
  "potential_returns"
];
