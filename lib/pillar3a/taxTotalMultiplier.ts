import { loadMunicipalities, loadTaxMultipliers } from "lib/pillar3a/taxBracketsTables";
import { Municipality, Pillar3aTaxInfo, Religion } from "lib/pillar3a/taxSavingDomain";

export interface TaxMultipliers {
  municipality: Municipality;
  cantonal: number;
  municipal: number;
  confessional: {
    [key in Religion]: number;
  };
}

const groupBy = <T>(arr: T[], fn: (item: T) => string) => {
  const empty: { [key: string]: T } = {};
  return arr.reduce((result, item) => {
    const key = fn(item);
    result[key] = item;
    return result;
  }, empty);
};

export const getTaxMultipliersByBfsId = () =>
  groupBy(loadTaxMultipliers(), (m) => "" + m.municipality.bfsId);
export const getMunicipalitiesByBfsId = () => groupBy(loadMunicipalities(), (m) => "" + m.bfsId);

export const taxTotalMultiplier = (info: Pillar3aTaxInfo): number => {
  const multipliers = taxMultipliers(info);
  const { cantonal, municipal, confessional } = multipliers;
  return (cantonal + municipal + confessional[info.religion]) / 100;
};

export const taxMultipliers = (info: Pillar3aTaxInfo) => {
  const multipliers = getTaxMultipliersByBfsId()[info.municipality.bfsId];
  if (!multipliers) {
    throw Error(`Missing tax multipliers for info=${info}`);
  }
  return multipliers;
};
