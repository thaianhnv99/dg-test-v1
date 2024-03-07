// import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { datadogRum } from "@datadog/browser-rum";

datadogRum.init({
  applicationId: "83e6fce4-6b66-4d07-a861-79582faea3f8",
  clientToken: "pub5ca13602e5c4a4f4a566ec70d0e0fc27",
  site: "us5.datadoghq.com",
  service: "dg-test0v1",
  env: "<ENV_NAME>",
  // Specify a version number to identify the deployed version of your application in Datadog
  // version: '1.0.0',
  sessionSampleRate: 100,
  sessionReplaySampleRate: 20,
  trackUserInteractions: true,
  trackResources: true,
  trackLongTasks: true,
  defaultPrivacyLevel: "mask-user-input",
});

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
