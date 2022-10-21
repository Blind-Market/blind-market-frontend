import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider, useTheme } from "next-themes";
import { QueryClient, QueryClientProvider } from "react-query";
import Layout from "../components/Layout";

const queryClient = new QueryClient();

const MyApp = ({ Component, pageProps }: AppProps) => {
  const { theme, setTheme } = useTheme();

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
            <Component {...pageProps} />
          </Layout>
        </QueryClientProvider>
      </ThemeProvider>
    </>
  );
};

export default MyApp;
