import { useRouter } from "next/router";
import React, { useState } from "react";
import TransactionLog from "../components/TransactionLog";
import { useAccount } from "../lib/web3";

const History = React.memo(function History() {
  const [reloadButtonEffect, setReloadButtonEffect] = useState(false);
  const [deleteButtonEffect, setDeleteButtonEffect] = useState(false);
  const account = useAccount();

  const router = useRouter();

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
    <div className="bg-white dark:bg-blind_market flex h-full flex-col justify-center items-center w-full">
      <div className="min-h-screen h-full w-full dark:bg-blind_market bg-white">
        <div className="overflow-x-auto relative lg:mx-60 lg:my-8 mx-10 my-4 h-fit">
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
          <div className="flex gap-4 lg:my-8 lg:mx-10 my-5 mx-5">
            <button
              onClick={() => {
                setReloadButtonEffect(true);
                router.reload();
              }}
              onAnimationEnd={() => setReloadButtonEffect(false)}
              className={`${
                reloadButtonEffect && "animate-wiggle"
              } bg-blue-500 p-3 text-white rounded hover:bg-blue-700 hover:shadow-xl lg:inline-flex lg:w-auto w-full px-3 py-2 font-bold items-center justify-center uppercase lg:my-10`}
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
              } bg-red-500 p-3 text-white rounded hover:bg-red-700 hover:shadow-xl lg:inline-flex lg:w-auto w-full px-3 py-2 font-bold items-center justify-center uppercase lg:my-10`}
            >
              DELETE
            </button>
          </div>
        </div>
      </div>
      <div className="w-full h-1/2 bg-red-300"></div>
    </div>
  );
});

export default History;
