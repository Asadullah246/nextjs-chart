import dynamic from "next/dynamic";
import React, { FC, useEffect, useState } from "react";

import { InputCurrency } from "src/core/inputCurrency";
import { Slider } from "src/core/slider";
import styles from "src/pages/pillar3a/pillar3a-tax-savings/pillar3aTaxSavingForm.module.scss";
import { useMunicipalities } from "src/pages/pillar3a/pillar3a-tax-savings/useMunicipalities";
import { useTranslation } from "src/shared/translations";

import {
  Children,
  CivilStatus,
  Gender,
  Municipality,
  Pillar3aTaxInfo,
  Religion,
  RETIREMENT_AGE
} from "lib/pillar3a/taxSavingDomain";
import { formatCurrency } from "lib/utils";

const InputDropdownList = dynamic(() => import("src/core/inputDropdownList"), { ssr: false });

interface Props {
  value: Pillar3aTaxInfo;
  onChange: (i: Pillar3aTaxInfo) => void;
}

enum ViolationType {
  NUMBER_REQUIRED = "NUMBER_REQUIRED",
  TOO_LOW = "TOO_LOW",
  TOO_BIG = "TOO_BIG"
}

const rangeValidator =
  (fromInclusive: number, toInclusive: number, messages: { [key in ViolationType]: string }) =>
  (n?: number) => {
    if (n === undefined || n === null || isNaN(n)) {
      return [messages.NUMBER_REQUIRED];
    }
    if (n < fromInclusive) {
      return [`${messages.TOO_LOW} ${formatCurrency(fromInclusive)}`];
    }

    if (n > toInclusive) {
      return [`${messages.TOO_BIG} ${formatCurrency(toInclusive)}`];
    }
    return [];
  };

