import { useEffect, useState } from "react";
import { Contract } from "web3-eth-contract";
import { AbiItem } from "web3-utils";
import Web3 from "web3";

// import { BlindMarketABI } from '../contracts/abi/BLIND';
import { BlindABI } from '../contracts/abi/blind';

/**
 * Get the currently connected account wallet address from Metamask
 * 
 * @returns {string} - the currently connected account wallet address
 */
const useAccount = () => {
  const [account, setAccount] = useState<string>("");

  const getAccount = async () => {
    try {
      if (!window.ethereum) throw new Error("Error : No Metamask");
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      // check the crruent network Id that is mumbai network or not
      if (window.ethereum.networkId !== 80001) {
        await window.ethereum.request({
          method: "wallet_switchEthereumChain",
          params: [
            {
              chainId: Web3.utils.toHex(80001)
            }
          ]
        })
      }

      if (accounts && Array.isArray(accounts))
        setAccount(accounts[0]);

    } catch (err) {
      console.log(err);
      setAccount("");
      // This error code indicates that the chain has not been added to MetaMask
      if (err.code == 4902) {
        await window.ethereum.request({
          method: "wallet_addEthereumChain",
          params: [
            {
              chainId: Web3.utils.toHex(80001),
              chianName: "Polygon Mumbai Testnet",
              nativeCurrency: {
                name: "MATIC",
                symbol: "MATIC",
                decimels: 18,
              },
              rpcUrls: ["https://rpc-membai.maticvigil.com"],
              blockExplorerUrls: ["https://polygonscan.com"]
            }
          ]
        });
      }
    }
  };

  useEffect(() => {
    getAccount();
  }, []);

  return account;
};

/**
 * Get the functions that call smart contract methods
 * 
 * @param {void}
 * 
 * @typedef {Object} FunctionObject
 * @property {function(void): void} getWeb3
 * @property {function(number): void} getContract
 * 
 * @returns {FunctionObject} - FunctionObject object that call smart contract methods
 */
const useWeb3 = () => {
  const [web3, setWeb3] = useState<Web3 | undefined>(undefined);
  const [contract, setContract] = useState<Contract>();

  /**
   * Set the web3 object connected
   * 
   * @param {void}
   * @returns {void}
   */
  const getWeb3 = async () => {
    try {
      if (window.ethereum) {
        setWeb3(new Web3(window.ethereum as any));
      }
    } catch (e) {
      console.log(e);
    }
  };

  /**
   * Get the smart contract to use and set the smart contract instance
   * 
   * @param {void}
   * @returns {void}
   */
  const getContract = () => {
    if (!web3) return;

    const abi: AbiItem = JSON.parse(JSON.stringify(BlindABI));
    const ca: string = `${process.env.NEXT_PUBLIC_CONTRACT_ADDRESS}`;
    const instance = new web3.eth.Contract(abi, ca);
    setContract(instance);
  };

  useEffect(() => {
    if (!web3) getWeb3();
    else {
      (async () => {getContract();})();
    }
  }, [web3]);

  return { web3, contract };
};

const Web3API = {
  useAccount,
  useWeb3,
};

export default Web3API;