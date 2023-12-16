import { SliceComponentProps } from "@prismicio/react";
import React, { FC } from "react";

import styles from "src/pages/whyTrueWealth/assetSelectionSlice.module.scss";
import { GenericSlice } from "src/shared/slices/genericSlice";
import { PrismicGenericSlice } from "src/shared/slices/types";

type Props = SliceComponentProps<PrismicGenericSlice>;

export const AssetSelection: FC<Props> = ({ slice }) => (
  <div className={styles.assetSelection}>
    <GenericSlice slice={slice} />
  </div>
);
