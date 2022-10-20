import Link from "next/link";
import { useRouter } from "next/router";

function Product({ product }: any) {
  const router = useRouter();
  return (
    <Link
      href={{
        pathname: `/detail/${product.cid}`,
      }}
      passHref
      prefetch={false}
    >
      <div className="p-4 rounded-md items-center justify-center bg-white w-full mx-auto dark:bg-black min-h-max h-full">
        <div className="flex-wrap shadow-gray-500 shadow-md p-4 dark:border-white border rounded-lg dark:shadow-none dark:bg-gray-700 h-full">
          <img src={product.thumbnail_uri} className="w-full h-60" />
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
            {product.starred}
          </h3>
          <a
            href="#"
            className="inline-flex items-center mt-3 py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Read more
            <svg
              aria-hidden="true"
              className="ml-2 -mr-1 w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </Link>
  );
}

export default Product;
