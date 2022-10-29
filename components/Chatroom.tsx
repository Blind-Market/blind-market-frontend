import React from "react";

const Chatroom = React.memo(function Chatroom() {
	return (
		<>
			<div className="block bg-white dark:bg-blind_market mx-auto my-auto shadow-lg border-2 overflow-scroll h-full rounded-xl">
				<div className="py-5 flex justify-between items-center bg-white rounded-xl mx-auto px-5">
					<div className="font-semibold text-2xl text-black">BlindChat</div>
				</div>
				<div className=" bg-white dark:bg-blind_market mx-auto my-auto shadow-lg px-4 overflow-scroll h-full">
					<div className="container bg-white dark:bg-blind_market w-full mx-auto my-auto p-4">
						<div className="w-full grid grid-flow-row gap-4 overflow-scroll">
							<div className="ml-2 py-3 px-4 bg-gray-200  rounded-br-3xl rounded-tr-3xl rounded-tl-3xl rounded-bl-3xl text-black w-fit">
								happy holiday guys!
							</div>
							<div className="mr-2 ml-auto py-3 px-4 bg-blue-500 rounded-br-3xl rounded-tr-3xl rounded-tl-3xl rounded-bl-3xl text-white w-fit">
								happy holiday guys!
							</div>
							<div className="ml-2 py-3 px-4 bg-gray-200 rounded-br-3xl rounded-tr-3xl rounded-tl-3xl rounded-bl-3xl text-black w-fit">
								happy holiday guys!
							</div>
							<div className="mr-2 ml-auto py-3 px-4 bg-blue-500 rounded-br-3xl rounded-tr-3xl rounded-tl-3xl rounded-bl-3xl text-white w-fit">
								happy holiday guys!
							</div>
							<div className="ml-2 py-3 px-4 bg-gray-200 rounded-br-3xl rounded-tr-3xl rounded-tl-3xl rounded-bl-3xl text-black w-fit">
								happy holiday guys!
							</div>
							<div className="mr-2 ml-auto py-3 px-4 bg-blue-500 rounded-br-3xl rounded-tr-3xl rounded-tl-3xl rounded-bl-3xl text-white w-fit">
								happy holiday guys!
							</div>
							<div className="ml-2 py-3 px-4 bg-gray-200 rounded-br-3xl rounded-tr-3xl rounded-tl-3xl rounded-bl-3xl text-black w-fit">
								happy holiday guys!
							</div>
							<div className="mr-2 ml-auto py-3 px-4 bg-blue-500 rounded-br-3xl rounded-tr-3xl rounded-tl-3xl rounded-bl-3xl text-white w-fit">
								happy holiday guys!
							</div>
							<div className="ml-2 py-3 px-4 bg-gray-200 rounded-br-3xl rounded-tr-3xl rounded-tl-3xl rounded-bl-3xl text-black w-fit">
								happy holiday guys!
							</div>
							<div className="mr-2 ml-auto py-3 px-4 bg-blue-500 rounded-br-3xl rounded-tr-3xl rounded-tl-3xl rounded-bl-3xl text-white w-fit">
								happy holiday guys!
							</div>
							<div className="ml-2 py-3 px-4 bg-gray-200 rounded-br-3xl rounded-tr-3xl rounded-tl-3xl rounded-bl-3xl text-black w-fit">
								happy holiday guys!
							</div>
							<div className="mr-2 ml-auto py-3 px-4 bg-blue-500 rounded-br-3xl rounded-tr-3xl rounded-tl-3xl rounded-bl-3xl text-white w-fit">
								happy holiday guys!
							</div>
							<div className="ml-2 py-3 px-4 bg-gray-200 rounded-br-3xl rounded-tr-3xl rounded-tl-3xl rounded-bl-3xl text-black w-fit">
								happy holiday guys!
							</div>
							<div className="mr-2 ml-auto py-3 px-4 bg-blue-500 rounded-br-3xl rounded-tr-3xl rounded-tl-3xl rounded-bl-3xl text-white w-fit">
								happy holiday guys!
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="py-3 px-4 my-auto mx-auto">
				<input
					className="w-full bg-white dark:bg-blind_market py-5 px-3 rounded-xl"
					type="text"
					placeholder="type your message here..."
				/>
			</div>
		</>
	);
});

export default Chatroom;
