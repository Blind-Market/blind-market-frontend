import React, { useEffect, useState } from "react";
import shallow from "zustand/shallow";
import Body from "../components/Body";
import Chatroom from "../components/Chatroom";
import OpponentCard from "../components/OpponentCard";
import StoreAPI from "../lib/store";
import { useAccount } from "../lib/web3";

const Chat = React.memo(function Chat() {
	const account = useAccount();
	const [drawerStatus, setDrawerStatus] = useState(false);
	const { opponentNickname } = StoreAPI.useChatRoom(
		(state) => ({
			opponentNickname: state.OpponentNickname,
		}),
		shallow
	);

	const nickname = "woojlee";

	const { innerWidth, innerHeight, setWindowSize } = StoreAPI.useWindowSize(
		(state) => ({
			innerWidth: state.innerWidth,
			innerHeight: state.innerHeight,
			setWindowSize: state.setWindowSize,
		}),
		shallow
	);

	useEffect(() => {
		function handleWindowResize() {
			const { innerWidth, innerHeight } = window;
			setWindowSize(innerWidth, innerHeight);
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
		<>
			{innerWidth > 860 ? (
				<div className="w-full h-full bg-white dark:bg-blind_market text-center flex">
					<div className="left-0 right-auto h-full w-fit">
						<div
							className="z-50 h-full p-4 overflow-y-auto bg-white w-80 dark:bg-blind_market border-r-2 border-gray-500"
							tabIndex={-1}
						>
							<p className="inline-flex items-center mb-2 text-base font-semibold text-gray-500 dark:text-gray-400">
								{nickname}
							</p>
							<ul className="divide-y divide-gray-200 dark:divide-gray-700">
								{opList.map((value, index) => (
									<OpponentCard opponent={value} key={index} />
								))}
							</ul>
						</div>
					</div>
					<div className="bg-white dark:bg-blind_market w-full h-1/2 mx-auto p-4">
						<Chatroom />
					</div>
				</div>
			) : (
				<div className="w-full h-full bg-white dark:bg-blind_market text-center grid grid-flow-col grid-cols-12">
					<div className="left-0 right-auto h-full w-fit col-start-1 col-end-1">
						{drawerStatus ? (
							<div
								className="z-50 h-full p-4 overflow-y-auto bg-white w-80 dark:bg-gray-800 absolute"
								tabIndex={-1}
							>
								<button
									type="button"
									className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
									onClick={() => setDrawerStatus(false)}
								>
									<svg
										className="w-5 h-5"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fillRule="evenodd"
											d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
											clipRule="evenodd"
										></path>
									</svg>
									<span className="sr-only">Close menu</span>
								</button>
								<p className="inline-flex items-center mb-2 text-base font-semibold text-gray-500 dark:text-gray-400">
									{nickname}
								</p>
								<ul className="divide-y divide-gray-200 dark:divide-gray-700">
									{opList.map((value, index) => (
										<OpponentCard opponent={value} key={index} />
									))}
								</ul>
							</div>
						) : (
							<></>
						)}
						<div
							className=" bg-white dark:bg-blind_market w-6 h-full justify-center align-middle items-center content-center z-40 border-r-2 border-r-slate-400 dark:border-r-black cursor-pointer"
							onClick={() => setDrawerStatus(!!!drawerStatus)}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth="1.5"
								stroke="currentColor"
								className="w-6 h-6 mx-auto my-auto top-1/2 bottom-auto fixed cursor-pointer"
								onClick={() => setDrawerStatus(!!!drawerStatus)}
								type="button"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M8.25 4.5l7.5 7.5-7.5 7.5"
								/>
							</svg>
						</div>
					</div>
					<div className="bg-white dark:bg-blind_market w-full h-full min-h-screen col-start-2 col-end-13">
						<div className="container bg-white dark:bg-blind_market mx-auto my-auto shadow-lg border-2">
							<div className="px-5 py-5 flex justify-between items-center bg-white border-b-2">
								<div className="font-semibold text-2xl text-black">
									BlindChat
								</div>
							</div>
							<div className="container bg-white dark:bg-blind_market w-full h-full mx-auto my-auto p-4 min-h-full">
								<div className="w-full h-full grid grid-flow-row gap-4">
									<div className="ml-2 py-3 px-4 bg-white rounded-br-3xl rounded-tr-3xl rounded-tl-3xl rounded-bl-3xl text-black w-fit">
										happy holiday guys!
									</div>
									<div className="mr-2 ml-auto py-3 px-4 bg-blue-500 rounded-br-3xl rounded-tr-3xl rounded-tl-3xl rounded-bl-3xl text-white w-fit">
										happy holiday guys!
									</div>
									<div className="ml-2 py-3 px-4 bg-white rounded-br-3xl rounded-tr-3xl rounded-tl-3xl rounded-bl-3xl text-black w-fit">
										happy holiday guys!
									</div>
									<div className="mr-2 ml-auto py-3 px-4 bg-blue-500 rounded-br-3xl rounded-tr-3xl rounded-tl-3xl rounded-bl-3xl text-white w-fit">
										happy holiday guys!
									</div>
									<div className="py-5">
										<input
											className="w-full bg-white dark:bg-blind_market py-5 px-3 rounded-xl"
											type="text"
											placeholder="type your message here..."
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
});

export default Chat;
