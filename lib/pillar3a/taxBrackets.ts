import { readIncomeTaxJson, readPensionPayoutTaxJson } from "lib/pillar3a/taxBracketsTables";
import { Children, CivilStatus, Pillar3aTaxInfo } from "lib/pillar3a/taxSavingDomain";
import { taxMultipliers } from "lib/pillar3a/taxTotalMultiplier";

export enum TaxBracketKind {
  FEDERAL = "FEDERAL",
  CANTONAL = "CANTONAL",
  MUNICIPAL = "MUNICIPAL"
}

export class TaxBracket {
  kind: TaxBracketKind;
  civilStatus: CivilStatus;
  children: Children;
  from: number;
  to: number;
  tariff: (taxBase: number) => number;
  flatAmount: number;

  constructor(
    kind: TaxBracketKind,
    civilStatus: CivilStatus,
    children: Children,
    from: number,
    to: number,
    tariff: (taxBase: number) => number,
    flatAmount = 0
  ) {
    this.kind = kind;
    this.civilStatus = civilStatus;
    this.children = children;
    this.from = from;
    this.to = to;
    this.tariff = tariff;
    this.flatAmount = flatAmount;
  }

  public applies(n: number): boolean {
    return n >= this.from;
  }

  public addFlatAmount(amount: number): TaxBracket {
    return new TaxBracket(
      this.kind,
      this.civilStatus,
      this.children,
      this.from,
      this.to,
      this.tariff,
      amount
    );
  }

  public tax(taxBase: number): number {
    const applicable = this.applies(taxBase);
    const band = this.to > taxBase ? taxBase - this.from : this.to - this.from;
    return applicable ? this.flatAmount + band * this.tariff(taxBase) : 0;
  }
}

export const marginalIncomeTax = (
  canton: string,
  info: Pillar3aTaxInfo,
  taxBase: number,
  taxKinds = [TaxBracketKind.FEDERAL, TaxBracketKind.MUNICIPAL, TaxBracketKind.CANTONAL]
) => {
  const brackets =
    canton === "BL" ? taxBracketsBaselLand(taxBase) : mapRows(readIncomeTaxJson(canton));
  return calculateMarginalTax(brackets, info, taxBase, taxKinds);
};

export const cantonalIncomeTax = (info: Pillar3aTaxInfo, taxBase: number) => {
  const brackets =
    info.municipality.canton === "BL"
      ? taxBracketsBaselLand(taxBase)
      : mapRows(readIncomeTaxJson(info.municipality.canton));

  if (info.municipality.canton === "SZ") {
    const multipliers = taxMultipliers(info);
    const cantonalPart = Math.min(
      calculateTax(brackets, info, taxBase, [TaxBracketKind.CANTONAL]),
      0.025
    );
    const municipalPart = Math.min(
      calculateTax(brackets, info, taxBase, [TaxBracketKind.MUNICIPAL]),
      0.025
    );
    return (
      (cantonalPart * multipliers.cantonal) / 100 +
      (municipalPart * (multipliers.municipal + multipliers.confessional[info.religion])) / 100
    );
  }
  if (info.municipality.canton === "VS") {
    const multipliers = taxMultipliers(info);
    const cantonalPart = Math.min(
      Math.max(calculateTax(brackets, info, taxBase, [TaxBracketKind.CANTONAL]), 0.02),
      0.04
    );
    const municipalPart = Math.min(
      Math.max(calculateTax(brackets, info, taxBase, [TaxBracketKind.MUNICIPAL]), 0.02),
      0.04
    );
    return (
      (cantonalPart * multipliers.cantonal) / 100 +
      (municipalPart * (multipliers.municipal + multipliers.confessional[info.religion])) / 100
    );
  }
  return calculateTax(brackets, info, taxBase);
};

