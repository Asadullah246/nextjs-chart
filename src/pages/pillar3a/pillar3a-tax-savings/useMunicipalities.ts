import { useApiFetch } from "src/pages/pillar3a/pillar3a-tax-savings/apiFetch";

import { Municipality } from "lib/pillar3a/taxSavingDomain";

export const useMunicipalities = () => {
  return useApiFetch<{ [key: string]: Municipality }>(url());
};

const url = () => {
  return "/api/pillar3a-tax-municipalities";
};
