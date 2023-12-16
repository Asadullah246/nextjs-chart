import React, { FC, useState } from "react";

import { Slider } from "src/core/slider";
import { RiskToleranceCategory } from "src/pages/home/teaser/types";

interface Props {
  riskToleranceIndex: number;
  onRiskToleranceUpdate: (value: number) => void;
  riskToleranceCategory: RiskToleranceCategory;
  minRiskToleranceIndex: number;
  maxRiskToleranceIndex: number;
}

export const TeaserRiskSlider: FC<Props> = ({
  riskToleranceIndex,
  minRiskToleranceIndex,
  maxRiskToleranceIndex,
  onRiskToleranceUpdate
}) => {
  const [value, setValue] = useState(riskToleranceIndex);

  return (
    <Slider
      ariaLabelForHandle="Risk tolerance slider"
      value={value}
      onChange={(val) => {
        setValue(val);
        onRiskToleranceUpdate(val);
      }}
      min={minRiskToleranceIndex}
      max={maxRiskToleranceIndex}
    />
  );
};
