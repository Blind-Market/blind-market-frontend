import Image from "next/image";
import { useRouter } from "next/router";
import React, { useCallback, useEffect, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import shallow from "zustand/shallow";
import ImageModal from "../../components/ImageModal";
import ItemAPI from "../../lib/item";
import StoreAPI from "../../lib/store";
import Web3API from "../../lib/web3";

const Detail = React.memo(function Detail() {
  const router = useRouter();
  const { cid } = router.query;
  const account = Web3API.useAccount();
  const queryClient = useQueryClient();

  const setLikeItem = async () => {
    const res = await ItemAPI.setLikeItem(cid, account);
    console.log(res);

    if (res) setStarred(!!!starred);
  };

  const setUnlikeItem = async () => {
    const res = await ItemAPI.setUnlikeItem(cid, account);
    console.log(`res ${res}`);
    if (res) setStarred(!!!starred);
  };

  const setLikeMutation = useMutation(setLikeItem, {
    onMutate: (variable) => {
      console.log("onMutate", variable);
      // variable : {loginId: 'xxx', password; 'xxx'}
    },
    onError: (error, variable, context) => {
      // error
    },
    onSuccess: (data, variables, context) => {
      console.log("success", data, variables, context);
      queryClient.invalidateQueries(`/item/${cid}`);
    },
    onSettled: () => {
      console.log("end");
    },
  });

  const setUnLikeMutation = useMutation(setUnlikeItem, {
    onMutate: (variable) => {
      console.log("onMutate", variable);
      // variable : {loginId: 'xxx', password; 'xxx'}
    },
    onError: (error, variable, context) => {
      // error
    },
    onSuccess: (data, variables, context) => {
      console.log("success", data, variables, context);
      queryClient.invalidateQueries(`/item/${cid}`);
    },
    onSettled: () => {
      console.log("end");
    },
  });

  const { isLoading, isError, data, error } = useQuery(
    `/item/${cid}`,
    () => ItemAPI.getSingleItem(cid, account),
    {
      refetchOnWindowFocus: false,
      onSuccess: (data) => console.log(data),
      onError: (e) => console.error(e),
    }
  );

  const handleStarred = () => {
    data.starred ? setLikeMutation.mutate() : setUnLikeMutation.mutate();
  };

  const [starred, setStarred] = useState<any>(data?.starred);
  const [modalOpen, setModalOpen] = useState(false);
  const [imgIndex, setImgIndex] = useState<number>(0);
  const [buyButtonEffect, setBuyButtonEffect] = useState(false);
  const [backButtonEffect, setBackButtonEffect] = useState(false);

  const { innerWidth, innerHeight, setWindowSize } = StoreAPI.useWindowSize(
    (state) => ({
      innerWidth: state.innerWidth,
      innerHeight: state.innerHeight,
      setWindowSize: state.setWindowSize,
    }),
    shallow
  );

  useEffect(() => {
    const { innerWidth, innerHeight } = window;
    setWindowSize(innerWidth, innerHeight);
  }, []);

  return (
    <>
      {modalOpen ? (
        <ImageModal onClose={() => setModalOpen(false)} show={modalOpen}>
          <img src={data.images[imgIndex]} width={600} height={600} />
          <button
            className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-prev
            onClick={() =>
              setImgIndex(imgIndex - 1 < 0 ? imgIndex : imgIndex - 1)
            }
          >
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-blind_market dark:bg-white group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                ></path>
              </svg>
            </span>
          </button>
          <button
            type="button"
            className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-next
            onClick={() =>
              setImgIndex(
                imgIndex + 1 == data.images.length ? imgIndex : imgIndex + 1
              )
            }
          >
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-blind_market dark:bg-white group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
              <span className="sr-only">Next</span>
            </span>
          </button>
        </ImageModal>
      ) : (
        <></>
      )}
      {data ? (
        <div className="bg-white dark:bg-blind_market w-full h-full min-h-screen items-center justify-center">
          <div className="bg-white dark:bg-blind_market lg:w-1/2 w-full mx-auto">
            <div className="bg-white dark:bg-blind_market w-full overflow-scroll flex gap-4 p-4">
              {data.images &&
                data.images.map((value: any, index: number) => (
                  <img
                    src={value}
                    key={index}
                    width={300}
                    height={300}
                    onClick={() => {
                      setImgIndex(index);
                      setModalOpen(true);
                    }}
                    className="border shadow-sm rounded-sm"
                  />
                ))}
            </div>
            <h1 className="text-3xl font-bold text-start p-4">{data.title}</h1>
            <div className="bg-white dark:bg-blind_market text-black dark:text-white text-xl p-4 font-semibold flex gap-4 ">
              <p className="flex align-middle text-center items-center justify-center content-center">
                <Image src={"/gold.png"} width={30} height={30} />
                {data.seller}
              </p>
            </div>
            <p className="text-4xl ml-0 mr-auto p-4 border-b">
              {data.price} ￦
            </p>
            <br />
            <div className="bg-white dark:bg-blind_market w-full min-w-full gap-4 p-4 border-b">
              <p className="text-black dark:text-white whitespace-pre-wrap font-semibold block">
                {data.description}
              </p>
            </div>
            <br />
            <div className="inline-flex rounded-md shadow-sm" role="group">
              <button
                type="button"
                className="py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-l-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white inline-flex text-center items-center align-middle justify-center"
                onClick={handleStarred}
              >
                {data.starred ? (
                  <svg
                    className="w-6 h-6"
                    fill="orange"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ) : (
                  <svg
                    aria-hidden="true"
                    className="w-6 h-6 text-gray-300 dark:text-gray-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Fifth star</title>
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                )}
                {data.starred} Starred
              </button>
              <button
                type="button"
                className="py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-r-md border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white inline-flex text-center items-center align-middle justify-center gap-2"
              >
                <Image src={"/eye.png"} width={20} height={20} />
                {data.view} View
              </button>
            </div>

            <div className="bg-white dark:bg-blind_market w-full min-w-full">
              <div className="flex gap-4 bg-white dark:bg-blind_market">
                <button
                  onClick={() => {
                    setBackButtonEffect(true);
                    router.back();
                  }}
                  onAnimationEnd={() => setBackButtonEffect(false)}
                  className={`${
                    backButtonEffect && "animate-wiggle"
                  } bg-red-500 p-3 text-white rounded hover:bg-red-700 hover:shadow-xl lg:inline-flex lg:w-auto w-full px-3 py-2 font-bold items-center justify-center uppercase lg:my-10`}
                >
                  Go Back
                </button>
                <button
                  onClick={() => {
                    setBuyButtonEffect(true);
                  }}
                  onAnimationEnd={() => setBuyButtonEffect(false)}
                  className={`${
                    buyButtonEffect && "animate-wiggle"
                  } bg-green-500 p-3 text-white rounded hover:bg-green-700 hover:shadow-xl lg:inline-flex lg:w-auto w-full px-3 py-2 font-bold items-center justify-center uppercase lg:my-10`}
                >
                  Buy it!
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
});

export default Detail;
