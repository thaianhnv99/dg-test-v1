/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-sync-scripts */
import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <Script
        // strategy="afterInteractive"
        src="https://cdn.jsdelivr.net/npm/copy-to-clipboard@3.3.3/index.min.js"
      />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
