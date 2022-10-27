import type { NextPage } from "next";
import Image from "next/image";
import { useEffect, useState } from "react";
import Body from "../components/Body";
import { useAccount } from "../lib/web3";

const Home: NextPage = () => {
  var account = useAccount();
  const [connectWalletButtonEffect, setConnectWalletButtonEffect] =
    useState(false);
  const [windowSize, setWindowSize] = useState<any>(0);

  useEffect(() => {
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

  async function connectWallet(): Promise<void> {
    //to get around type checking
    (window as any).ethereum
      .request({
        method: "eth_requestAccounts",
      })
      .then((accounts: string[]) => {
        account = accounts[0];
      })
      .catch((error: any) => {
        console.log(error);
      });
  }

  return (
    <div className="bg-white dark:bg-blind_market flex h-full flex-col justify-center items-center">
      {account ? (
        <Body />
      ) : (
        <div className="bg-white dark:bg-blind_market w-full justify-center items-center align-middle flex-col flex">
          <h1 className="lg:text-4xl text-xl my-5 text-black dark:text-white font-bold">
            Get start with connect your wallet!
          </h1>
          <Image src="/metamask-icon.png" width="100px" height="100px" />
          <button
            type="button"
            data-modal-toggle="crypto-modal"
            className={`${
              connectWalletButtonEffect && "animate-wiggle"
            } bg-blue-600 p-3 text-white rounded hover:bg-blue-800 hover:shadow-xl lg:inline-flex lg:w-auto w-fit px-3 py-2 font-bold items-center justify-center align-middle my-5`}
            onClick={() => {
              setConnectWalletButtonEffect(true);
              connectWallet();
            }}
            onAnimationEnd={() => setConnectWalletButtonEffect(false)}
          >
            {windowSize > 760 ? (
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
      )}
    </div>
  );
};

export default Home;
