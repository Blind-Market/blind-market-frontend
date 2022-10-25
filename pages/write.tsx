import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import SubmitModal from "../components/SubmitModal";
import { useAccount } from "../lib/web3";
import { create } from "ipfs-http-client";
import all from "it-all";

enum ModalType {
  CancelModal,
  SubmitModal,
}

export default function Write() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [content, setContent] = useState("");
  const [imgFiles, setImgFiles] = useState<any[]>([]);

  const [submitButtonEffect, setSubmitButtonEffect] = useState(false);
  const [cancelButtonEffect, setCancelButtonEffect] = useState(false);

  const [modalPopUp, setModalPopUp] = useState(false);
  const [modalChildren, setModalChildren] = useState("");
  const [modalType, setModalType] = useState<ModalType>();
  const [onSubmit, setOnSubmit] = useState();

  const imgRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  const router = useRouter();
  var account = useAccount();

  async function connectWallet(): Promise<void> {
    //to get around type checking
    (window as any).ethereum
      .request({
        method: "eth_requestAccounts",
      })
      .then((accounts: string[]) => {
        account = accounts[0];
      })
      .catch((error: any) => {
        console.log(error);
      });
  }

  useEffect(() => {
    connectWallet();
  }, [account]);

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

  const submitHabdler = async () => {
    if (!window.ethereum) {
      throw new Error("Please install metamask!");
    }

    if (!title || !content || !imgFiles) {
      alert("Necessart part is not available");
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
      arrayOfImageCID.push(file.path);
    }

    const metadata = {
      metadata: {
        name: "Token Metadata",
        type: "object",
        properties: {
          title: title,
          content: content,
          price: price,
          account: account,
          // categories: [category],
          content_uri: arrayOfImageCID,
          thumbnail_uri: arrayOfImageCID.length ? arrayOfImageCID[0] : null,
          created_at: new Date(),
        },
      },
    };

    const metadataCid = await client.add(JSON.stringify(metadata));

    console.log(metadataCid);

    // Contract 호출 !
  };
  return (
    <>
      {modalPopUp ? (
        <>
          <SubmitModal
            onClose={() => setModalPopUp(false)}
            onSubmit={
              modalType == ModalType.CancelModal
                ? () => router.push("/")
                : () => ipfsUpload()
            }
            children={modalChildren}
            type={modalType}
          />
        </>
      ) : (
        <></>
      )}
      <div className="bg-white dark:bg-gray-800 flex h-full flex-col justify-center items-center">
        <div className="min-h-full w-full bg-white dark:bg-blind_market">
          <div className="grid lg:my-5 bg-white dark:bg-blind_market lg:mx-80  mx-10 my-4 h-fit">
            <h1 className="text-3xl dark:text-white text-black">
              NECESSARY INFO
            </h1>
          </div>
          <div className="bg-white dark:bg-blind_market mx-10 lg:mx-80 shadow-md rounded-lg p-4">
            <div className="mr-4 my-4">
              <label
                htmlFor="helper-text"
                className="block mb-2 text-2xl font-medium text-black dark:text-white"
              >
                Title
              </label>
              <input
                type="title"
                id="title"
                placeholder="title"
                onChange={(e) => titleHandler(e)}
                value={title}
                aria-describedby="helper-text-explanation"
                className="bg-white dark:bg-gray-800 border dark:text-white border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
              />
              <p
                id="helper-text-explanation"
                className="mt-2 text-sm text-gray-500 dark:text-gray-400"
              >
                Title is necessary. Maximum 20 letters.
              </p>
            </div>
            <div className="mr-4 my-4">
              <label
                htmlFor="helper-text"
                className="block mb-2 text-2xl font-medium text-black dark:text-white"
              >
                Price
              </label>
              <input
                type="price"
                id="price"
                placeholder="price"
                onChange={(e) => priceHandler(e)}
                value={price}
                aria-describedby="helper-text-explanation"
                className="bg-white dark:bg-gray-800 border dark:text-white border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
              />
              <p
                id="helper-text-explanation"
                className="mt-2 text-sm text-gray-500 dark:text-gray-400"
              >
                Price is necessary.
              </p>
            </div>
          </div>
          <div className="bg-white dark:bg-blind_market mx-10 lg:mx-80 shadow-md rounded-lg p-4">
            <h1 className="text-3xl text-black dark:text-white bg-white dark:bg-blind_market rounded-md">
              PRODUCT INFO
            </h1>
            <textarea
              id="editor"
              rows={15}
              className="block w-full text-lg text-gray-800 bg-white dark:bg-gray-800 dark:text-white dark:placeholder-gray-400 border-1 my-2 rounded-lg focus:ring-blue-500 focus:border-blue-500"
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
          <div className="bg-white dark:bg-blind_market mx-10 lg:mx-80 shadow-md rounded-lg p-4">
            <label
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 min-w-max"
              htmlFor="multiple_files"
            >
              Upload multiple files
            </label>
            <input
              className="block transition ease-in-out lg:w-full text-sm text-gray-900 bg-gray-300 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              id="multiple_files"
              type="file"
              onChange={(e) => imgFilesHandler(e)}
              ref={imgRef}
              multiple
            />
          </div>
          <div className="flex items-center border-b">
            <div className="flex items-center gap-4 lg:mx-80 my-4 mx-10">
              <button
                onClick={() => {
                  cancelHanlder();
                }}
                onAnimationEnd={() => setCancelButtonEffect(false)}
                className={`${
                  cancelButtonEffect && "animate-wiggle"
                } bg-red-800 p-3 text-white rounded hover:bg-blue-700 hover:shadow-xl lg:inline-flex lg:w-auto w-full px-3 py-2 font-bold items-center justify-center`}
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  submitHabdler();
                }}
                onAnimationEnd={() => setSubmitButtonEffect(false)}
                className={`${
                  submitButtonEffect && "animate-wiggle"
                } bg-blue-700 p-3 text-white rounded hover:bg-blue-700 hover:shadow-xl lg:inline-flex lg:w-auto w-full px-3 py-2 font-bold items-center justify-center`}
              >
                Publish
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
