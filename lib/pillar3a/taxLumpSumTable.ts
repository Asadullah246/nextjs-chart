import fs from "fs";
import path from "path";

import { Gender, Pillar3aTaxInfo, RETIREMENT_AGE } from "lib/pillar3a/taxSavingDomain";

const TAX_LUMP_SUM_COLUMNS = {
  AGE: "Alter",
  GENDER: "Steuersubjekt",
  LUMP_SUM_1000_VALUE: "Umwandlungswert CHF pro 1000 CHF"
};

interface LumpSumValue {
  age: number;
  gender: Gender;
  value: number;
}

export const lumpSumValue = (info: Pillar3aTaxInfo, taxBase: number) => {
  const lumpSum = readLumpSumJson().find(
    (t) => t.age === RETIREMENT_AGE[info.gender] && t.gender === info.gender
  ).value;
  return (taxBase / 1000) * lumpSum;
};

const readLumpSumJson = (): any[] => loadFile(`2022_lump_sum_table.json`).map(mapRow);

const mapRow = (r: any): LumpSumValue => {
  return {
    age: r[TAX_LUMP_SUM_COLUMNS.AGE],
    gender: r[TAX_LUMP_SUM_COLUMNS.GENDER] === "Frau" ? Gender.FEMALE : Gender.MALE,
    value: r[TAX_LUMP_SUM_COLUMNS.LUMP_SUM_1000_VALUE]
  };
};

const loadFile = (fileName: string) => {
  const assetsPath = path.join(process.cwd(), `assets/pillar3a-tax-savings/jsons/2022/${fileName}`);
  const content = fs.readFileSync(assetsPath, "utf-8");
  return JSON.parse(content);
};
