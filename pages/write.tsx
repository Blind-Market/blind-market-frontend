import { useRouter } from "next/router";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { create } from "ipfs-http-client";
import { useForm } from "react-hook-form";

import SubmitModal from "../components/SubmitModal";

import Web3API from "../lib/web3";

enum ModalType {
  CancelModal,
  SubmitModal,
}

const Write = React.memo(function Write() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [content, setContent] = useState("");
  const [imgFiles, setImgFiles] = useState<any[]>([]);
  const [category, setCategory] = useState("");

  const [submitButtonEffect, setSubmitButtonEffect] = useState(false);
  const [cancelButtonEffect, setCancelButtonEffect] = useState(false);

  const [modalPopUp, setModalPopUp] = useState(false);
  const [modalChildren, setModalChildren] = useState("");
  const [modalType, setModalType] = useState<ModalType>();

  const router = useRouter();

  // The current user wallet address connected
  const account = Web3API.useAccount();
  // The web3 instance and the smart contract instance
  // const {web3, contract } = Web3API.useWeb3();

  const titleHandler = (e: any) => {
    if (e.target.value.length < 20) {
      setTitle(e.target.value);
    }
  };

  const priceHandler = (e: any) => {
    var temp: number = +e.target.value;
    setPrice(temp ? temp : 0);
  };
  
  const contentHandler = (e: any) => {
    var temp: string = e.target.value;
    if (temp.length < 500) {
      setContent(temp);
    }
  };

  const imgFilesHandler = (e: any) => {
    setImgFiles(e.target.files);
  };

  const submitHandler = async () => {
    if (!window.ethereum) {
      throw new Error("Please install metamask!");
    }

    if (!title || !content || !imgFiles) {
      alert("Necessary part is not available");
      return;
    }
    setSubmitButtonEffect(true);
    setModalType(ModalType.SubmitModal);
    setModalChildren("Are you sure you want to submit?");
    setModalPopUp(true);
  };

  const cancelHanlder = async () => {
    if (title.length || content.length || imgFiles?.length) {
      setCancelButtonEffect(true);
      setModalChildren(
        "Are you sure you want to go back? Everything you've written so far will be gone."
      );
      setModalType(ModalType.CancelModal);
      setModalPopUp(true);
      return;
    }
    router.push("/");
  };

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

  const ipfsUpload = async () => {
    const projectId = `${process.env.NEXT_PUBLIC_PROJECT_ID}`;
    const projectSecret = `${process.env.NEXT_PUBLIC_PROJECT_SECRET}`;

    const client = create({
      host: "ipfs.infura.io",
      port: 5001,
      protocol: "https",
      headers: {
        authorization:
          "Basic " +
          Buffer.from(projectId + ":" + projectSecret).toString("base64"),
      },
    });

    var arrayOfImageCID: any[] = [];

    for await (const file of client.addAll(imgFiles)) {
      arrayOfImageCID.push(
        `https://blind-market.infura-ipfs.io/ipfs/${file.path}`
      );
    }

    // Have to implement the logic to convert price from KRW to ETH

    const metadata = {
      metadata: {
        name: "Token Metadata",
        type: "object",
        properties: {
          title: title,
          content: content,
          price: price,
          account: account,
          categories: category,
          content_uri: arrayOfImageCID,
          thumbnail_uri: arrayOfImageCID.length ? arrayOfImageCID[0] : null,
          created_at: new Date(),
        },
      },
    };

    const metadataCid = await client.add(JSON.stringify(metadata));

    // Call smart contract
    // minting product using ipfs uri with mintProduct
    // contract?.methods
    //   .mintProduct(`https://blind-market.infura-ipfs.io/ipfs/${metadataCid}`)
    //   .send({from: account}, (err, res) => {
    //     if (err)
    //       console.log("An error occured", err);
    //     else
    //       console.log("Hash of the transactions: " + res);
    // });

    router.push("/")
  };

  // Process of showing preview images
  interface UploadPhoto {
    photo: FileList;
  }
  const { register, watch } = useForm<UploadPhoto>();
  const photo = watch("photo");
  const [photoPreview, setPhotoPreview] = useState<any[]>([])

  useEffect(() => {
    if (photo && photo.length > 0) {
      let arr = [];
      for (let i = 0; i < photo.length; i++) {
        const file = photo[i];
        arr.push(URL.createObjectURL(file));
      }
      console.log(arr);
      setPhotoPreview(arr);
    }
  }, [photo]);

  const inputImages = () => {
    let arr = [];
    for (let i = 0; i < photoPreview.length; i++) {
      arr.push(<div><img src={photoPreview[i]} className="w-full text-gray-600 h-80 rounded-md" /></div>)
    }
    return arr;
  }

  return (
    <>
      {modalPopUp ? (
        <div className="mx-auto my-auto">
          <SubmitModal
            onSubmit={
              modalType == ModalType.CancelModal
                ? () => router.push("/")
                : () => ipfsUpload()
            }
            onClose={() => setModalPopUp(false)}
          >
            {modalChildren}
          </SubmitModal>
        </div>
      ) : (
        <></>
      )}
      <div className="bg-white dark:bg-gray-800 flex h-full flex-col justify-center items-center">
        <div className="min-h-full w-full bg-white dark:bg-blind_market">
          <div className="grid lg:my-5 bg-white dark:bg-blind_market lg:mx-72  mx-10 my-4 h-fit">
            <h1 className="text-3xl dark:text-white text-black p-4">
              NECESSARY INFO
            </h1>
          </div>
          <div className="bg-white dark:bg-blind_market mx-10 lg:mx-72 shadow-md p-4">
            <label
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 min-w-max my-4"
              htmlFor="multiple_files"
            >
              Upload multiple files
            </label>
            {photoPreview.length ? (
              <label>
                {inputImages().map((image) => { return image; })}
                <input
                  {...register("photo")}
                  accept="image/*"
                  className="hidden"
                  id="multiple_files"
                  type="file"
                  // onChange={(e) => imgFilesHandler(e)}
                  multiple
                />
              </label>
            ) : (
              <label className="w-full cursor-pointer text-gray-600 hover:border-gray-800 hover:text-gray-800 flex items-center justify-center border-2 border-dashed border-gray-300 h-80 rounded-md">
                <svg
                  className="h-12 w-12"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 48 48"
                  aria-hidden="true"
                >
                  <path
                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <input
                  {...register("photo")}
                  accept="image/*"
                  className="hidden"
                  id="multiple_files"
                  type="file"
                  // onChange={(e) => imgFilesHandler(e)}
                  multiple
                />
              </label>
            )}
          </div>
          <div className="bg-white dark:bg-blind_market mx-10 lg:mx-72 shadow-md p-4 my-4 grid xl:grid-cols-2 grid-cols-1">
            <div className="grid grid-rows-3">
              <div className="mr-4 my-4">
                <form>
                  <div className="relative z-0 mb-6 group">
                    <input
                      type="title"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder="Please input the Title"
                      required
                      value={title}
                      onChange={titleHandler}
                    />
                    <label
                      htmlFor="title"
                      className="block bg-white dark:bg-blind_market peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    ></label>
                  </div>
                </form>
              </div>
              <div>
                <label
                  htmlFor="categories"
                  className="flex mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 min-w-max"
                >
                  Select an Category
                </label>
                <select
                  id="countries"
                  onChange={(e) => setCategory(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option>Categories</option>
                  {CATEGORY.CATEGORY.map((value, index) => (
                    <option value={value} key={index}>
                      {value}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <div className="xl:w-72 w-60">
                  <label
                    htmlFor="exampleNumber0"
                    className="form-label inline-block mb-2 text-black dark:text-white"
                  >
                    Price
                  </label>
                  <input
                    type="number"
                    className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-800 bg-white dark:bg-blind_market border-b-2 cursor-pointer bg-clip-padding transition ease-in-out m-0 focus:text-gray-700 focus:bg-white border-0 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer  dark:placeholder-gray-400 dark:focus:ring-blue-500"
                    id="exampleNumber0"
                    placeholder="Price is necessary info!"
                    value={price}
                    onChange={(e: any) => setPrice(e.target.value)}
                    onClick={(e: any) => console.log(e.target.value)}
                  />
                  <p
                    id="helper-text-explanation"
                    className="mt-2 text-sm text-gray-500 dark:text-gray-400"
                  >
                    Price is necessary info!
                  </p>
                </div>
              </div>
              {/* <div>
                <label
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 min-w-max my-4"
                  htmlFor="multiple_files"
                >
                  Upload multiple files
                </label>
                <input
                  className="block transition ease-in-out text-sm text-gray-800 bg-white dark:bg-gray-800 dark:text-white dark:placeholder-gray-400 border-1 cursor-pointer focus:outline-none "
                  id="multiple_files"
                  type="file"
                  // onChange={(e) => imgFilesHandler(e)}
                  multiple
                />
              </div> */}
            </div>
            <div className="grid grid-rows-3 visible">
              <div
                className={`${
                  title.length > 0
                    ? "dark:bg-green-200 dark:text-green-800 text-green-700 bg-green-100"
                    : "text-red-800 dark:text-red-900 bg-red-100 dark:bg-red-200"
                } p-4 mb-4 text-sm`}
                role="alert"
              >
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 inline w-5 h-5 mr-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  ></path>
                </svg>

                <span className="font-medium">Title is necessary field!</span>
                <ul className="mt-1.5 ml-4 list-disc list-inside">
                  <li className="mt-2">Please input your own title.</li>
                </ul>
              </div>
              <div
                className={`${
                  price >= 100 && price % 100 == 0
                    ? "dark:bg-green-200 dark:text-green-800 text-green-700 bg-green-100"
                    : "text-red-800 dark:text-red-900 bg-red-100 dark:bg-red-200"
                } p-4 mb-4 text-sm`}
                role="alert"
              >
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 inline w-5 h-5 mr-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="font-medium">Price is necessary field!</span>
                <ul className="mt-1.5 ml-4 list-disc list-inside">
                  <li className="mt-2">Please input proper price.</li>
                </ul>
              </div>
              <div
                className={`${
                  content.length > 0
                    ? "dark:bg-green-200 dark:text-green-800 text-green-700 bg-green-100"
                    : "text-red-800 dark:text-red-900 bg-red-100 dark:bg-red-200"
                } p-4 mb-4 text-sm`}
                role="alert"
              >
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 inline w-5 h-5 mr-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="font-medium">
                  Description is necessary field!
                </span>
                <ul className="mt-1.5 ml-4 list-disc list-inside">
                  <li className="mt-2">Please input some description.</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-blind_market mx-10 lg:mx-72 shadow-md p-4">
            <textarea
              id="editor"
              rows={20}
              className="block w-full text-lg text-gray-800 bg-white dark:bg-blind_market dark:text-white dark:placeholder-gray-400 border-1 border-b-2 my-2 focus:ring-blue-500 focus:border-blue-500 rounded-lg"
              placeholder="Please explain what you want to sell! Products described in detail are more likely to be sold than those not."
              onChange={contentHandler}
              value={content}
              required
            ></textarea>
            <div className="mr-4 my-4">
              <p
                id="helper-text-explanation"
                className="text-sm text-gray-500 dark:text-gray-400"
              >
                Description about product is maximum 500 letters.
              </p>
            </div>
          </div>
          <div className="flex items-center border-b p-4 mx-10 lg:mx-72">
            <div className="flex items-center gap-4 my-4 ml-auto">
              <button
                onClick={() => {
                  cancelHanlder();
                }}
                onAnimationEnd={() => setCancelButtonEffect(false)}
                className={`${
                  cancelButtonEffect && "animate-wiggle"
                } bg-red-800 p-3 text-white rounded hover:bg-gray-700 hover:shadow-xl lg:inline-flex lg:w-auto w-full px-3 py-2 font-bold items-center justify-center`}
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  submitHandler();
                }}
                onAnimationEnd={() => setSubmitButtonEffect(false)}
                className={`${
                  submitButtonEffect && "animate-wiggle"
                } bg-blue-700 p-3 text-white rounded hover:bg-gray-700 hover:shadow-xl lg:inline-flex lg:w-auto w-full px-3 py-2 font-bold items-center justify-center`}
              >
                Publish
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

export default Write;
