// @ts-ignore
import fs from "fs";
import path from "path";
import XLSX from "xlsx";

const convertTaxBracketsJson = (excelPath: string) => {
  const excelOptions = { header: 5, range: 5 };
  const json = excelToJson(excelPath, excelOptions);
  saveJson(json, excelPath);
};

const convertTaxMultipliersJson = (excelPath: string) => {
  const excelOptions = { header: 3, range: 3 };
  const json = excelToJson(excelPath, excelOptions);
  saveJson(json, excelPath);
};

const convertLumpSumJson = (excelPath: string) => {
  const excelOptions = { header: 6, range: 5 };
  const json = excelToJson(excelPath, excelOptions);
  saveJson(json, excelPath);
};

const saveJson = (json: any, excelPath: string) => {
  const jsonPath = excelPath.replace(".xlsx", ".json").replace(EXCELS_PATH, JSONS_PATH);
  fs.writeFile(jsonPath, JSON.stringify(json), "utf-8", (e: any) =>
    e ? console.error(e) : undefined
  );
};

const excelToJson = (excelPath: string, opts?: any) => {
  const assetsPath = path.join(process.cwd(), excelPath);
  const excel = XLSX.readFile(assetsPath, { type: "buffer" });
  return XLSX.utils.sheet_to_json(excel.Sheets[excel.SheetNames[0]], opts);
};

const EXCELS_PATH = "./assets/pillar3a-tax-savings/excels/2022/";
const JSONS_PATH = "./assets/pillar3a-tax-savings/jsons/2022/";

const excels = fs.readdirSync(EXCELS_PATH).filter((file: string) => file.endsWith(".xlsx"));

excels
  .filter((file: string) => file.includes("income_tax") || file.includes("pension_payout"))
  .forEach((file: string) => convertTaxBracketsJson(EXCELS_PATH + file));

convertTaxMultipliersJson(EXCELS_PATH + "2022_income_multipliers.xlsx");
convertLumpSumJson(EXCELS_PATH + "2022_lump_sum_table.xlsx");
