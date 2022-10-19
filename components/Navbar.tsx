import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

export const Navbar = () => {
	const [active, setActive] = useState(false);
	const [historyButtonEffect, setHistoryButtonEffect] = useState(false);
	const [createButtonEffect, setCreateButtonEffect] = useState(false);
	const [chatButtonEffect, setChatButtonEffect] = useState(false);
	const [loginButtonEffect, setLoginButtonEffect] = useState(false);
	const [createEntryState, setCreateEntryState] = useState(false);
	const [mounted, setMounted] = useState(false);
	const [windowSize, setWindowSize] = useState<any>(0);
	const { theme, setTheme } = useTheme();

	useEffect(() => {
		if (!theme) setTheme("dark");
		setMounted(true);
		function getWindowSize() {
			const { innerWidth, innerHeight } = window;
			return innerWidth;
		}
		function handleWindowResize() {
			setWindowSize(getWindowSize());
		}
		window.addEventListener("resize", handleWindowResize);
		handleWindowResize();
		return () => {
			window.removeEventListener("resize", handleWindowResize);
		};
	}, []);

	return (
		<>
			<nav className="flex items-center flex-wrap bg-black dark:bg-black p-3 border dark:border-slate-800 border-white">
				<Link href="/">
					<a className="inline-flex items-center p-2 gap-4">
						{theme === "light" ? (
							<Image
								src="/../public/blindmarket_symbol_primary.png"
								width={30}
								height={30}
							/>
						) : (
							<Image
								src="/../public/blindmarket_symbol_white.png"
								width={30}
								height={30}
							/>
						)}
						<span className="text-xl text-white font-bold  tracking-wide ">
							Blind Market
						</span>
					</a>
				</Link>
				<div className={`w-full lg:inline-flex lg:flex-grow lg:w-auto`}>
					<div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start gap-2 flex flex-col lg:h-auto">
						{windowSize > 768 ? (
							<div
								className="relative mr-3 md:mr-7 dark:bg-black bg-black"
								onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
							>
								{theme === "light" ? (
									<svg
										className="w-6 h-6"
										fill="white"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
									</svg>
								) : (
									<svg
										className="w-6 h-6"
										fill="white"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fillRule="evenodd"
											d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
											clipRule="evenodd"
										></path>
									</svg>
								)}
							</div>
						) : (
							<></>
						)}
						<Link href="/write">
							<button
								className={`${
									createButtonEffect && "animate-wiggle"
								} bg-blue-600 p-3 text-white rounded hover:bg-blue-800 hover:shadow-xl lg:inline-flex lg:w-auto w-full px-3 py-2 font-bold items-center justify-center`}
								onClick={() => {
									setCreateButtonEffect(true);
									setCreateEntryState(true);
								}}
								onAnimationEnd={() => setCreateButtonEffect(false)}
							>
								Create Entry
							</button>
						</Link>
						<Link href="/history">
							<button
								className={`${
									historyButtonEffect && "animate-wiggle"
								} bg-blue-600 p-3 text-white rounded hover:bg-blue-800 hover:shadow-xl lg:inline-flex lg:w-auto w-full px-3 py-2 font-bold items-center justify-center`}
								onClick={() => {
									setHistoryButtonEffect(true);
								}}
								onAnimationEnd={() => setHistoryButtonEffect(false)}
							>
								History
							</button>
						</Link>
						<Link href="/chat">
							<button
								className={`${
									chatButtonEffect && "animate-wiggle"
								} bg-blue-600 p-3 text-white rounded hover:bg-blue-800 hover:shadow-xl lg:inline-flex lg:w-auto w-full px-3 py-2 font-bold items-center justify-center`}
								onClick={() => {
									setChatButtonEffect(true);
								}}
								onAnimationEnd={() => setChatButtonEffect(false)}
							>
								Chats
							</button>
						</Link>
						<button
							onClick={() => {
								setLoginButtonEffect(true);
								alert("Hello!");
							}}
							onAnimationEnd={() => setLoginButtonEffect(false)}
							className={`${
								loginButtonEffect && "animate-wiggle"
							} bg-blue-600 p-3 text-white rounded hover:bg-blue-800 hover:shadow-xl lg:inline-flex lg:w-auto w-full px-3 py-2 font-bold items-center justify-center`}
						>
							Login
						</button>
					</div>
				</div>
			</nav>
		</>
	);
};
