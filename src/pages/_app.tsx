import Layout from "@/components/layout/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { CustomContextProvider } from "@/context/ShoppingCard";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <CustomContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CustomContextProvider>
  );
}
