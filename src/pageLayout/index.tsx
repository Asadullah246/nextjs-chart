import { FC, PropsWithChildren } from "react";

import { Footer } from "src/pageLayout/footer";
import { Header } from "src/pageLayout/header";
import styles from "src/pageLayout/index.module.scss";
import { Navigation } from "src/pageLayout/navigation";
import CompoundInterest from "src/pages/compoundInterestCalculator/compoundInterest";

export const Layout: FC<PropsWithChildren> = ({ children }) => (
  <div className={styles.container}>
    <Navigation />
    <Header />
    <section className="max-w-7xl mx-auto">
    <CompoundInterest />
    </section>
    <main className={styles.content}>{children}</main>
    <Footer />
  </div>
);