import { SliderConfiguration } from "src/pages/bondPriceCalculator/types";

export const faceValueConfig: SliderConfiguration = {
  min: 0,
  max: 1_000_000,
  default: 100_000,
  valueSuffix: "CHF"
};

export const yearsToMaturityConfig: SliderConfiguration = {
  min: 0,
  max: 30,
  default: 10,
  step: 1,
  valueSuffix: "Years"
};

export const annualCouponRateConfig: SliderConfiguration = {
  min: 0,
  max: 12,
  default: 0.5,
  step: 0.25,
  valueSuffix: "%"
};

export const yieldToMaturityConfig: SliderConfiguration = {
  min: -2,
  max: 12,
  default: 0.75,
  step: 0.25,
  valueSuffix: "%"
};

export const currencyConfig = {
  style: "currency",
  currency: "CHF",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0
};

export const percentageconfig = {
  style: "percent",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
};
