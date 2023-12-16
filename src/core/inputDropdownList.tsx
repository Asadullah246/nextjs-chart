import React, { useCallback } from "react";
import { DropdownList } from "react-widgets";
import { Filter } from "react-widgets/cjs/Filter";
import { DropdownProps } from "react-widgets/DropdownList";

import styles from "src/core/inputDropdownList.module.scss";
import { useTranslation } from "src/shared/translations";

interface Props {
  label?: string;
}

const normalizeText = (text: string) => {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
};

const InputDropdownList = <T,>(props: DropdownProps<T> & Props) => {
  const { t } = useTranslation();
  const normalizedFilter: Filter<T> = useCallback(
    (item: any, searchTerm: string) => {
      const { textField } = props;
      let itemText: string = "" + item;
      if (textField) {
        itemText = typeof textField === "string" ? item[textField] : textField(item);
      }
      const itemNormalised = normalizeText(itemText);
      const searchTermNormalised = normalizeText(searchTerm);
      return itemNormalised.startsWith(searchTermNormalised);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [props.textField]
  );

  return (
    <div className={styles.input_flex}>
      {props.label && <label>{props.label}</label>}
      <DropdownList
        {...props}
        filter={normalizedFilter}
        messages={{
          emptyFilter: t("inputDropdownList.emptyFilter")
        }}
      />
    </div>
  );
};

export default InputDropdownList;
