import {
  cantonalIncomeTax,
  federalIncomeTax,
  findPensionPayoutTax,
  marginalIncomeTax,
  TaxBracketKind
} from "lib/pillar3a/taxBrackets";
import { lumpSumValue } from "lib/pillar3a/taxLumpSumTable";
import {
  CivilStatus,
  Pillar3aTaxInfo,
  Pillar3aTaxSavings,
  RETIREMENT_AGE
} from "lib/pillar3a/taxSavingDomain";
import { taxMultipliers, taxTotalMultiplier } from "lib/pillar3a/taxTotalMultiplier";

const NUMBER_OF_BUCKETS = 5;

export const calculateGeneralSavings = (info: Pillar3aTaxInfo): Pillar3aTaxSavings => {
  const federalTax = marginalIncomeTax("CONFEDERATION", info, info.taxableIncome);
  const cantonalTax = marginalIncomeTax(info.municipality.canton, info, info.taxableIncome);
  const totalMultiplier = taxTotalMultiplier(info);
  let marginalTaxRate = federalTax + cantonalTax * totalMultiplier;
  if (info.municipality.canton === "SZ" || info.municipality.canton === "VS") {
    const multipliers = taxMultipliers(info);
    const cantonalPart = marginalIncomeTax(info.municipality.canton, info, info.taxableIncome, [
      TaxBracketKind.CANTONAL
    ]);
    const municipalPart = marginalIncomeTax(info.municipality.canton, info, info.taxableIncome, [
      TaxBracketKind.MUNICIPAL
    ]);
    marginalTaxRate =
      federalTax +
      (cantonalPart * multipliers.cantonal) / 100 +
      (municipalPart * (multipliers.municipal + multipliers.confessional[info.religion])) / 100;
  }

  const perfectInvestmentYears = RETIREMENT_AGE[info.gender] - info.age;
  const imperfectInvestmentYears =
    info.missedYears !== 0
      ? Math.ceil(perfectInvestmentYears - perfectInvestmentYears / info.missedYears)
      : perfectInvestmentYears;

  const perfectFutureContribution = perfectInvestmentYears * info.pillar3aContribution;
  const imperfectFutureContribution = imperfectInvestmentYears * info.pillar3aContribution;

  const perfectTotalContribution = perfectFutureContribution + info.pillar3aAssets;
  const imperfectTotalContribution = imperfectFutureContribution + info.pillar3aAssets;

  const imperfectWithdrawalTax = withdrawalTax(info, totalMultiplier, imperfectTotalContribution);
  const imperfectSavings = (marginalTaxRate - imperfectWithdrawalTax) * imperfectFutureContribution;

  const perfectWithdrawalTax = withdrawalTax(info, totalMultiplier, perfectTotalContribution);

  const perfectSavings = (marginalTaxRate - perfectWithdrawalTax) * perfectFutureContribution;

  const staggeredInvestment = Math.round(
    perfectFutureContribution / Math.min(perfectInvestmentYears, NUMBER_OF_BUCKETS)
  );
  const staggeredWithdrawalTax = withdrawalTax(info, totalMultiplier, staggeredInvestment);
  const staggeredPayoutSavings =
    (perfectWithdrawalTax - staggeredWithdrawalTax) * perfectFutureContribution;

  return {
    generalSavings: Math.round(imperfectSavings),
    automaticDepositSavings: Math.round(perfectSavings - imperfectSavings),
    staggeredPayoutSavings: Math.round(staggeredPayoutSavings)
  };
};

const withdrawalTax = (info: Pillar3aTaxInfo, multipliers: number, taxBase: number) => {
  let federal = federalIncomeTax(info, taxBase);
  let withdrawal = cantonalWithdrawalTax(info, multipliers, taxBase);
  return (1 / 5) * federal + withdrawal;
};

const WITHDRAWAL_TAX_FORMULAS: Record<string, (info: Pillar3aTaxInfo, taxBase: number) => number> =
  {
    AG: (info, taxBase) => Math.max(0.3 * cantonalIncomeTax(info, taxBase), 0.01),
    AI: (info, taxBase) => Math.max((1 / 4) * cantonalIncomeTax(info, taxBase), 0.005),
    GE: (info, taxBase) => (1 / 5) * cantonalIncomeTax(info, taxBase),
    GR: (info, taxBase) => Math.min(Math.max(cantonalIncomeTax(info, taxBase / 15), 0.015), 0.025),
    LU: (info, taxBase) => (1 / 3) * cantonalIncomeTax(info, taxBase),
    NE: (info, taxBase) => Math.max((1 / 4) * cantonalIncomeTax(info, taxBase), 0.025),
    NW: (info, taxBase) => Math.max((1 / 4) * cantonalIncomeTax(info, taxBase), 0.005),
    OW: (info, taxBase) => (2 / 5) * cantonalIncomeTax(info, taxBase),
    SH: (info, taxBase) => (1 / 5) * cantonalIncomeTax(info, taxBase),
    SO: (info, taxBase) => (1 / 4) * cantonalIncomeTax(info, taxBase),
    SZ: (info, taxBase) => cantonalIncomeTax(info, taxBase / 25),
    TG: (info) => (info.civilStatus === CivilStatus.MARRIED ? 0.02 : 0.024),
    TI: (info, taxBase) => Math.max(cantonalIncomeTax(info, lumpSumValue(info, taxBase)), 0.02),
    VD: (info, taxBase) => (1 / 5) * cantonalIncomeTax(info, taxBase),
    VS: (info, taxBase) => 0.98 * cantonalIncomeTax(info, lumpSumValue(info, taxBase)),
    ZG: (info, taxBase) => {
      const zugLimit = 218200;
      if (taxBase <= zugLimit) {
        return Math.max(0.3 * cantonalIncomeTax(info, taxBase), 0.005);
      } else {
        const below = 0.3 * cantonalIncomeTax(info, zugLimit) * (zugLimit / taxBase);
        const above = 0.4 * cantonalIncomeTax(info, taxBase) * ((taxBase - zugLimit) / taxBase);
        return below + above;
      }
    },
    ZH: (info, taxBase) => Math.max(cantonalIncomeTax(info, taxBase / 20), 0.02)
  };

const cantonalWithdrawalTax = (info: Pillar3aTaxInfo, multipliers: number, taxBase: number) => {
  const formula = WITHDRAWAL_TAX_FORMULAS[info.municipality.canton];
  if (info.municipality.canton === "BE" && taxBase < 5200) {
    return 0;
  }
  const tax = formula ? formula(info, taxBase) : findPensionPayoutTax(info, taxBase);
  if (info.municipality.canton === "SZ" || info.municipality.canton === "VS") {
    return tax;
  }
  return tax * multipliers;
};
