import { SliceComponentProps } from "@prismicio/react";
import React, { FC } from "react";

import styles from "src/pages/sustainableInvestment/ourMethodSlice.module.scss";
import { GenericSlice } from "src/shared/slices/genericSlice";
import { PrismicGenericSlice } from "src/shared/slices/types";

type Props = SliceComponentProps<PrismicGenericSlice>;

export const OurMethodSlice: FC<Props> = (props) => (
  <div className={styles.ourMethod}>
    <GenericSlice slice={props.slice} />
  </div>
);
