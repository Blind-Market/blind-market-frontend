import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import shallow from "zustand/shallow";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

import NavButton from "./NavButton";
import StoreAPI from "../lib/store";

function IsEqual(prevProps: any, nextProps: any) {
  return prevProps == nextProps ? true : false;
}

const Navbar = React.memo(function Navbar(account: any) {
  const [connectModalOpen, setConnectModalOpen] = useState(false);
  const [connectWalletButtonEffect, setConnectWalletButtonEffect] = useState(false);

  const BtnArray = useMemo(
    () => ({
      btnArr: [
        ["create entry", "/write"],
        ["chats", "/chat"],
        [<FontAwesomeIcon icon={faUserCircle} size="2x" />, "/user"],
      ],
    }),
    []
  );

  const { theme, setTheme } = useTheme();

  const { innerWidth, innerHeight, setWindowSize } = StoreAPI.useWindowSize(
    (state) => ({
      innerWidth: state.innerWidth,
      innerHeight: state.innerHeight,
      setWindowSize: state.setWindowSize,
    }),
    shallow
  );

  useEffect(() => {
    const { innerWidth, innerHeight } = window;
    setWindowSize(innerWidth, innerHeight);
  }, []);

  console.log("Navbar account: " + account);

  return (
    <>
      <nav className="flex items-center flex-wrap bg-black dark:bg-black p-3 border dark:border-slate-800 border-white">
        {connectModalOpen ? (
          <div className="w-full h-full bg-black"></div>
        ) : (
          <></>
        )}
        <Link href="/">
          <a className="inline-flex items-center p-2 gap-4 ml-10">
            {theme === "light" ? (
              <Image
                src="/blindmarket_symbol_primary.png"
                width={30}
                height={30}
              />
            ) : (
              <Image
                src="/blindmarket_symbol_white.png"
                width={30}
                height={30}
              />
            )}
            <span className="text-xl text-white font-bold  tracking-wide ">
              Blind Market
            </span>
          </a>
        </Link>
        <label
          htmlFor="large-toggle"
          className="inline-flex relative items-center cursor-pointer"
        >
          <input
            type="checkbox"
            value=""
            id="large-toggle"
            className="sr-only peer"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          />
          <div className="w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          {theme === "dark" ? (
            <svg
              className="w-6 h-6 ml-2"
              fill="white"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
            </svg>
          ) : (
            <svg
              className="w-6 h-6 ml-2"
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
          <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span>
        </label>
        <div className={`w-full lg:inline-flex lg:flex-grow lg:w-auto mr-10`}>
          <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start gap-2 flex flex-col lg:h-auto">
            {BtnArray.btnArr.map((value: any, index: number) => (
              <NavButton btnText={value[0]} btnHref={value[1]} key={index} />
            ))}
            {account ? (
              <></>
            ): (
              <button
                type="button"
                data-modal-toggle="crypto-modal"
                className={`${
                  connectWalletButtonEffect && "animate-wiggle"
                } text-white rounded hover:bg-blue-800 hover:shadow-xl lg:inline-flex lg:w-auto w-full h-full font-bold items-center justify-center align-middle cusor-progress`}
                onClick={() => {
                  setConnectWalletButtonEffect(true);
                  setConnectModalOpen(true);
                }}
                onAnimationEnd={() => setConnectWalletButtonEffect(false)}
              >
                {innerWidth > 1280 ? (
                  <svg
                    aria-hidden="true"
                    className="mr-2 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                    ></path>
                  </svg>
                ) : (
                  <></>
                )}
                CONNECT WALLET
              </button>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}, IsEqual);

export default Navbar;
