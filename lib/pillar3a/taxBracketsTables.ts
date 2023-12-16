import fs from "fs";
import path from "path";

import { Religion } from "lib/pillar3a/taxSavingDomain";
import { TaxMultipliers } from "lib/pillar3a/taxTotalMultiplier";

const TAX_MULTIPLIERS_COLUMNS = {
  BFS_ID: "BfS-Id",
  CITY: "Gemeinde",
  CANTON: "Kanton",
  CANTONAL_MULTIPLIER: "Kanton_1",
  MUNICIPAL_MULTIPLIER: "Gemeinde_1",
  CONFESSION_PROTESTANT: "Kirche ref.",
  CONFESSION_ROMAN_CATHOLIC: "Kirche röm.-kt.",
  CONFESSION_CHRISTIAN_CATHOLIC: "Kirche christkt."
};

export const loadTaxMultipliers = () => mapTaxMultiplierRows(readTaxMultipliersJson());
export const loadMunicipalities = () => loadTaxMultipliers().map((m) => m.municipality);

const mapTaxMultiplierRows = (rows: any[]): TaxMultipliers[] => {
  return rows.map((r) => ({
    municipality: {
      bfsId: r[TAX_MULTIPLIERS_COLUMNS.BFS_ID],
      city: r[TAX_MULTIPLIERS_COLUMNS.CITY],
      canton: r[TAX_MULTIPLIERS_COLUMNS.CANTON]
    },
    cantonal: r[TAX_MULTIPLIERS_COLUMNS.CANTONAL_MULTIPLIER],
    municipal: r[TAX_MULTIPLIERS_COLUMNS.MUNICIPAL_MULTIPLIER],
    confessional: {
      [Religion.PROTESTANT]: r[TAX_MULTIPLIERS_COLUMNS.CONFESSION_PROTESTANT],
      [Religion.ROMAN_CATHOLIC]: r[TAX_MULTIPLIERS_COLUMNS.CONFESSION_ROMAN_CATHOLIC],
      [Religion.CHRISTIAN_CATHOLIC]: r[TAX_MULTIPLIERS_COLUMNS.CONFESSION_CHRISTIAN_CATHOLIC],
      [Religion.OTHER_NONE]: 0
    }
  }));
};

export const readPensionPayoutTaxJson = (canton: string): any[] =>
  loadFile(`2022_pension_payout_${canton}.json`);

export const readIncomeTaxJson = (type: string): any[] => loadFile(`2022_income_tax_${type}.json`);

export const readTaxMultipliersJson = () => loadFile("2022_income_multipliers.json");

const loadFile = (fileName: string) => {
  const assetsPath = path.join(process.cwd(), `assets/pillar3a-tax-savings/jsons/2022/${fileName}`);
  const content = fs.readFileSync(assetsPath, "utf-8");
  return JSON.parse(content);
};
