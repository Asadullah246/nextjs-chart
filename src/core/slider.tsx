import RCSlider, { SliderProps } from "rc-slider";
import { FC, ReactNode } from "react";

import styles from "src/core/slider.module.scss";

// Currently needed because rc-slider is typed to accept number | number[] for value but it should only be number
const CustomSlider = RCSlider as React.ForwardRefExoticComponent<SliderProps<number>>;

interface Props extends SliderProps<number> {
  label?: ReactNode;
  labelValue?: ReactNode;
  labelValueSuffix?: ReactNode;
}

export const Slider: FC<Props> = ({ label, labelValue, labelValueSuffix = "CHF", ...rest }) => (
  <div className={styles.slider}>
    {(label || labelValue) && (
      <div className={styles.label}>
        {label && <strong>{label}</strong>}
        {labelValue !== undefined && (
          <div className={styles.value}>
            <strong>{labelValue}</strong>
            {labelValueSuffix}
          </div>
        )}
      </div>
    )}
    <CustomSlider {...rest} />
  </div>
);
