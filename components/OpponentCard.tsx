import StoreAPI from "../lib/store";

function OpponentCard({ opponent }: IOpponent | any) {
	const { setOpponent } = StoreAPI.useChatRoom((state) => ({
		setOpponent: state.setOpponent,
	}));
	return (
		<button
			className="flex flex-col w-full bg-transparent p-2 text-justify text-black dark:text-white"
			onClick={() => setOpponent(opponent.nickname)}
		>
			<div className="w-full bg-transparent text-white flex flex-col">
				<div className="flex gap-4 my-auto top-1/2 bottom-auto">
					<div className="overflow-hidden relative w-10 h-10 bg-gray-100 rounded-full dark:bg-gray-600 my-auto top-1/2 bottom-auto">
						<svg
							className="absolute -left-1 w-12 h-12 text-gray-400"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fillRule="evenodd"
								d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
								clipRule="evenodd"
							></path>
						</svg>
					</div>
					<div className="col-start-1 col-end-12 text-black dark:text-white">
						<p>{opponent.nickname}</p>
						<p>
							{opponent.last_chatted_msg.slice(0, 15)}
							{opponent.last_chatted_msg.length > 15 ? "..." : ""}
						</p>
						<p>{opponent.last_chatted_date?.toISOString().slice(0, 10)}</p>
					</div>
				</div>
			</div>
		</button>
	);
}

export default OpponentCard;
