export interface FeeForNav {
  nav: number;
  fee: number;
}

interface RadicalCostsConfig {
  untiedStandardFee: number;
  s3aStandardFee: number;
  fee: FeeForNav[];
  currency: string;
  privateBankingFee: FeeForNav[];
  assumedPortfolioReturn: number;
  averageTER: number;
  untiedInitialInvestmentAmount: number;
  untiedInvestmentAmounts: number[];
  s3aInitialInvestmentAmount: number;
  s3aInvestmentAmounts: number[];
  childPortfolioInitialInvestmentAmount: number;
  childPortfolioInvestmentAmounts: number[];
}

export const radicalCostsConfig: RadicalCostsConfig = {
  untiedStandardFee: 0.005,
  s3aStandardFee: 0,
  fee: [
    { nav: 0, fee: 0 },
    { nav: 1, fee: 0.005 },
    { nav: 500000, fee: 0.0049 },
    { nav: 530000, fee: 0.0048 },
    { nav: 560000, fee: 0.0047 },
    { nav: 600000, fee: 0.0046 },
    { nav: 650000, fee: 0.0045 },
    { nav: 700000, fee: 0.0044 },
    { nav: 750000, fee: 0.0043 },
    { nav: 810000, fee: 0.0042 },
    { nav: 880000, fee: 0.0041 },
    { nav: 960000, fee: 0.004 },
    { nav: 1000000, fee: 0.0039 },
    { nav: 1100000, fee: 0.0038 },
    { nav: 1200000, fee: 0.0037 },
    { nav: 1400000, fee: 0.0036 },
    { nav: 1500000, fee: 0.0035 },
    { nav: 1700000, fee: 0.0034 },
    { nav: 2000000, fee: 0.0033 },
    { nav: 2200000, fee: 0.0032 },
    { nav: 2600000, fee: 0.0031 },
    { nav: 3000000, fee: 0.003 },
    { nav: 3500000, fee: 0.0029 },
    { nav: 4200000, fee: 0.0028 },
    { nav: 5100000, fee: 0.0027 },
    { nav: 6300000, fee: 0.0026 },
    { nav: 8000000, fee: 0.0025 }
  ],
  currency: "CHF",
  assumedPortfolioReturn: 0.05,
  averageTER: 0.0015,
  privateBankingFee: [
    { nav: 8500, fee: 0.012 },
    { nav: 20000, fee: 0.011 },
    { nav: 500000, fee: 0.0106 },
    { nav: 750000, fee: 0.0104 },
    { nav: 1500000, fee: 0.0102 }
  ],
  untiedInitialInvestmentAmount: 250000,
  untiedInvestmentAmounts: [
    0, 8500, 9000, 10000, 20000, 30000, 40000, 50000, 60000, 70000, 80000, 90000, 100000, 200000,
    250000, 300000, 400000, 500000, 530000, 560000, 600000, 650000, 700000, 750000, 810000, 880000,
    960000, 1000000, 1100000, 1200000, 1400000, 1500000, 1700000, 2000000, 2200000, 2600000,
    3000000, 3500000, 4200000, 5100000, 6300000, 8000000
  ],
  s3aInitialInvestmentAmount: 0,
  s3aInvestmentAmounts: [
    0, 1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000, 15000, 20000, 30000, 40000,
    50000, 60000, 70000, 80000, 90000, 100000, 150000, 200000, 250000, 300000, 350000, 400000,
    450000, 500000
  ],
  childPortfolioInitialInvestmentAmount: 0,
  childPortfolioInvestmentAmounts: [
    0, 1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000, 15000, 20000, 30000, 40000,
    50000, 60000, 70000, 80000, 90000, 100000, 150000, 200000, 250000, 300000, 350000, 400000,
    450000, 500000
  ]
};

export const takeWhile = (arr: any[], fn: (val: any) => boolean): any[] => {
  const [x, ...xs] = arr;

  if (arr.length > 0 && fn(x)) {
    return [x, ...takeWhile(xs, fn)];
  } else {
    return [];
  }
};

export const determineFee = (investment: number, fees: FeeForNav[]) => {
  const matches = takeWhile(fees, (i) => i.nav <= investment);
  if (matches.length === 0) {
    throw new Error(`Unable to find fee for investment amount: ${investment} on RadicalCosts`);
  }
  return matches[matches.length - 1].fee;
};
