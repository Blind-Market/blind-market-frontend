import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider, useTheme } from "next-themes";
import { QueryClient, QueryClientProvider } from "react-query";
import Layout from "../components/Layout";
import React, { useMemo } from "react";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      suspense: true,
    },
  },
});

const MyApp = ({ Component, pageProps }: AppProps) => {
  const props = useMemo(
    () => ({
      props: pageProps,
    }),
    []
  );
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Blind Market</title>
      </Head>
      {/* tailwind css hamburger menu */}
      <ThemeProvider attribute="class">
        <QueryClientProvider client={queryClient}>
          <Layout>
            <Component {...props} />
          </Layout>
        </QueryClientProvider>
      </ThemeProvider>
    </>
  );
};

export default MyApp;
