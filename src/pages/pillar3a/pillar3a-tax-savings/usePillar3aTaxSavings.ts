import { useApiFetch } from "src/pages/pillar3a/pillar3a-tax-savings/apiFetch";

import { Pillar3aTaxInfo, Pillar3aTaxSavings } from "lib/pillar3a/taxSavingDomain";

export const usePillar3aTaxSavings = (info: Pillar3aTaxInfo) => {
  return useApiFetch<Pillar3aTaxSavings>(url(info));
};

const url = (info: Pillar3aTaxInfo) => {
  const params: any = { ...info, municipalityBfsId: info.municipality.bfsId };
  delete params.municipality;
  const queryParams = new URLSearchParams(params).toString();
  return `/api/pillar3a-tax-savings?${queryParams}`;
};
