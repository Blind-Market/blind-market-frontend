import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import Image from "next/image";
import shallow from "zustand/shallow";

import StoreAPI from "../lib/store";
import Web3API from "../lib/web3";

const SubNavbar = React.memo(function SubNavbar() {
  var account = Web3API.useAccount();

  const [drawerStatus, setDrawerStatus] = useState(false);
  const [userButtonEffect, setUserButtonEffect] = useState(false);
  const [createButtonEffect, setCreateButtonEffect] = useState(false);
  const [chatButtonEffect, setChatButtonEffect] = useState(false);
  const [loginButtonEffect, setLoginButtonEffect] = useState(false);
  const [connectWalletButtonEffect, setConnectWalletButtonEffect] = useState(false);

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
  return (
    <nav className="bg-black">
      {drawerStatus ? (
        account ? (
          <div
            id="drawer-swipe"
            className="fixed z-40 h-screen p-4 overflow-y-auto bg-white w-80 dark:bg-gray-800"
            tabIndex={-1}
            aria-labelledby="drawer-label"
          >
            <h5
              id="drawer-label"
              className="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                />
              </svg>
              Menu
            </h5>
            <button
              type="button"
              data-drawer-dismiss="drawer-example"
              aria-controls="drawer-example"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={() => setDrawerStatus(false)}
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Close menu</span>
            </button>
            <div className="grid grid-flow-row gap-8">
              <Link href="/user">
                <button
                  className={`${
                    userButtonEffect && "animate-wiggle"
                  } bg-blue-600 p-3 text-white rounded hover:bg-blue-800 hover:shadow-xl w-full px-3 py-2 font-bold items-center justify-center`}
                  onClick={() => {
                    setUserButtonEffect(true);
                  }}
                  onAnimationEnd={() => setUserButtonEffect(false)}
                >
                  User
                </button>
              </Link>
              <Link href="/chat">
                <button
                  className={`${
                    chatButtonEffect && "animate-wiggle"
                  } bg-blue-600 p-3 text-white rounded hover:bg-blue-800 hover:shadow-xl w-full px-3 py-2 font-bold items-center justify-center`}
                  onClick={() => {
                    setChatButtonEffect(true);
                  }}
                  onAnimationEnd={() => setChatButtonEffect(false)}
                >
                  Chats
                </button>
              </Link>
              <Link href="/write">
                <button
                  className={`${
                    createButtonEffect && "animate-wiggle"
                  } bg-blue-600 p-3 text-white rounded hover:bg-blue-800 hover:shadow-xl w-full px-3 py-2 font-bold items-center justify-center`}
                  onClick={() => {
                    setCreateButtonEffect(true);
                  }}
                  onAnimationEnd={() => setCreateButtonEffect(false)}
                >
                  Create Entry
                </button>
              </Link>
            </div>
          </div>
        ) : (
          <div
            id="drawer-swipe"
            className="fixed z-40 h-screen p-4 overflow-y-auto bg-white w-80 dark:bg-gray-800"
            tabIndex={-1}
            aria-labelledby="drawer-label"
          >
            <h5
              id="drawer-label"
              className="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                />
              </svg>
              Menu
            </h5>
            <button
              type="button"
              data-drawer-dismiss="drawer-example"
              aria-controls="drawer-example"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={() => setDrawerStatus(false)}
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Close menu</span>
            </button>
            <div className="grid grid-flow-row gap-8">
              <button
                type="button"
                data-modal-toggle="crypto-modal"
                className={`${
                  connectWalletButtonEffect && "animate-wiggle"
                } bg-blue-600 text-white rounded hover:bg-blue-800 hover:shadow-xl px-3 py-2 w-full font-bold mt-10`}
                onClick={() => {
                  setConnectWalletButtonEffect(true);
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
                Connect wallet
              </button>
            </div>
          </div>
        )
      ) : (
        <></>
      )}
      <div className="p-3 flex items-center">
        <Link href="/">
          <a className="inline-flex items-center p-2 gap-4">
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
            {innerWidth > 500 ? (
              <span className="text-xl text-white font-bold  tracking-wide ">
                Blind Market
              </span>
            ) : (
              <></>
            )}
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
        </label>
        <div className="right-0 left-auto mr-0 ml-auto">
          <button
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 inline-flex align-middle justify-center items-center"
            type="button"
            data-drawer-target="drawer-right-example"
            data-drawer-show="drawer-right-example"
            data-drawer-placement="right"
            aria-controls="drawer-right-example"
            onClick={() => setDrawerStatus(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
              />
            </svg>
            MENU
          </button>
        </div>
      </div>
    </nav>
  );
});

export default React.memo(SubNavbar);
