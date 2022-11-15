import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import axios from "axios";

import TransactionLog from "../components/TransactionLog";
import SubmitModal from '../components/SubmitModal';

import Web3API from "../lib/web3";
import StoreAPI from '../lib/store';
import { request } from 'https';

enum ModalType {
  CancelModal,
  SubmitModal,
}

const User = React.memo(function User() {
  const account = Web3API.useAccount();
  const { web3, contract } = Web3API.useWeb3();
  const router = useRouter();

  const [reloadButtonEffect, setReloadButtonEffect] = useState(false);

  const gradeName = ['INVALID', 'NOOB', 'ROOKIE', 'MEMBER', 'BRONZE', 'SILVER', 'GLOD', 'PLATINUM', 'DIAMOND'];

  const [gradePoint, setGradePoint] = useState(0);
  const [grade, setGrade] = useState(0);
  const [nickname, setNickname] = useState("");
  const [transactionLogs, setTransactionLogs] = useState<ITransactionLog[]>([]);

  if (account) {
    contract?.methods.isApprovedForAll(account, `${process.env.NEXT_PUBLIC_CONTRACT_ADDRESS}`).call((err: any, res: any) => {
      if (err)
        console.log(err);
      else if (res == false)
        router.push('/');
      else {
        // get user data
        contract?.methods.showUserInfo().call({ from: account }, (err: any, res: any) => {
          if (err) {
            console.log("showUserInfo(): " + err);
            alert("Somthing error is occured!\nPlease try again.");
          }
          else {
            setGradePoint(res.gradePoint);
            setGrade(res.grade);
            setNickname(res.nickname);
          }
        });
      }
    });
  }

  // get transaction logs using smart contract
  const getTransactionLogs = () => {
    var Logs: ITransactionLog[] = [];

    const requestList: IRequest[] = contract?.methods.showTradeLog().call({ from: account }, (err: any, res: any) => {
      if (err) {
        console.log("showTradeLog(): " + err);
        return [];
      } else {
        return res;
      }
    });

    if (requestList !== undefined) {
      requestList.map((value: IRequest, index: number) => {
        const metadataURI = contract?.methods.showTokenURI(value.token_id).call((err: any, res: any) => {
          if (err) {
            console.log("showTokenURI: " + err);
            alert("Somthing error is occured! Please try again.");
          }
          return res;
        });
  
        axios.get(metadataURI)
          .then((res) => {
            const type = account == res.data.sellerAddress ? "Sell" : "Buy";
            const oppnent = type == "Sell" ? res.data.buyer : res.data.seller;
            
            Logs.push({
              product_name: res.data.price,
              opponent: oppnent,
              price: res.data.price,
              type: type,
              status: value.phase,
            });
          })
          .catch((err) => {
            console.log("get metadataURI:" + err);
            alert("Somthing error is occured! Please try again.");
          });
      });
    }

    return setTransactionLogs(Logs);
  }

  useEffect(() => {
    getTransactionLogs();
  }, []);

  return (
    <>
      <div className="bg-white dark:bg-blind_market flex h-full flex-col justify-center items-center w-full">
        <div className="min-h-screen h-full w-full dark:bg-blind_market bg-white">
          <div className="overflow-x-auto relative lg:mx-60 lg:my-8 mx-10 my-4 h-fit">
            <div>
              <h1 className='lg:text-4xl text-2xl mb-5'>User Info</h1>
              <div className='mb-10'>
                <div className='flex items-center mr-auto'>
                  <h1 className='lg:text-xl text-m mr-20'>Nickname:</h1>
                  <h1 className='lg:text-xl text-m text-bold mr-5'>{nickname}</h1>
                </div>
                <div className="flex items-center">
                  <h1 className='lg:text-xl text-m lg:mr-9 mr-11'>Wallet Address: </h1>
                  <h1 className='lg:text-xl text-m text-bold'>{account}</h1>
                </div>
                <div className="flex items-center">
                  <h1 className='lg:text-xl text-m lg:mr-28 mr-24'>Grade: </h1>
                  <h1 className='lg:text-xl lg:ml-1 ml-3 text-m text-bold'>{gradeName[grade]} (Point: {gradePoint})</h1>
                </div>
              </div>
            </div>
            <h1 className='lg:text-4xl text-2xl mb-5'>History</h1>
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 border h-min">
              <thead className="text-xs text-gray-500 uppercase border">
                <tr>
                  <th
                    scope="col"
                    className="py-3 px-6 dark:bg-blind_market h-min align-middle justify-center text-center items-center"
                  >
                    Select
                  </th>
                  <th
                    scope="col"
                    className="py-3 px-6 dark:bg-blind_market h-min align-middle justify-center text-center items-center"
                  >
                    Product name
                  </th>
                  <th
                    scope="col"
                    className="py-3 px-6 align-middle justify-center text-center items-center"
                  >
                    Opponent
                  </th>
                  <th
                    scope="col"
                    className="py-3 px-6 align-middle justify-center text-center items-center"
                  >
                    Price
                  </th>
                  <th
                    scope="col"
                    className="py-3 px-6 dark:bg-blind_market align-middle justify-center text-center items-center"
                  >
                    TYPE
                  </th>
                  <th
                    scope="col"
                    className="py-3 px-6 dark:bg-blind_market align-middle justify-center text-center items-center"
                  >
                    status
                  </th>
                </tr>
              </thead>
              <tbody>
                {transactionLogs.map((value: any, index: number) => (<TransactionLog transaction={value} key={index} />))}
              </tbody>
            </table>
            <div className='flex items-center'>
              <div className="flex gap-4 ml-auto lg:my-10 my-5">
                <button
                  onClick={() => {
                    setReloadButtonEffect(true);
                    router.reload();
                  }}
                  onAnimationEnd={() => setReloadButtonEffect(false)}
                  className={`${
                    reloadButtonEffect && "animate-wiggle"
                  } bg-blue-500 p-3 text-white rounded hover:bg-blue-700 hover:shadow-xl lg:inline-flex lg:w-auto w-full px-3 py-2 font-bold items-center justify-center uppercase`}
                >
                  Reload
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-1/2 bg-red-300"></div>
      </div>
    </>
  );
});

export default React.memo(User);
