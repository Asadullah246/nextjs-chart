export enum RiskToleranceCategory {
  low = "low",
  moderate = "moderate",
  high = "high"
}

export interface AssetClass {
  label: string;
  tooltip: string;
  color: string;
  weight: number;
}

export interface FeeForNav {
  nav: number;
  fee: number;
}
