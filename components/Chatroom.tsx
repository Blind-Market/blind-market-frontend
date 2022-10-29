import React from "react";

const Chatroom = React.memo(function Chatroom() {
  return (
    <>
      <div className=" bg-white dark:bg-blind_market mx-auto my-auto shadow-lg h-full max-w-screen-lg">
        <div className="py-5 flex justify-between items-center bg-white mx-auto px-5">
          <div className="font-semibold text-2xl text-black">BlindChat</div>
        </div>
        <div className=" bg-white dark:bg-blind_market mx-auto my-auto shadow-lg h-full w-full overflow-scroll border-2 rounded-bl-xl rounded-br-xl">
          <div className="mx-4 my-4 gap-4">
            <div className="ml-2 py-3 px-4 bg-gray-200 rounded-br-3xl rounded-tr-3xl rounded-tl-3xl rounded-bl-3xl text-black w-fit my-4">
              happy holiday guys!
            </div>
            <div className="mr-2 ml-auto col-end-auto py-3 px-4 bg-blue-500 rounded-br-3xl rounded-tr-3xl rounded-tl-3xl rounded-bl-3xl text-white w-fit my-4">
              happy holiday guys!
            </div>
            <div className="ml-2 py-3 px-4 bg-gray-200 rounded-br-3xl rounded-tr-3xl rounded-tl-3xl rounded-bl-3xl text-black w-fit my-4">
              happy holiday guys!
            </div>
            <div className="mr-2 ml-auto py-3 px-4 bg-blue-500 rounded-br-3xl rounded-tr-3xl rounded-tl-3xl rounded-bl-3xl text-white w-fit my-4">
              happy holiday guys!
            </div>
            <div className="ml-2 py-3 px-4 bg-gray-200 rounded-br-3xl rounded-tr-3xl rounded-tl-3xl rounded-bl-3xl text-black w-fit my-4">
              happy holiday guys!
            </div>
            <div className="mr-2 ml-auto py-3 px-4 bg-blue-500 rounded-br-3xl rounded-tr-3xl rounded-tl-3xl rounded-bl-3xl text-white w-fit my-4">
              happy holiday guys!
            </div>
            <div className="ml-2 py-3 px-4 bg-gray-200 rounded-br-3xl rounded-tr-3xl rounded-tl-3xl rounded-bl-3xl text-black w-fit my-4">
              happy holiday guys!
            </div>
            <div className="mr-2 ml-auto py-3 px-4 bg-blue-500 rounded-br-3xl rounded-tr-3xl rounded-tl-3xl rounded-bl-3xl text-white w-fit my-4">
              happy holiday guys!
            </div>
            <div className="ml-2 py-3 px-4 bg-gray-200 rounded-br-3xl rounded-tr-3xl rounded-tl-3xl rounded-bl-3xl text-black w-fit my-4">
              happy holiday guys!
            </div>
            <div className="mr-2 ml-auto py-3 px-4 bg-blue-500 rounded-br-3xl rounded-tr-3xl rounded-tl-3xl rounded-bl-3xl text-white w-fit my-4">
              happy holiday guys!
            </div>
            <div className="ml-2 py-3 px-4 bg-gray-200 rounded-br-3xl rounded-tr-3xl rounded-tl-3xl rounded-bl-3xl text-black w-fit my-4">
              happy holiday guys!
            </div>
            <div className="mr-2 ml-auto py-3 px-4 bg-blue-500 rounded-br-3xl rounded-tr-3xl rounded-tl-3xl rounded-bl-3xl text-white w-fit my-4">
              happy holiday guys!
            </div>
            <div className="ml-2 py-3 px-4 bg-gray-200 rounded-br-3xl rounded-tr-3xl rounded-tl-3xl rounded-bl-3xl text-black w-fit my-4">
              happy holiday guys!
            </div>
            <div className="mr-2 ml-auto py-3 px-4 bg-blue-500 rounded-br-3xl rounded-tr-3xl rounded-tl-3xl rounded-bl-3xl text-white w-fit my-4">
              happy holiday guys!
            </div>
          </div>
        </div>
        <div className="py-3 my-auto mx-auto inline-flex w-full relative">
          <input
            type="search"
            id="search"
            className="block p-4 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Type message..."
            onKeyDown={(e: any) => {
              if (e.keyCode == 13) console.log("Enter");
            }}
            required
          />
          <button
            type="submit"
            className="text-white uppercase absolute right-2.5 bottom-2.5 mb-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Send
          </button>
        </div>
      </div>
    </>
  );
});

export default Chatroom;
