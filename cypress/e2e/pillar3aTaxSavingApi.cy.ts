import "cypress-each";
import {
  Children,
  CivilStatus,
  Gender,
  Municipality,
  Pillar3aTaxInfo,
  Pillar3aTaxSavings,
  Religion,
  RETIREMENT_AGE
} from "lib/pillar3a/taxSavingDomain";

const CANTON_CAPITALS: Municipality[] = [
  { canton: "AG", city: "Aarau", bfsId: 4001 },
  { canton: "AR", city: "Herisau", bfsId: 3001 },
  { canton: "AI", city: "Appenzell", bfsId: 3101 },
  { canton: "BS", city: "Basel", bfsId: 2701 },
  { canton: "BL", city: "Liestal", bfsId: 2829 },
  { canton: "BE", city: "Bern", bfsId: 351 },
  { canton: "FR", city: "Fribourg", bfsId: 2196 },
  { canton: "GE", city: "Genève", bfsId: 6621 },
  { canton: "GL", city: "Glarus", bfsId: 1632 },
  { canton: "GR", city: "Chur", bfsId: 3901 },
  { canton: "JU", city: "Delémont", bfsId: 6711 },
  { canton: "LU", city: "Luzern", bfsId: 1061 },
  { canton: "NE", city: "Neuchâtel", bfsId: 6458 },
  { canton: "NW", city: "Stans", bfsId: 1509 },
  { canton: "OW", city: "Sarnen", bfsId: 1407 },
  { canton: "SZ", city: "Schwyz", bfsId: 1372 },
  { canton: "SH", city: "Schaffhausen", bfsId: 2939 },
  { canton: "SO", city: "Solothurn", bfsId: 2601 },
  { canton: "SG", city: "St Gallen", bfsId: 3203 },
  { canton: "TI", city: "Bellinzona", bfsId: 5002 },
  { canton: "TG", city: "Frauenfeld", bfsId: 4566 },
  { canton: "UR", city: "Altdorf", bfsId: 1201 },
  { canton: "VD", city: "Lausanne", bfsId: 5586 },
  { canton: "VS", city: "Sion", bfsId: 6266 },
  { canton: "ZG", city: "Zug", bfsId: 1711 },
  { canton: "ZH", city: "Zürich", bfsId: 261 }
];
const AGES = [18, 45, 63];
const INCOMES = [50000, 70000, 125000, 180000, 300000];
const CHILDREN_AND_CIVIL_STATUSES = [
  { status: CivilStatus.SINGLE, children: Children.WITH },
  { status: CivilStatus.SINGLE, children: Children.WITHOUT },
  { status: CivilStatus.MARRIED, children: Children.WITH },
  { status: CivilStatus.MARRIED, children: Children.WITHOUT }
];
const CONFESSIONS = [Religion.OTHER_NONE, Religion.PROTESTANT, Religion.ROMAN_CATHOLIC];
const CONTRIBUTIONS = [1, 1000, 7056, 35280];
const DEFAULT_TAX_INFO: Pillar3aTaxInfo = {
  age: 30,
  municipality: { canton: "BE", city: "Bern", bfsId: 351 },
  gender: Gender.FEMALE,
  civilStatus: CivilStatus.SINGLE,
  religion: Religion.OTHER_NONE,
  children: Children.WITHOUT,
  pillar3aAssets: 0,
  taxableIncome: 150000,
  pillar3aContribution: 7056,
  missedYears: 5
};

