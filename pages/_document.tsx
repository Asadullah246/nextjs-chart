import { DocumentProps, Head, Html, Main, NextScript } from "next/document";
import { FC } from "react";

const Document: FC<DocumentProps> = () => (
  <Html>
    <Head>
      <meta name="theme-color" content="#f6f1eb" />
      <link rel="icon" href="/meta/favicon.ico" />
      <link rel="icon" type="image/svg+xml" href="/meta/favicon.svg" />
      <link rel="apple-touch-icon" href="/meta/apple-touch-icon-180x180.png" />
      <link rel="manifest" href="/meta/manifest.json" />
      <link
        rel="preload"
        href="/fonts/DINNextLTPro-Regular.woff2"
        as="font"
        type="font/woff2"
        crossOrigin=""
      />
      <link
        rel="preload"
        href="/fonts/DINNextLTPro-Medium.woff2"
        as="font"
        type="font/woff2"
        crossOrigin=""
      />
    </Head>
    <body className="preload">
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;
