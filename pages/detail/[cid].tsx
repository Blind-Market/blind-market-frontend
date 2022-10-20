import { Modal } from "flowbite-react";
import { ModalBody } from "flowbite-react/lib/esm/components/Modal/ModalBody";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import ImageModal from "../../components/ImageModal";
import ItemAPI from "../../lib/item";

interface IItem {
	cid: string;
	title: string;
	price: number;
	description: string;
	thumbnail_uri: string;
	content_uri: string[];
	starred: number;
	view: number;
}

function Detail() {
	const router = useRouter();
	const cid = router.query;
	const [windowSize, setWindowSize] = useState<any>(0);
	const [modalOpen, setModalOpen] = useState(false);
	const [imgIndex, setImgIndex] = useState<number>(0);
	const [buyButtonEffect, setBuyButtonEffect] = useState(false);
	const [backButtonEffect, setBackButtonEffect] = useState(false);

	const { theme } = useTheme();
	const { isLoading, isError, error, data } = useQuery(`/items/${cid}`, () =>
		ItemAPI.getSingleItem()
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

		return () => {
			window.removeEventListener("resize", handleWindowResize);
		};
	}, []);

	const sample: IItem = {
		cid: String(cid),
		title: "Sample Title",
		price: 10000,
		description:
			"Sample Description.\nIt's a sample description for testing.\nThis description should be placed in the center of the screen.\nSample Description.\nIt's a sample description for testing.\nThis description should be placed in the center of the screen.\nSample Description.\nIt's a sample description for testing.\nThis description should be placed in the center of the screen.\nSample Description.\nIt's a sample description for testing.\nThis description should be placed in the center of the screen.\n",
		thumbnail_uri:
			"https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2F4REYA%2Fbtry5CqXoYc%2FDlrAQfulmwhDimruKLW5C1%2Fimg.png",
		content_uri: [
			"https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2F4REYA%2Fbtry5CqXoYc%2FDlrAQfulmwhDimruKLW5C1%2Fimg.png",
			"https://asia.olympus-imaging.com/content/000107507.jpg",
			"https://media.istockphoto.com/vectors/sample-sign-sample-square-speech-bubble-sample-vector-id1161352480?k=20&m=1161352480&s=612x612&w=0&h=uVaVErtcluXjUNbOuvGF2_sSib9dZejwh4w8CwJPc48=",
		],
		starred: 100,
		view: 50,
	};

	return (
		<div className="bg-blue-800 w-full h-full min-h-screen">
			{modalOpen ? (
				<>
					<ImageModal onClose={() => setModalOpen(false)} show={modalOpen}>
						<img src={sample.content_uri[imgIndex]} width={600} height={600} />
					</ImageModal>
				</>
			) : (
				<></>
			)}
			<h1 className="bg-white dark:bg-black text-black dark:text-white text-4xl p-8 my-auto font-semibold shadow-md flex	 text-ellipsis overflow-x-scroll gap-8">
				{theme === "light" ? (
					<Image
						src="/../public/blindmarket_symbol_primary.png"
						width={"30px"}
						height={"30px"}
					/>
				) : (
					<Image
						src="/../public/blindmarket_symbol_white.png"
						width={"30px"}
						height={"30px"}
					/>
				)}
				<p>{sample.title}</p>
			</h1>
			<div className="bg-white dark:bg-black w-full h-1/3 overflow-scroll flex gap-4 p-4">
				{sample.content_uri.map((value, index) => (
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
				{sample.content_uri.map((value, index) => (
					<img
						src={value}
						key={index}
						width={300}
						height={300}
						onClick={() => {
							setImgIndex(index);
							setModalOpen(true);
						}}
					/>
				))}
			</div>
			<div className="bg-white dark:bg-black w-full lg:h-fit min-w-full gap-4 p-4">
				<p className="text-black dark:text-white whitespace-pre-wrap font-semibold block border rounded-md p-4 shadow-md">
					{sample.description}
				</p>
			</div>
			<div className="bg-white dark:bg-black w-full min-w-full">
				<div className="flex gap-4 lg:mx-10 mx-5 bg-white dark:bg-black">
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
	);
}

export default Detail;