const taxBracketsBaselLand = (taxBase: number) => {
  const single = [{ status: CivilStatus.SINGLE, children: Children.WITHOUT }].flatMap((type) => [
    new TaxBracket(TaxBracketKind.CANTONAL, type.status, type.children, 0, 15894, () => 0),
    new TaxBracket(
      TaxBracketKind.CANTONAL,
      type.status,
      type.children,
      15894,
      42385,
      () => 0.089718 * Math.log(taxBase) - 0.822905
    ),
    new TaxBracket(
      TaxBracketKind.CANTONAL,
      type.status,
      type.children,
      42385,
      105962,
      () => 0.043109 * Math.log(taxBase) - 0.326307
    ),
    new TaxBracket(
      TaxBracketKind.CANTONAL,
      type.status,
      type.children,
      105962,
      1218558,
      () => 0.010441 * Math.log(taxBase) + 0.051689
    ),
    new TaxBracket(
      TaxBracketKind.CANTONAL,
      type.status,
      type.children,
      1218558,
      Infinity,
      () => 0.18602
    )
  ]);

  const married = [
    { status: CivilStatus.MARRIED, children: Children.WITH },
    { status: CivilStatus.MARRIED, children: Children.WITHOUT },
    { status: CivilStatus.SINGLE, children: Children.WITH }
  ].flatMap((type) => [
    new TaxBracket(TaxBracketKind.CANTONAL, type.status, type.children, 0, 7947, () => 0),
    new TaxBracket(TaxBracketKind.CANTONAL, type.status, type.children, 7947, 15894, () => 0.0049),
    new TaxBracket(
      TaxBracketKind.CANTONAL,
      type.status,
      type.children,
      15894,
      42385,
      () => 0.089718 * Math.log(taxBase) - 0.822905
    ),
    new TaxBracket(
      TaxBracketKind.CANTONAL,
      type.status,
      type.children,
      42385,
      105962,
      () => 0.043109 * Math.log(taxBase) - 0.326307
    ),
    new TaxBracket(
      TaxBracketKind.CANTONAL,
      type.status,
      type.children,
      105962,
      1218558,
      () => 0.010441 * Math.log(taxBase) + 0.051689
    ),
    new TaxBracket(
      TaxBracketKind.CANTONAL,
      type.status,
      type.children,
      1218558,
      Infinity,
      () => 0.18602
    )
  ]);
  return [...single, ...married];
};

export const federalIncomeTax = (info: Pillar3aTaxInfo, taxBase: number) => {
  const brackets = mapRows(readIncomeTaxJson("CONFEDERATION"));
  return calculateTax(brackets, info, taxBase);
};

export const findPensionPayoutTax = (info: Pillar3aTaxInfo, taxBase: number) => {
  const { canton } = info.municipality;
  let brackets = mapRows(readPensionPayoutTaxJson(canton));

  if (canton === "FR") {
    brackets = brackets.map((b) => (b.from === 5000 ? b.addFlatAmount(100) : b));
  }
  const tax = calculateTax(brackets, info, taxBase);

  if (canton === "BL") {
    return Math.min(0.045, tax);
  }

  return tax;
};

export const calculateMarginalTax = (
  tariffs: TaxBracket[],
  info: Pillar3aTaxInfo,
  taxBase: number,
  taxKinds = [TaxBracketKind.FEDERAL, TaxBracketKind.MUNICIPAL, TaxBracketKind.CANTONAL]
) => {
  const tax = tariffs
    .filter((t) => t.children === info.children && t.civilStatus === info.civilStatus)
    .filter((t) => taxKinds.includes(t.kind))
    .filter((t) => t.applies(taxBase))
    .sort((a, b) => b.from - a.from);
  return tax[0]?.tariff(taxBase) ?? 0;
};

export const calculateTax = (
  tariffs: TaxBracket[],
  info: Pillar3aTaxInfo,
  taxBase: number,
  taxKinds = [TaxBracketKind.FEDERAL, TaxBracketKind.MUNICIPAL, TaxBracketKind.CANTONAL]
) => {
  const tax = tariffs
    .filter((t) => t.children === info.children && t.civilStatus === info.civilStatus)
    .filter((t) => taxKinds.includes(t.kind))
    .map((t) => t.tax(taxBase))
    .reduce((s, v) => s + v, 0);
  return taxBase === 0 ? 0 : tax / taxBase;
};

const BASE_DELTA_COLUMN = "Für die nächsten CHF";
const BASE_AMOUNT_COLUMN = "Steuerbares Einkommen CHF";
const BASE_CAPITAL_COLUMN = "Kapitalauszahlung CHF";
const PERCENTAGE_COLUMN = "Zusätzlich %";

const FAMILY_STRUCTURES: { [key: string]: any } = {
  Alleinstehend: [
    { civilStatus: CivilStatus.SINGLE, children: Children.WITH },
    { civilStatus: CivilStatus.SINGLE, children: Children.WITHOUT }
  ],
  Verheiratet: [
    { civilStatus: CivilStatus.MARRIED, children: Children.WITH },
    { civilStatus: CivilStatus.MARRIED, children: Children.WITHOUT }
  ],
  "Alleinstehend ohne Kinder": [{ civilStatus: CivilStatus.SINGLE, children: Children.WITHOUT }],
  "Verheiratet / Alleinstehend mit Kindern": [
    { civilStatus: CivilStatus.SINGLE, children: Children.WITH },
    { civilStatus: CivilStatus.MARRIED, children: Children.WITH },
    { civilStatus: CivilStatus.MARRIED, children: Children.WITHOUT }
  ],
  "Verheiratet / Alleinstehend mit Kindern (nicht im Konkubinat)": [
    { civilStatus: CivilStatus.MARRIED, children: Children.WITH },
    { civilStatus: CivilStatus.MARRIED, children: Children.WITHOUT }
  ],
  "Alleinstehend mit Kindern im Konkubinat": [
    { civilStatus: CivilStatus.SINGLE, children: Children.WITHOUT }
  ],
  Alle: [
    { civilStatus: CivilStatus.SINGLE, children: Children.WITH },
    { civilStatus: CivilStatus.SINGLE, children: Children.WITHOUT },
    { civilStatus: CivilStatus.MARRIED, children: Children.WITH },
    { civilStatus: CivilStatus.MARRIED, children: Children.WITHOUT }
  ]
};

