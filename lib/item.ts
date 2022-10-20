import axios from "axios";

const getMultipleItem = async (page: number, category: number) => {
	return axios
		.get(`/items`, {
			params: { offset: page, category: category },
		})
		.then((res) => res)
		.catch((err) => null);
};

const getSingleItem = async () => {};

const updateItem = async () => {};

const deleteItem = async () => {};

const searchItemsByCondition = async () => {};

const ItemAPI = {
	getSingleItem,
	getMultipleItem,
	searchItemsByCondition,
	updateItem,
	deleteItem,
};

export default ItemAPI;
