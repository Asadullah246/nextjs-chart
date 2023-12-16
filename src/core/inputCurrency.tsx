import classNames from "classnames";
import { FC, KeyboardEvent, ReactNode, useState } from "react";

import styles from "src/core/inputCurrency.module.scss";

type NumberValidator = (val?: number) => string[];

interface Props {
  id: string;
  value: number;
  onChange?: (val: number) => void;
  onFinalChange?: (val: number) => void;
  label: ReactNode;
  currency: string;
  min?: number;
  validator?: NumberValidator;
}

const blurOnEnter = (e: KeyboardEvent<HTMLInputElement>) => {
  if (e.key === "Enter") {
    const target = e.target as HTMLInputElement;
    target.blur();
  }
};

export const InputCurrency: FC<Props> = ({
  id,
  value,
  onChange,
  onFinalChange,
  label,
  currency,
  min,
  validator = () => []
}) => {
  const [validations, setValidations] = useState<string[]>([]);

  const validate = (v?: number) => {
    const violations = validator(v);
    setValidations(violations);
    return violations;
  };

  const parseNumber = (e: { target: HTMLInputElement }) => {
    const targetValue = parseInt(e.target.value, 10);
    const parsedNumber = isNaN(targetValue) ? undefined : targetValue;
    const violations = validate(parsedNumber);
    return { parsedNumber, violations };
  };

  const handleChange = (e: { target: HTMLInputElement }) => {
    const { parsedNumber, violations } = parseNumber(e);
    if (parsedNumber !== undefined && violations.length === 0) {
      onChange?.(parsedNumber);
    }
  };

  const handleBlur = (e: { target: HTMLInputElement }) => {
    const { parsedNumber, violations } = parseNumber(e);
    if (parsedNumber !== undefined && violations.length === 0) {
      onFinalChange?.(parsedNumber);
      return;
    }
    e.target.value = "" + value;
    setValidations([]);
  };

  return (
    <div style={{ width: "100%" }}>
      <label htmlFor={id}>{label}</label>
      <div className={classNames(styles.inputWrapper)}>
        <input
          id={id}
          type="number"
          defaultValue={value}
          onChange={handleChange}
          onBlur={handleBlur}
          onKeyDown={blurOnEnter}
          min={min}
          className={classNames({ invalid: validations.length > 0 })}
        />
        <strong>{currency}</strong>
      </div>
      {validations.map((v, i) => (
        <p key={i} className={styles.validationMessage}>
          {v}
        </p>
      ))}
    </div>
  );
};
