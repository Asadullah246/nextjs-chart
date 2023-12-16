import { PrismicPreview } from "@prismicio/next";
import { NextPageContext } from "next";
import { AppProps } from "next/app";
import Script from "next/script";
import { FC } from "react";

import "intersection-observer";
import "lib/scss/global.scss";

import { Layout } from "src/pageLayout";
import { PagePropsContext } from "src/shared/pageContext";
import { SEO } from "src/shared/seo";
import { ExternalTrackers } from "src/shared/tracking/trackers";
import { TrackNavigation } from "src/shared/tracking/trackNavigation";
import { PageProps } from "src/shared/types";

import { REPOSITORY_NAME } from "lib/prismic/config";

type Props = AppProps<PageProps> & { err: NextPageContext["err"] };

const App: FC<Props> = ({ Component, pageProps, err }) => (
  <PrismicPreview repositoryName={REPOSITORY_NAME}>
    <PagePropsContext.Provider value={pageProps}>
      <Layout>
        <SEO />
        <TrackNavigation />
        <Component {...pageProps} err={err} />
      </Layout>
      <Script id="css-transition-fix" strategy="lazyOnload">
        {`document.body.classList.remove('preload');`}
      </Script>
      {process.env.NEXT_PUBLIC_VERCEL_ENV === "production" && <ExternalTrackers />}
    </PagePropsContext.Provider>
  </PrismicPreview>
);

export default App;
