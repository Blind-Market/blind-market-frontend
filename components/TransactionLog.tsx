import assert from "assert";
import React, { useState } from "react";

export const transactionState = {
  INVALID: 0,
  PENDING: 1,
  SHIPPING: 2,
  DONE: 3,
  CANCELED: 4,
};

const buttonTypeHandler = (status: any): string => {
  switch (status) {
    case transactionState.DONE:
      return "DONE";
    case transactionState.SHIPPING:
      return "SHIPPING";
    case transactionState.PENDING:
      return "PENDING";
    case transactionState.CANCELED:
      return "CANCELED";
    default:
      return "";
  }
};

const TransactionLog = React.memo(function TransactionLog({
  transaction,
}: any) {
  const [checked, setChecked] = useState(false);
  const [buttonEffect, setButtonEffect] = useState(false);
  const [buttonText] = useState(buttonTypeHandler(transaction.status));

  const checkBoxHandler = (e: any) => {
    setChecked(!!!checked);
  };

  return (
    <tr className="h-min">
      <th
        scope="col"
        className="px-6 dark:bg-gray-800 h-min items-center justify-center align-middle text-center"
      >
        <input
          type="checkbox"
          value=""
          className="text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-600 focus:ring-2"
          onChange={checkBoxHandler}
        />
      </th>
      <th
        scope="col"
        className="px-6 dark:bg-gray-800 h-min items-center justify-center align-middle text-center"
      >
        {transaction.product_name}
      </th>
      <th
        scope="col"
        className="px-6 dark:bg-gray-800 h-min items-center justify-center align-middle text-center"
      >
        {transaction.opponent}
      </th>
      <th
        scope="col"
        className="px-6 dark:bg-gray-800 h-min items-center justify-center align-middle text-center"
      >
        {transaction.price}
      </th>
      <th
        scope="col"
        className="px-6 dark:bg-gray-800 h-min items-center justify-center align-middle text-center"
      >
        {transaction.type}
      </th>
      <th
        scope="col"
        className="px-6 dark:bg-gray-800 h-min items-center justify-center align-middle text-center"
      >
        <button
          onClick={() => {
            setButtonEffect(true);
          }}
          onAnimationEnd={() => setButtonEffect(false)}
          className={`${buttonEffect && "animate-wiggle"} ${
            transaction.status == transactionState.CANCELED
              ? "bg-red-500 hover:bg-red-700 hover:shadow-xl"
              : ""
          } ${
            transaction.status == transactionState.SHIPPING
              ? "bg-blue-400 hover:bg-blue-500 hover:shadow-xl"
              : ""
          } ${
            transaction.status == transactionState.PENDING
              ? "bg-yellow-400 hover:bg-yellow-500 hover:shadow-xl"
              : ""
          } ${
            transaction.status == transactionState.DONE
              ? "bg-green-500 hover:bg-green-700 hover:shadow-xl"
              : ""
          } bg-blue-500 text-white rounded hover:bg-blue-700 hover:shadow-xl lg:my-2 lg:inline-flex lg:w-auto w-full px-3 py-2 font-bold items-center justify-center uppercase`}
        >
          {buttonText}
        </button>
      </th>
    </tr>
  );
});

export default React.memo(TransactionLog);
