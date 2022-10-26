import { useEffect, useState } from "react";
import Body from "../components/Body";
import OpponentCard from "../components/OpponentCard";
import { useAccount } from "../lib/web3";

export default function Chat() {
  const account = useAccount();
  const [windowSize, setWindowSize] = useState<any>(0);
  const nickname = "woojlee";

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

  const opponent1: IOpponent = {
    nickname: "junsoh",
    last_chatted_date: new Date("2021-02-01"),
    last_chatted_msg: "이우진 병장님 근무나가실 시간입니다.",
  };
  const opponent2: IOpponent = {
    nickname: "mingkim",
    last_chatted_date: new Date("2022-10-11"),
    last_chatted_msg: "이우진 병장님 근무나가실 시간입니다.",
  };
  const opponent3: IOpponent = {
    nickname: "bolee",
    last_chatted_date: new Date("2022-08-19"),
    last_chatted_msg: "이우진 병장님 근무나가실 시간입니다.",
  };

  var opList = [opponent1, opponent2, opponent3];

  return (
    <div className="block mx-auto bg-white dark:bg-blind_market w-full h-full">
      <div className="bg-white dark:bg-blind_market grid grid-flow-col grid-cols-4 h-full">
        <div className="bg-white dark:bg-blind_market text-black dark:text-white border border-gray-100 dark:border-gray-800 col-span-1">
          <div className="border block justify-center items-center text-center border-gray-100 dark:border-gray-800">
            <p className="my-4 font-semibold">{nickname}</p>
          </div>
          <ul className="divide-y divide-gray-200 dark:divide-gray-700">
            {opList.map((value, index) => (
              <OpponentCard opponent={value} key={index} />
            ))}
          </ul>
        </div>
        <div className="bg-white dark:bg-blind_market text-black dark:text-white col-start-2 col-end-12">
          <div className="bg-black dark:bg-white w-full text-white dark:text-black h-full grid grid-rows-4">
            <div className="bg-lime-200">pp</div>
            <div className="bg-lime-400">pp</div>
            <div className="bg-lime-600">pp</div>
            <div className="bg-lime-800">pp</div>
          </div>
        </div>
      </div>
    </div>
  );
}
