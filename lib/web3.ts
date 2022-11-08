import { useEffect, useState } from "react";
import { Contract } from "web3-eth-contract";
import { AbiItem } from "web3-utils";
import Web3 from "web3";

import { BlindMarketABI } from '../contracts/abi/BLIND';

/**
 * Get the currently connected account wallet address from Metamask
 * 
 * @returns {string} - the currently connected account wallet address
 */
const useAccount = () => {
  const [account, setAccount] = useState("");

  const getAccount = async () => {
    try {
      if (!window.ethereum) throw new Error("Error : No Metamask");
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      if (accounts && Array.isArray(accounts)) {
        setAccount(accounts[0]);
      }
    } catch (err) {
      console.log(err);
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
   * @param {number} networkId 
   *          The blockchain network id to use
   * @returns {void}
   */
  const getContract = (networkId: number) => {
    if (!web3) return;
    const contractJSON = JSON.parse(JSON.stringify(BlindMarketABI));
    const abi: AbiItem = contractJSON.abi;
    const ca: string = contractJSON.networks[networkId].address;
    const instance = new web3.eth.Contract(abi, ca);
    setContract(instance);
  };

  useEffect(() => {
    if (!web3) getWeb3();
    else {
      (async () => {
        const networkId: number = await web3.eth.net.getId();
        getContract(networkId);
      })();
    }
  }, [web3]);

  return { web3, contract };
};

const Web3API = {
  useAccount,
  useWeb3,
};

export default Web3API;