export const Pillar3aTaxSavingForm: FC<Props> = ({ value, onChange }) => {
  const { t } = useTranslation();
  const { data: municipalities = { [value.municipality.bfsId]: value.municipality } } =
    useMunicipalities();
  const sortedMunicipalities = React.useMemo(
    () => sortMunicipalities(municipalities),
    [municipalities]
  );

  const [age, setAge] = useState(value.age);
  useEffect(() => {
    setAge(value.age);
  }, [value.age]);
  const [showAdvancedForm, setShowAdvancedForm] = useState(false);

  const advancedLink = (
    <div className={styles.form_row}>
      <a className={styles.form_link} onClick={() => setShowAdvancedForm((p) => !p)}>
        {showAdvancedForm
          ? t("pillar3aTaxSavingCalculator.form.hideAdvanced")
          : t("pillar3aTaxSavingCalculator.form.showAdvanced")}
      </a>
    </div>
  );

  const confessionData = [
    Religion.OTHER_NONE,
    Religion.PROTESTANT,
    Religion.ROMAN_CATHOLIC,
    Religion.CHRISTIAN_CATHOLIC
  ].map((c) => ({ id: c, label: t(`pillar3aTaxSavingCalculator.form.religion.${c}`) }));

  const civilStatusData = [CivilStatus.SINGLE, CivilStatus.MARRIED].map((c) => ({
    id: c,
    label: t(`pillar3aTaxSavingCalculator.form.civilStatus.${c}`)
  }));

  const childrenData = [Children.WITH, Children.WITHOUT].map((c) => ({
    id: c,
    label: t(`pillar3aTaxSavingCalculator.form.children.${c}`)
  }));

  const genderData = [Gender.MALE, Gender.FEMALE].map((c) => ({
    id: c,
    label: t(`pillar3aTaxSavingCalculator.form.gender.${c}`)
  }));

  const missedYears = [0, 1, 2, 3, 4, 5].map((m) => ({
    id: m,
    label: t(`pillar3aTaxSavingCalculator.form.missedYears.${m}`)
  }));

  const validationMessages = {
    NUMBER_REQUIRED: t("pillar3aTaxSavingCalculator.form.validation.NUMBER_REQUIRED"),
    TOO_LOW: t("pillar3aTaxSavingCalculator.form.validation.TOO_LOW"),
    TOO_BIG: t("pillar3aTaxSavingCalculator.form.validation.TOO_BIG")
  };

  return (
    <div className={styles.form_container}>
      <Slider
        ariaLabelForHandle="Age slider"
        label={t("pillar3aTaxSavingCalculator.form.ageInput")}
        labelValue={age}
        labelValueSuffix={t("pillar3aTaxSavingCalculator.form.ageInputSuffix")}
        min={18}
        max={retirementAge(value.gender)}
        step={1}
        value={age}
        onChange={setAge}
        onChangeComplete={(a) => onChange({ ...value, age: a })}
      />
      <div className={styles.form_row}>
        <InputDropdownList
          label={t("pillar3aTaxSavingCalculator.form.municipalityInput")}
          data={sortedMunicipalities}
          dataKey="bfsId"
          textField="city"
          value={value.municipality}
          onSelect={(m: any) => onChange({ ...value, municipality: municipalities["" + m.bfsId] })}
        />
        {showAdvancedForm && (
          <InputDropdownList
            label={t("pillar3aTaxSavingCalculator.form.genderInput")}
            data={genderData}
            dataKey={"id"}
            textField={"label"}
            value={value.gender}
            onSelect={(v: any) =>
              onChange({
                ...value,
                gender: v.id,
                age: Math.min(age, retirementAge(v.id))
              })
            }
          />
        )}
      </div>
      {!showAdvancedForm && advancedLink}
      {showAdvancedForm && (
        <div className={styles.form_row}>
          <InputDropdownList
            label={t("pillar3aTaxSavingCalculator.form.civilStatusInput")}
            data={civilStatusData}
            dataKey="id"
            textField="label"
            value={value.civilStatus}
            onSelect={(v: any) => onChange({ ...value, civilStatus: v.id })}
          />
          <InputDropdownList
            label={t("pillar3aTaxSavingCalculator.form.childrenInput")}
            data={childrenData}
            dataKey={"id"}
            textField={"label"}
            value={value.children}
            onSelect={(v: any) => onChange({ ...value, children: v.id })}
          />
        </div>
      )}
      {showAdvancedForm && (
        <div className={styles.form_row}>
          <InputDropdownList
            id="religion"
            label={t("pillar3aTaxSavingCalculator.form.religionInput")}
            data={confessionData}
            dataKey={"id"}
            textField={"label"}
            value={value.religion}
            onSelect={(v: any) => onChange({ ...value, religion: v.id })}
          />
          <InputCurrency
            id="taxableIncome"
            label={t("pillar3aTaxSavingCalculator.form.taxableIncomeInput")}
            value={value.taxableIncome}
            onFinalChange={(v) => onChange({ ...value, taxableIncome: v })}
            currency={"CHF"}
            validator={rangeValidator(20_000, 20_000_000, validationMessages)}
          />
        </div>
      )}
      {showAdvancedForm && (
        <div className={styles.form_row}>
          <InputCurrency
            id="pillar3aContribution"
            label={t("pillar3aTaxSavingCalculator.form.pillar3aContributionInput")}
            value={value.pillar3aContribution}
            onFinalChange={(v) => onChange({ ...value, pillar3aContribution: v })}
            currency={"CHF"}
            validator={rangeValidator(1, 35_280, validationMessages)}
          />
          <InputCurrency
            id="pillar3aAssets"
            label={t("pillar3aTaxSavingCalculator.form.current3aAssetsInput")}
            value={value.pillar3aAssets}
            onFinalChange={(v) => onChange({ ...value, pillar3aAssets: v })}
            currency={"CHF"}
            validator={rangeValidator(0, 20_000_000, validationMessages)}
          />
        </div>
      )}
      {showAdvancedForm && (
        <div className={styles.form_row}>
          <InputDropdownList
            label={t("pillar3aTaxSavingCalculator.form.missedYearsInput")}
            data={missedYears}
            dataKey={"id"}
            textField={"label"}
            value={value.missedYears}
            onSelect={(v: any) => onChange({ ...value, missedYears: v.id })}
          />
        </div>
      )}
      {showAdvancedForm && advancedLink}
    </div>
  );
};

const retirementAge = (gender: Gender) => RETIREMENT_AGE[gender] - 1;

const sortMunicipalities = (municipalities: { [key: string]: Municipality }): Municipality[] => {
  return Object.values(municipalities).sort((a: Municipality, b: Municipality) =>
    a.city.localeCompare(b.city)
  );
};
