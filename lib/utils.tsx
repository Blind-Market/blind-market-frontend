import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { useInfiniteQuery } from "react-query";
import ItemAPI from "./item";

export const ThemeSwitch = () => {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();
	useEffect(() => {
		if (!theme) setTheme("dark");
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}
	return (
		<div
			className="relative mr-3 md:mr-7"
			onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
		>
			{theme === "light" ? <BsFillSunFill /> : <BsFillMoonFill />}
		</div>
	);
};

export const defaultInfinityScrollQuery = (category: number) => {
	const getItemPage = async ({ pageParam = 0 }) => {
		const res = await ItemAPI.getMultipleItem(pageParam, category);
		return {
			// 실제 데이터
			result: res ? res.data.result : null,
			// 반환 값에 현재 페이지를 넘겨주자
			current_page: pageParam,
			// 페이지가 마지막인지 알려주는 서버에서 넘겨준 true/false 값
			isLast:
				res && res.data.result && res.data.result.length < 20 ? true : false,
		};
	};

	const {
		data: getItems,
		fetchNextPage: getNextPage,
		isSuccess: getItemIsSuccess,
		hasNextPage: getNextPageIsPossible,
	} = useInfiniteQuery(["page_item_list"], getItemPage, {
		getNextPageParam: (lastPage, page) => {
			if (!lastPage.isLast) return lastPage.current_page + 1;
			return null;
		},
	});
	return { getItems, getNextPage, getItemIsSuccess, getNextPageIsPossible };
};
