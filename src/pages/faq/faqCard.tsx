import { FC, PropsWithChildren } from "react";

import { Card } from "src/core/card";
import styles from "src/pages/faq/faqCard.module.scss";

export const FAQCard: FC<PropsWithChildren> = ({ children }) => (
  <Card className={styles.card}>{children}</Card>
);
