import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import Body from "../components/Body";
import { useAccount } from "../lib/web3";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const account = useAccount();
  const [connectWalletButtonEffect, setConnectWalletButtonEffect] =
    useState(false);

  useEffect(() => {}, [account]);

  return (
    <div className="bg-blue-500 flex h-full flex-col justify-center items-center">
      {account ? (
        <Body />
      ) : (
        <button
          type="button"
          data-modal-toggle="crypto-modal"
          className={`${
            connectWalletButtonEffect && "animate-wiggle"
          } bg-blue-600 p-3 text-white rounded hover:bg-blue-800 hover:shadow-xl lg:inline-flex lg:w-auto w-full px-3 py-2 font-bold items-center justify-center align-middle`}
          onClick={() => {
            setConnectWalletButtonEffect(true);
          }}
          onAnimationEnd={() => setConnectWalletButtonEffect(false)}
        >
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
          Connect wallet
        </button>
      )}
    </div>
  );
};

export default Home;
