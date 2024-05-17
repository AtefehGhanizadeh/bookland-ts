import AppChakraProvider from "@/src/providers/AppChakraProvider";
import AppQueryClientProvider from "@/src/providers/AppQueryClientProvider";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }:AppProps) {
 return (
  <AppQueryClientProvider>
   <AppChakraProvider>
    <Component {...pageProps} />
   </AppChakraProvider>
  </AppQueryClientProvider>
 );
}