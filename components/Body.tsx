import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import shallow from "zustand/shallow";

import CategoryButton from "./CategoryButton";
import Product from "./Product";

import StoreAPI from "../lib/store";
import { useDefaultInfinityScrollQuery } from "../lib/utils";

function IsEqual(prevProps: any, nextProps: any) {
  return prevProps == nextProps ? true : false;
}

const Body = React.memo(function Body(account: any) {
  const { theme } = useTheme();
  const [searchInput, setSearchInput] = useState("");
  const { getItems, getNextPage, getItemIsSuccess, getNextPageIsPossible } = useDefaultInfinityScrollQuery("all", "title");
  const [windowSize, setWindowSize] = useState<any>(0);

  const { category } = StoreAPI.useCategory(
    (state) => ({ category: state.category }),
    shallow
  );

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

    if (getNextPageIsPossible && getItemIsSuccess) {
    }

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const handleSearchInput = (e: any) => {
    setSearchInput(e.target.value);
  };

  const submitSearchInput = () => {};

  const Items = useMemo(
    () => ({
      Items: getItems?.pages[0].result,
    }),
    []
  );

  const CATEGORY = useMemo(
    () => ({
      CATEGORY: [
        "all",
        "digital",
        "lifestyle",
        "interior",
        "kitchen",
        "beauty",
        "sports",
        "fashion",
        "game",
        "book",
        "pet",
        "other",
      ],
    }),
    []
  );

  const [userNickname, setUserNickname] = useState("");
  const validateUserNickname = (e: any) => {
    const nickname = e.target.value;
    // validate nickname

    // if everything is ok
    setUserNickname(nickname);
  };

  const [checkNickname, setCheckNickname] = useState(false);

  return (
    <div className="w-full relative min-h-screen z-0 bg-white dark:bg-blind_market">
      {checkNickname ? (
        <>
          <div className="lg:mx-80 lg:my-0 p-8 align-middle justify-center items-center text-center">
            {theme === "light" ? (
              <Image
                src="/blindmarket_signature_vertical_primary.png"
                width={250}
                height={200}
              />
            ) : (
              <Image
                src="/blindmarket_signature_vertical_white.png"
                width={250}
                height={200}
              />
            )}
            <form className="p-4 mx-4 my-4">
              <label
                htmlFor="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
              >
                Search
              </label>
              <div className="relative">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Autumn clothes"
                  onChange={handleSearchInput}
                  required
                />
                <button
                  onClick={submitSearchInput}
                  className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Search
                </button>
              </div>
            </form>
          </div>
          <div className="lg:mx-20 lg:my-0 my-4 mx-4 align-middle justify-center items-center text-center">
            {windowSize > 768 &&
              account &&
              CATEGORY.CATEGORY.map((name, idx) => {
                return <CategoryButton category={name} key={idx} />;
              })}
          </div>
          <div className="grid p-4 2xl:grid-cols-6 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 xs:grid-cols-1 gap-2 lg:gap-4 items-center justify-center align-middle">
            {Items &&
              Array.isArray(Items) &&
              Items.map((item: any, idx: number) => (
                <Product product={item} key={idx} />
              ))}
          </div>
        </>
      ) : (
        <div className="bg-white dark:bg-blind_market w-full justify-center items-center align-middle flex-col flex mt-48">
          <h1 className="lg:text-4xl text-xl mt-5 text-black dark:text-white font-bold">
            Welcome Your First Visit!
          </h1>
          <p className="lg:text-l text-m mt-3 mb-5 text-black dark:text-white font-bold">
            Please enter the your nickname to use
          </p>
          <div className='flex justify-center items-center mt-10'>
            <input 
              className="text-black font-bold rounded-l-md my-5 h-10"
              type="text"
              value={userNickname}
              onChange={validateUserNickname}
              required
            />
            <button
              className='bg-blue-600 p-3 text-white rounded-r-md hover:bg-blue-800 hover:shadow-xl lg:inline-flex lg:w-auto w-fit h-10 px-3 py-2 font-bold items-center justify-center align-middle my-5'
              onClick={() => setCheckNickname(true)}
            >
              Confirm
            </button>
          </div>
        </div>
      )}
    </div>
  );
}, IsEqual);

export default Body;
