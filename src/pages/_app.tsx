import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { HubspotProvider } from 'next-hubspot';

export default function App({ Component, pageProps }: AppProps) {
  return <HubspotProvider><Component {...pageProps} /></HubspotProvider>;
}
