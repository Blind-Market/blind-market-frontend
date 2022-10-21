import { useEffect, useState } from "react";
import { Contract } from "web3-eth-contract";
import { AbiItem } from "web3-utils";
import Web3 from "web3";
import { log } from "console";

// const useWeb3 = () => {
//   const [web3, setWeb3] = useState<Web3 | undefined>(undefined);
//   const [contract, setContract] = useState<Contract>();

//   const getWeb3 = async () => {
//     try {
//       if (window.ethereum) {
//         setWeb3(new Web3(window.ethereum as any));
//       }
//     } catch (e) {
//       console.log(e);
//     }
//   };
//   const getContract = (networkId: number) => {
//     if (!web3) return;
//     const contractJSON = require("컨트랙트 json 경로");
//     const abi: AbiItem = contractJSON.abi;
//     const ca: string = contractJSON.networks[networkId].address;
//     const instance = new web3.eth.Contract(abi, ca);
//     setContract(instance);
//   };

//   useEffect(() => {
//     if (!web3) getWeb3();
//     else {
//       (async () => {
//         const networkId: number = await web3.eth.net.getId();
//         getContract(networkId);
//       })();
//     }
//   }, [web3]);

//   return { web3, contract };
// };

export const useAccount = () => {
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
