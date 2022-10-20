import { useRouter } from "next/router";
import { useState } from "react";
import Body from "../components/Body";

export default function Write() {
	const [title, setTitle] = useState("");
	const [price, setPrice] = useState(0);
	const [content, setContent] = useState("");
	const [submitButtonEffect, setSubmitButtonEffect] = useState(false);
	const [cancelButtonEffect, setCancelButtonEffect] = useState(false);
	const router = useRouter();
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

	return (
		<div className="bg-white dark:bg-black flex h-full flex-col justify-center items-center">
			<div className="min-h-full w-full bg-white dark:bg-black">
				<div className="grid lg:my-5 bg-white dark:bg-black lg:mx-80  mx-10 my-4 h-fit">
					<h1 className="text-3xl dark:text-white text-black">
						NECESSARY INFO
					</h1>
				</div>
				<div className="bg-white dark:bg-black mx-10 lg:mx-80 shadow-md rounded-lg p-4">
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
							className="bg-white dark:bg-black border dark:text-white border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
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
							className="bg-white dark:bg-black border dark:text-white border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
						/>
						<p
							id="helper-text-explanation"
							className="mt-2 text-sm text-gray-500 dark:text-gray-400"
						>
							Price is necessary.
						</p>
					</div>
				</div>
				<div className="lg:my-5 bg-white dark:bg-black lg:mx-80  my-4 mx-10 h-fit">
					<h1 className="text-3xl text-black dark:text-white bg-white dark:bg-black rounded-md">
						PRODUCT INFO
					</h1>
					<textarea
						id="editor"
						rows={15}
						className="block lg:px-2 lg:w-full text-lg text-gray-800 bg-white dark:bg-black dark:text-white dark:placeholder-gray-400 border-1 my-2 rounded-lg focus:ring-blue-500 focus:border-blue-500"
						placeholder="Please explain what you want to sell! Products described in detail are more likely to be sold than those not."
						onChange={contentHandler}
						value={content}
						required
					></textarea>
					<p
						id="helper-text-explanation"
						className="lg:mt-2 p-4 text-sm text-gray-500 dark:text-gray-400"
					>
						Description about product is maximum 500 letters.
					</p>
					<label
						className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 min-w-max"
						htmlFor="multiple_files"
					>
						Upload multiple files
					</label>
					<input
						className="block lg:w-full text-sm text-gray-900 bg-gray-300 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
						id="multiple_files"
						type="file"
						onChange={(e) => console.log(e.target.files)}
					/>
				</div>
				<div className="flex justify-between items-center border-b">
					<div className="flex flex-wrap items-center gap-4 lg:mx-80  my-4">
						<button
							onClick={() => {
								setCancelButtonEffect(true);
								router.push("/");
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
								setSubmitButtonEffect(true);
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
	);
}
