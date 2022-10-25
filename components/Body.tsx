import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";
import CategoryButton from "./CategoryButton";
import Product from "./Product";

export interface IProduct {
  cid: string;
  title: string;
  thumbnail_uri: string;
  price: number;
  starred: number;
}

export const category = [
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
];

function Body() {
  const [windowSize, setWindowSize] = useState<any>(0);
  const [searchInput, setSearchInput] = useState();
  const { theme } = useTheme();

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

  const handleSearchInput = (e: any) => {
    setSearchInput(e.target.value);
  };

  const submitSearchInput = () => {
    alert("SUBMIT !");
  };

  const product: IProduct = {
    title: "Example Title",
    cid: "Example CID",
    thumbnail_uri: "https://flowbite.com/docs/images/blog/image-1.jpg",
    price: 10000,
    starred: 10,
  };
  const product2: IProduct = {
    title: "Example Long Long Very Long Title",
    cid: "Example CID",
    thumbnail_uri:
      "data:image/png;base64,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",
    price: 100000,
    starred: 99,
  };
  const product3: IProduct = {
    title:
      "한글로 긴 제목을 쓰면 어떻게 될까?한글로 긴 제목을 쓰면 어떻게 될까?한글로 긴 제목을 쓰면 어떻게 될까?한글로 긴 제목을 쓰면 어떻게 될까?한글로 긴 제목을 쓰면 어떻게 될까?한글로 긴 제목을 쓰면 어떻게 될까?한글로 긴 제목을 쓰면 어떻게 될까?한글로 긴 제목을 쓰면 어떻게 될까?한글로 긴 제목을 쓰면 어떻게 될까?한글로 긴 제목을 쓰면 어떻게 될까?",
    cid: "Example CID",
    thumbnail_uri:
      "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2F4REYA%2Fbtry5CqXoYc%2FDlrAQfulmwhDimruKLW5C1%2Fimg.png",
    price: 1000000,
    starred: 200,
  };

  return (
    <div className="w-full relative min-h-screen z-0 bg-white dark:bg-blind_market">
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
              type="submit"
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
          category.map((name, idx) => {
            return <CategoryButton category={name} key={idx} />;
          })}
      </div>
      <div className="grid p-4 2xl:grid-cols-6 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 xs:grid-cols-1 gap-2 lg:gap-4 cursor-pointer items-center justify-center align-middle">
        {[product, product2, product3].map((p, idx) => (
          <Product product={p} key={idx} />
        ))}
        {[product, product2, product3].map((p, idx) => (
          <Product product={p} key={idx} />
        ))}
        {[product, product2, product3].map((p, idx) => (
          <Product product={p} key={idx} />
        ))}
      </div>
    </div>
  );
}

export default Body;
