import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import example from "../public/example.png";
import Product from "./Product";

export interface IProduct {
  title: string;
  thumbnail_uri: string;
  cid: string;
}

function Body() {
  const [windowSize, setWindowSize] = useState<any>(0);

  useEffect(() => {
    function getWindowSize() {
      const { innerWidth, innerHeight } = window;
      return innerWidth;
    }
    function handleWindowResize() {
      setWindowSize(getWindowSize());
      console.log(windowSize);
    }
    window.addEventListener("resize", handleWindowResize);
    handleWindowResize();

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const product: IProduct = {
    title: "Example Title",
    cid: "Example CID",
    thumbnail_uri: "https://flowbite.com/docs/images/blog/image-1.jpg",
  };
  const product2: IProduct = {
    title: "Example Long Long Very Long Title",
    cid: "Example CID",
    thumbnail_uri: "https://flowbite.com/docs/images/blog/image-1.jpg",
  };

  return (
    <div className="w-full relative min-h-screen z-0 bg-gray-900">
      <div className="flex flex-col md:flex-row flex-1 min-h-screen">
        {windowSize > 768 ? (
          <aside className="bg-gray-900 md:w-60 min-w-max sticky border border-slate-500">
            <Sidebar />
          </aside>
        ) : (
          <></>
        )}
        <div className="w-full min-h-screen bg-gray-900 grid lg:grid-cols-4">
          <div className="my-auto mx-auto min-h-min w-fit bg-gray-900 lg:overflow-hidden justify-center align-middle items-center px-4 py-4">
            <Product product={product} />
          </div>
          <div className="my-auto mx-auto max-h-min w-fit  bg-gray-900 lg:overflow-hidden justify-center align-middle items-center px-4 py-4">
            <Product product={product2} />
          </div>
          <div className="my-auto mx-auto min-h-min w-fit  bg-gray-900 lg:overflow-hidden justify-center align-middle items-center px-4 py-4">
            <Product product={product} />
          </div>
          <div className="my-auto mx-auto min-h-min w-fit  bg-gray-900 lg:overflow-hidden justify-center align-middle items-center px-4 py-4">
            <Product product={product} />
          </div>
          <div className="my-auto mx-auto min-h-min w-fit  bg-gray-900 lg:overflow-hidden justify-center align-middle items-center px-4 py-4">
            <Product product={product} />
          </div>
          <div className="my-auto mx-auto min-h-min w-fit  bg-gray-900 lg:overflow-hidden justify-center align-middle items-center px-4 py-4">
            <Product product={product} />
          </div>
          <div className="my-auto mx-auto min-h-min w-fit  bg-gray-900 lg:overflow-hidden justify-center align-middle items-center px-4 py-4">
            <Product product={product} />
          </div>
          <div className="my-auto mx-auto min-h-min w-fit  bg-gray-900 lg:overflow-hidden justify-center align-middle items-center px-4 py-4">
            <Product product={product} />
          </div>
          <div className="my-auto mx-auto min-h-min w-fit  bg-gray-900 lg:overflow-hidden justify-center align-middle items-center px-4 py-4">
            <Product product={product} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
