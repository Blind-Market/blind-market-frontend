function OpponentCard({ opponent }: IOpponent | any) {
  return (
    <button className="flex flex-col w-full bg-transparent p-4 text-justify text-black dark:text-white">
      <div className="w-full bg-transparent text-white p-4 flex flex-col">
        <div className="grid grid-cols-4">
          <div className="col-end-1">
            <svg
              className="relative -left-1 w-12 h-12 text-gray-400"
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
          </div>
        </div>
        <p className="text-black dark:text-white">
          {opponent.last_chatted_date?.toISOString().slice(0, 10)}
        </p>
      </div>
    </button>
  );
}

export default OpponentCard;
