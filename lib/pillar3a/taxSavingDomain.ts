export interface Municipality {
  bfsId: number;
  city: string;
  canton: string;
}

export enum Religion {
  ROMAN_CATHOLIC = "ROMAN_CATHOLIC",
  PROTESTANT = "PROTESTANT",
  CHRISTIAN_CATHOLIC = "CHRISTIAN_CATHOLIC",
  OTHER_NONE = "OTHER_NONE"
}

export enum CivilStatus {
  SINGLE = "SINGLE",
  MARRIED = "MARRIED"
}

export enum Children {
  WITH = "WITH",
  WITHOUT = "WITHOUT"
}

export enum Gender {
  MALE = "MALE",
  FEMALE = "FEMALE"
}

export interface Pillar3aTaxInfo {
  age: number;
  gender: Gender;
  municipality: Municipality;
  civilStatus: CivilStatus;
  children: Children;
  religion: Religion;
  taxableIncome: number;
  pillar3aAssets: number;
  pillar3aContribution: number;
  missedYears: number;
}

export interface Pillar3aTaxSavings {
  generalSavings: number;
  automaticDepositSavings: number;
  staggeredPayoutSavings: number;
}

export const RETIREMENT_AGE = {
  [Gender.MALE]: 65,
  [Gender.FEMALE]: 64
};
