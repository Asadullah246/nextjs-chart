import RCSlider, { SliderProps } from "rc-slider";
import { FC, ReactNode } from "react";

import styles from "src/core/slider.module.scss";

// Currently needed because rc-slider is typed to accept number | number[] for value but it should only be number
export const LargeNumberSlider = RCSlider as React.ForwardRefExoticComponent<SliderProps<number>>;

interface Props extends SliderProps<number> {
  label?: ReactNode;
  labelValue?: ReactNode;
  labelValueSuffix?: ReactNode;
}

export const SliderLarge: FC<Props> = ({ label, labelValue, labelValueSuffix = "CHF", ...rest }) => (
  <div className={styles.slider}>
    {(label || labelValue) && (
      <div className={styles.label}>
            <h1><strong>{labelValue}</strong></h1>
     
        {labelValue !== undefined && (
          <div className={styles.value}>
            {labelValueSuffix}
          </div>
        )}
      </div>
    )}
    <LargeNumberSlider {...rest} />
  </div>
);
