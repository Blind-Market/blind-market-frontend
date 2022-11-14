import { useRouter } from "next/router";
import React, { useState } from "react";
import axios from "axios";

import { transactionState, TransactionLog } from "../components/TransactionLog";
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
  const [deleteButtonEffect, setDeleteButtonEffect] = useState(false);

  const userInfo: IUserData = contract?.methods.showUserInfo().call((err: any, res: any) => {
    if (err) {
      console.log(err);
      alert("Somthing error is occured! Please try again.");
    }
  });

  const transactionLogs = () => {
    var metadataList: string[] = [];
    var transactionLogs: ITransactionLog[] = [];

    const requestList: IRequest[] = contract?.methods.showTradeInfo().call((err: any, res: any) => {
      if (err) {
        console.log(err);
        alert("Somthing error is occured! Please try again.");
      }
    });

    requestList.map((value: IRequest, index: number) => {
      metadataList.push(contract?.methods.showTokenURI(value.token_id).call((err: any, res: any) => {
        if (err) {
          console.log(err);
          alert("Somthing error is occured! Please try again.");
        }
      }));
    });

    requestList.map((value: IRequest, index: number) => {
      axios.get(metadataList[index])
        .then((res) => {
          transactionLogs.push({
            product_name: res.data.price,
            opponent: value.buyer,
            date: res.data.created_at,
            price: res.data.price,
            type: value.phase,
            status: value.phase,
          });
        })
        .catch((err) => {
          console.log(err);
          alert("Somthing error is occured! Please try again.");
        });
    });
  }

  const data: ITransactionLog = {
    product_name: "Example TransactionLog",
    opponent: "Example Opponent",
    date: "Example Date",
    price: "Example Price",
    type: "Example Type",
    status: 0,
  };
  const data2: ITransactionLog = {
    product_name: "Example TransactionLog",
    opponent: "Example Opponent",
    date: "Example Date",
    price: "Example Price",
    type: "Example Type",
    status: 1,
  };
  const data3: ITransactionLog = {
    product_name: "Example TransactionLog",
    opponent: "Example Opponent",
    date: "Example Date",
    price: "Example Price",
    type: "Example Type",
    status: 2,
  };
  const data4: ITransactionLog = {
    product_name: "Example TransactionLog",
    opponent: "Example Opponent",
    date: "Example Date",
    price: "Example Price",
    type: "Example Type",
    status: 1,
  };
  const data5: ITransactionLog = {
    product_name: "Example TransactionLog",
    opponent: "Example Opponent",
    date: "Example Date",
    price: "Example Price",
    type: "Example Type",
    status: 3,
  };

  return (
    <>
      <div className="bg-white dark:bg-blind_market flex h-full flex-col justify-center items-center w-full">
        <div className="min-h-screen h-full w-full dark:bg-blind_market bg-white">
          <div className="overflow-x-auto relative lg:mx-60 lg:my-8 mx-10 my-4 h-fit">
            <div>
              <h1 className='lg:text-4xl text-2xl mb-5'>User Info</h1>
              <div className='mb-10'>
                <div className='flex items-center mr-auto'>
                  <h1 className='lg:text-xl text-m mr-20'>User Nickname:</h1>
                  <h1 className='lg:text-xl text-m text-bold mr-5'>{userInfo.nickname}</h1>
                </div>
                <div className="flex items-center">
                  <h1 className='lg:text-xl text-m lg:mr-9 mr-11'>User Wallet Address: </h1>
                  <h1 className='lg:text-xl text-m text-bold'>{account}</h1>
                </div>
                <div className="flex items-center">
                  <h1 className='lg:text-xl text-m lg:mr-9 mr-11'>User&apos;s Grade: </h1>
                  <h1 className='lg:text-xl text-m text-bold'>{userInfo.grade} (Point: {userInfo.gradePoint})</h1>
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
                    className="py-3 px-6 dark:bg-blind_market align-middle justify-center text-center items-center"
                  >
                    Date
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
                <TransactionLog transaction={data} />
                <TransactionLog transaction={data2} />
                <TransactionLog transaction={data3} />
                <TransactionLog transaction={data4} />
                <TransactionLog transaction={data5} />
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
                <button
                  onClick={() => {
                    setDeleteButtonEffect(true);
                  }}
                  onAnimationEnd={() => setDeleteButtonEffect(false)}
                  className={`${
                    deleteButtonEffect && "animate-wiggle"
                  } bg-red-500 p-3 text-white rounded hover:bg-red-700 hover:shadow-xl lg:inline-flex lg:w-auto w-full px-3 py-2 font-bold items-center justify-center uppercase`}
                >
                  DELETE
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
