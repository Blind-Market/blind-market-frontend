function CategoryButton({ category }: any) {
	const colorHandler = () => {
		switch (category) {
			case "all":
				return "from-blue-500 via-blue-600 to-blue-700 focus:ring-blue-300 shadow-blue-500/50";
			case "digital":
				return "from-green-400 via-green-500 to-green-600 focus:ring-green-300 shadow-green-500/50";
			case "lifestyle":
				return "from-cyan-500 via-cyan-600 to-cyan-700 focus:ring-cyan-300 shadow-cyan-500/50";
			case "interior":
				return "from-lime-500 via-lime-600 to-lime-700 focus:ring-lime-300 shadow-lime-500/50";
			case "kitchen":
				return "from-teal-500 via-teal-600 to-teal-700 focus:ring-teal-300 shadow-teal-500/50";
			case "beauty":
				return "from-red-500 via-red-600 to-red-700 ring-red-300 shadow-red-500/50";
			case "sports":
				return "from-pink-500 via-pink-600 to-pink-700 ring-pink-300 shadow-pink-500/50";
			case "fashion":
				return "from-purple-500 via-purple-600 to-purple-700 ring-purple-300 shadow-purple-500/50";
			case "game":
				return "from-gray-500 via-gray-600 to-gray-700 ring-gray-300 shadow-gray-500/50";
			case "book":
				return "from-yellow-500 via-yellow-600 to-yellow-700 ring-yellow-300 shadow-yellow-500/50";
			case "pet":
				return "from-orange-500 via-orange-600 to-orange-700 ring-orange-300 shadow-orange-500/50";
			case "other":
				return "from-rose-500 via-rose-600 to-rose-700 ring-rose-300 shadow-rose-500/50";
			default:
				break;
		}
	};
	return (
		<>
			<button
				type="button"
				className={`${colorHandler()} text-white bg-gradient-to-r hover:bg-gradient-to-br focus:ring-4 focus:outline-none shadow-lg font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2`}
			>
				{category}
			</button>
		</>
	);
}

export default CategoryButton;