const mapRows = (rows: any[]) => {
  const mapper = findMapper(rows);
  return Object.keys(FAMILY_STRUCTURES).flatMap((structure) => {
    const types = [
      { family: structure, type: "Kanton" },
      { family: structure, type: "Gemeinde" },
      { family: structure, type: "Bundessteuer" }
    ];
    return types.flatMap((t) => {
      const brackets = rows.filter(
        (r) => r.Steuersubjekt === t.family && r.Steuerhoheit === t.type
      );
      return mapper(brackets, FAMILY_STRUCTURES[structure]);
    });
  });
};

const findMapper = (rows: any[]) => {
  const firstRow = rows[0];
  const isDelta = Object.keys(firstRow).includes(BASE_DELTA_COLUMN);
  if (isDelta) {
    return mapDeltaBrackets;
  }
  const isAmount = Object.keys(firstRow).some(
    (k) => k === BASE_AMOUNT_COLUMN || k === BASE_CAPITAL_COLUMN
  );
  if (isAmount) {
    return mapAmountBrackets;
  }
  return mapSingleBracket;
};

const mapDeltaBrackets = (
  rows: any[],
  civilStatuses: { civilStatus: CivilStatus; children: Children }[]
): TaxBracket[] => {
  let currentFrom = 0;
  return rows.flatMap((row, index) => {
    const currentTo = currentFrom + row[BASE_DELTA_COLUMN];
    const brackets = civilStatuses.map(
      (status) =>
        new TaxBracket(
          mapKind(row.Steuerhoheit),
          status.civilStatus,
          status.children,
          currentFrom,
          index !== rows.length - 1 ? currentTo : Infinity,
          () => row[PERCENTAGE_COLUMN] / 100
        )
    );
    currentFrom = currentTo;
    return brackets;
  });
};

const mapAmountBrackets = (
  rows: any[],
  civilStatuses: { civilStatus: CivilStatus; children: Children }[]
): TaxBracket[] => {
  return rows.flatMap((row, index) => {
    const from = getAmountValue(row);
    const to = index < rows.length - 1 ? getAmountValue(rows[index + 1]) : Infinity;
    return civilStatuses.map((status) => {
      return new TaxBracket(
        mapKind(row.Steuerhoheit),
        status.civilStatus,
        status.children,
        from,
        to,
        () => row[PERCENTAGE_COLUMN] / 100
      );
    });
  });
};

const mapKind = (kind: string) => {
  if (kind === "Kanton") {
    return TaxBracketKind.CANTONAL;
  }
  if (kind === "Gemeinde") {
    return TaxBracketKind.MUNICIPAL;
  }
  if (kind === "Bundessteuer") {
    return TaxBracketKind.FEDERAL;
  }
  throw Error(`Cannot map tax bracket kind ${kind}`);
};

const getAmountValue = (row: any): number => {
  if (row[BASE_AMOUNT_COLUMN] !== undefined && row[BASE_AMOUNT_COLUMN] !== null) {
    return row[BASE_AMOUNT_COLUMN];
  }

  if (row[BASE_CAPITAL_COLUMN] !== undefined && row[BASE_CAPITAL_COLUMN] !== null) {
    return row[BASE_CAPITAL_COLUMN];
  }

  throw new Error("Incorrect tax base amount!");
};

const mapSingleBracket = (
  rows: any[],
  civilStatuses: { civilStatus: CivilStatus; children: Children }[]
): TaxBracket[] => {
  if (rows.length === 0) {
    return [];
  }
  if (rows.length > 1) {
    throw Error("Single value mapper expects only one row!");
  }
  const onlyRow = rows[0];
  return civilStatuses.map(
    (status) =>
      new TaxBracket(
        mapKind(onlyRow.Steuerhoheit),
        status.civilStatus,
        status.children,
        0,
        Infinity,
        () => onlyRow["Steuersatz %"] / 100
      )
  );
};
