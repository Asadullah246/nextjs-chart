import { PrismicRichText } from "@prismicio/react";
import { FC } from "react";

import styles from "src/pages/generic/textBlock.module.scss";

import { htmlSerializer } from "lib/prismic/htmlSerializer";
import { PagesDocumentDataBodyTextBlockSlice } from "lib/types.generated";

interface Props {
  slice: PagesDocumentDataBodyTextBlockSlice;
}

export const TextBlock: FC<Props> = ({
  slice: {
    primary: { heading },
    items
  }
}) => (
  <div className={styles.block}>
    <PrismicRichText field={heading} components={htmlSerializer} />
    {items.map(({ content }, i) => (
      <PrismicRichText field={content} components={htmlSerializer} key={i} />
    ))}
  </div>
);