const INVALID_INPUTS = [
  { name: "Missing age", info: { ...DEFAULT_TAX_INFO, age: undefined } },
  { name: "Too low age", info: { ...DEFAULT_TAX_INFO, age: 17 } },
  { name: "Too big age", info: { ...DEFAULT_TAX_INFO, age: 66 } },
  { name: "Missing bfsId", info: { ...DEFAULT_TAX_INFO, municipalityBfsId: undefined } },
  { name: "Wrong bfsId", info: { ...DEFAULT_TAX_INFO, municipalityBfsId: 0 } },
  { name: "Missing pillar3aAssets", info: { ...DEFAULT_TAX_INFO, pillar3aAssets: undefined } },
  { name: "Too low pillar3aAssets", info: { ...DEFAULT_TAX_INFO, pillar3aAssets: -1 } },
  { name: "Too big pillar3aAssets", info: { ...DEFAULT_TAX_INFO, pillar3aAssets: 20_000_001 } },
  { name: "Missing taxableIncome", info: { ...DEFAULT_TAX_INFO, taxableIncome: undefined } },
  { name: "Too low taxableIncome", info: { ...DEFAULT_TAX_INFO, taxableIncome: 29_999 } },
  { name: "Too big taxableIncome", info: { ...DEFAULT_TAX_INFO, taxableIncome: 20_000_001 } },
  { name: "Missing pillar3aContribution", info: { ...DEFAULT_TAX_INFO, taxableIncome: undefined } },
  { name: "Too low pillar3aContribution", info: { ...DEFAULT_TAX_INFO, taxableIncome: 0 } },
  { name: "Too big pillar3aContribution", info: { ...DEFAULT_TAX_INFO, taxableIncome: 32555 } },
  { name: "Missing missedYears", info: { ...DEFAULT_TAX_INFO, missedYears: undefined } },
  { name: "Too low missedYears", info: { ...DEFAULT_TAX_INFO, missedYears: -1 } },
  { name: "Too big missedYears", info: { ...DEFAULT_TAX_INFO, missedYears: 6 } },
  { name: "Missing gender", info: { ...DEFAULT_TAX_INFO, gender: undefined } },
  { name: "Wrong gender", info: { ...DEFAULT_TAX_INFO, gender: "WRONG_GENDER" } },
  { name: "Missing civilStatus", info: { ...DEFAULT_TAX_INFO, civilStatus: undefined } },
  { name: "Wrong civilStatus", info: { ...DEFAULT_TAX_INFO, civilStatus: "WRONG_CIVIL_STATUS" } },
  { name: "Missing children", info: { ...DEFAULT_TAX_INFO, children: undefined } },
  { name: "Wrong children", info: { ...DEFAULT_TAX_INFO, children: "WRONG_CHILDREN" } },
  { name: "Missing confession", info: { ...DEFAULT_TAX_INFO, confession: undefined } },
  { name: "Wrong confession", info: { ...DEFAULT_TAX_INFO, confession: "WRONG_CONFESSION" } }
];

describe("Tax saving API should calculate", () => {
  it("default situation", () => {
    callCalculator(DEFAULT_TAX_INFO, (_, response) => {
      expect(response.status).to.be.eq(500);
    });
  });
});

describe("Tax saving API should validate", () => {
  it.each(INVALID_INPUTS)("default situation in every canton %1", (args) => {
    callCalculator(args.info, (_, response) => {
      expect(response.status).to.be.eq(500);
    });
  });
});

