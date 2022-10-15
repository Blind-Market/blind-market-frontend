import { useState } from "react";
import { ITransactionLog, transactionState } from "../pages/history";

const buttonTypeHandler = (status: transactionState): string => {
  switch (status) {
    case transactionState.DONE:
      return "DONE";
    case transactionState.IN_PROGRESS:
      return "IN PROGRESS";
    case transactionState.SHIPPING:
      return "SHIPPING";
    case transactionState.MAKE_DEPOSIT:
      return "MAKE DEPOSIT";
    case transactionState.CANCELED:
      return "CANCELED";
    default:
      return "";
  }
};

function TransactionLog({ transaction }: any) {
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
        {transaction.date}
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
              ? "bg-green-500 hover:bg-green-700 hover:shadow-xl"
              : ""
          } ${
            transaction.status == transactionState.MAKE_DEPOSIT
              ? "bg-yellow-500 hover:bg-yellow-700 hover:shadow-xl"
              : ""
          } ${
            transaction.status == transactionState.IN_PROGRESS
              ? "bg-cyan-500 hover:bg-cyan-700 hover:shadow-xl"
              : ""
          } bg-blue-500 text-white rounded hover:bg-blue-700 hover:shadow-xl lg:my-2 lg:inline-flex lg:w-auto w-full px-3 py-2 font-bold items-center justify-center uppercase`}
        >
          {buttonText}
        </button>
      </th>
    </tr>
  );
}

export default TransactionLog;
