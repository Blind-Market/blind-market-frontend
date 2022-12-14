import Link from "next/link";
import React from "react";

function IsEqual(prevProps: any, nextProps: any) {
  return prevProps == nextProps ? true : false;
}

const Product = React.memo(function Product({ product }: any) {
  return (
    <Link
      href={{
        pathname: `/detail/${product.cid}`,
      }}
      passHref
      prefetch={false}
    >
      <div className=" p-4 rounded-md items-center justify-center bg-white w-full mx-auto dark:bg-blind_market min-h-max h-full">
        <div className="cursor-pointer flex-wrap shadow-gray-500 shadow-md p-4 dark:border-black border rounded-lg dark:shadow-none dark:bg-gray-700 h-full items-center justify-center mx-auto">
          <img src={product.thumbnail_uri} className="mx-auto w-64 h-64 p-2" />
          <p className="text-ellipsis text-lg overflow-hidden dark:text-white">
            {product.title.length > 15
              ? product.title.slice(0, 18)
              : product.title}
          </p>
          <p className=" text-ellipsis text-md font-bold dark:text-white">
            {product.price} Won
          </p>

          <h3 className="flex dark:text-white">
            <svg
              className="w-6 h-6"
              fill="orange"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            {product.starred === undefined ? 0 : product.starred}
          </h3>
        </div>
      </div>
    </Link>
  );
}, IsEqual);

export default Product;