describe.skip("Tax saving API should calculate combination of", () => {
  it.each(CANTON_CAPITALS)("default situation in every canton %1", (municipality) => {
    const params = { ...DEFAULT_TAX_INFO, municipality };
    callCalculatorSuccessfully(params, (info, savings) => {
      assertGeneralSavingsReasonable(info, savings);
    });
  });

  it.each(CANTON_CAPITALS)("default situation in every canton %1", (municipality) => {
    const params = { ...DEFAULT_TAX_INFO, municipality };
    callCalculatorSuccessfully(params, (info, savings) => {
      assertGeneralSavingsReasonable(info, savings);
    });
  });

  it.each(CANTON_CAPITALS.flatMap((m) => AGES.map((a) => ({ age: a, municipality: m }))))(
    "all ages in every canton %1",
    (args) => {
      const params = {
        ...DEFAULT_TAX_INFO,
        age: args.age,
        municipality: args.municipality
      };
      callCalculatorSuccessfully(params, (info, savings) => {
        assertGeneralSavingsReasonable(info, savings);
      });
    }
  );

  it.each(CANTON_CAPITALS.flatMap((m) => INCOMES.map((i) => ({ income: i, municipality: m }))))(
    "all incomes in every canton %p",
    (args) => {
      const params = {
        ...DEFAULT_TAX_INFO,
        taxableIncome: args.income,
        municipality: args.municipality
      };
      callCalculatorSuccessfully(params, (info, savings) => {
        assertGeneralSavingsReasonable(info, savings);
      });
    }
  );

  it.each(
    CANTON_CAPITALS.flatMap((m) =>
      CHILDREN_AND_CIVIL_STATUSES.map((s) => ({ status: s, municipality: m }))
    )
  )("all civil statuses in every canton %p", (args) => {
    const params = {
      ...DEFAULT_TAX_INFO,
      civilStatus: args.status.status,
      children: args.status.children,
      municipality: args.municipality
    };
    callCalculatorSuccessfully(params, (info, savings) => {
      assertGeneralSavingsReasonable(info, savings);
    });
  });

  it.each(
    CANTON_CAPITALS.flatMap((m) => CONFESSIONS.map((con) => ({ confession: con, municipality: m })))
  )("all confessions in every canton %p", (args) => {
    const params = {
      ...DEFAULT_TAX_INFO,
      confession: args.confession,
      municipality: args.municipality
    };
    callCalculatorSuccessfully(params, (info, savings) => {
      assertGeneralSavingsReasonable(info, savings);
    });
  });

  it.each(
    CANTON_CAPITALS.flatMap((m) =>
      CONTRIBUTIONS.map((con) => ({ contribution: con, municipality: m }))
    )
  )("all contributions in every canton %p", (args) => {
    const params = {
      ...DEFAULT_TAX_INFO,
      pillar3aContribution: args.contribution,
      municipality: args.municipality
    };
    callCalculatorSuccessfully(params, (info, savings) => {
      assertGeneralSavingsReasonable(info, savings);
    });
  });

  it.each(CANTON_CAPITALS)("no missed years in every canton%p", (municipality) => {
    const params = {
      ...DEFAULT_TAX_INFO,
      missedYears: 0,
      municipality
    };
    callCalculatorSuccessfully(params, (_, savings) => {
      assertNoAutomaticDepositSaving(savings);
    });
  });

  it.each(CANTON_CAPITALS)("each year missed in every canton%p", (municipality) => {
    const params = {
      ...DEFAULT_TAX_INFO,
      missedYears: 1,
      municipality
    };
    callCalculatorSuccessfully(params, (_, savings) => {
      assertNoGeneralSaving(savings);
    });
  });
});

const callCalculatorSuccessfully = (
  info: any,
  onSuccess: (p: any, savings: Pillar3aTaxSavings) => void
) => {
  const properAgeInfo = { ...info, age: Math.min(info.age, RETIREMENT_AGE[info.gender as Gender]) };
  const params: any = {
    ...properAgeInfo,
    municipalityBfsId: info.municipality.bfsId
  };
  delete params.municipality;
  callCalculator(params, (p: any, response: any) => {
    const savings: Pillar3aTaxSavings = response.body;
    onSuccess(p, savings);
  });
};

const callCalculator = (params: any, onResponse: (params: any, response: any) => void) => {
  const queryParams = new URLSearchParams(params).toString();
  cy.request({
    method: "GET",
    url: `/api/pillar3a-tax-savings?${queryParams}`,
    failOnStatusCode: false
  }).then((response: any) => {
    onResponse(params, response);
  });
};

const assertNotNegative = (savings: Pillar3aTaxSavings) => {
  expect(savings.generalSavings).to.be.gte(0);
  expect(savings.automaticDepositSavings).to.be.gte(0);
  expect(savings.staggeredPayoutSavings).to.be.gte(0);
};

const assertGeneralSavingsReasonable = (info: Pillar3aTaxInfo, savings: Pillar3aTaxSavings) => {
  assertNotNegative(savings);
  expect(savings.generalSavings).to.be.gte(savings.automaticDepositSavings);
  expect(savings.generalSavings).to.be.gte(savings.staggeredPayoutSavings);
  const contributionYears = RETIREMENT_AGE[info.gender as Gender] - info.age;
  const contributionAmount = info.pillar3aContribution * contributionYears;
  expect(savings.generalSavings).to.be.lt(0.45 * contributionAmount);
};

const assertNoAutomaticDepositSaving = (savings: Pillar3aTaxSavings) => {
  assertNotNegative(savings);
  expect(savings.automaticDepositSavings).to.be.eq(0);
  expect(savings.generalSavings).to.be.gte(savings.staggeredPayoutSavings);
};

const assertNoGeneralSaving = (savings: Pillar3aTaxSavings) => {
  assertNotNegative(savings);
  expect(savings.generalSavings).to.be.eq(0);
  expect(savings.automaticDepositSavings).to.be.gte(savings.staggeredPayoutSavings);
};

export {};
