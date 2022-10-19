import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider, useTheme } from "next-themes";
import { QueryClient, QueryClientProvider } from "react-query";
import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Layout from "../components/Layout";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
	const [isOpen, setIsOpen] = useState(true);
	const toggleSidebar = () => setIsOpen(!isOpen);
	const [isMounted, setIsMounted] = useState(false);
	const { theme, setTheme } = useTheme();

	useEffect(() => {
		setTimeout(() => {
			setIsMounted(true);
		}, 2000);
	}, []);
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
}

export default MyApp;
