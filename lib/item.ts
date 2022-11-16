import axios from "axios";

/**
 * API call function for get items list
 * @param {number} page 
 * 			Offset for pagination
 * @param {string} category 
 * 			Item category (lower case)
 * @param {string} keyword 
 * 			Keyword for filtering
 * 
 * @typedef {Object} images
 * @property {string} imageUri - Image URI
 * @property {string} createdAt - Date of image created
 * @property {string} updatedAt - Date of image updated
 * @property {string} deleteAt - Date of image deleted
 * 
 * @typedef {Object} Result
 * @property {string} cid - Item cid
 * @property {string} title - Item title
 * @property {string} description - Itme description
 * @property {string} thumbnailUri - Thumbnail URI
 * @property {Array.<Images>} images - Images object array
 * @property {string} category - Item category (lower case)
 * @property {number} price - Item price
 * @property {string} nickname - User nickname
 * @property {boolean} starred - Starred
 * @property {number} view - View count
 * @property {string} createdAt - Date of Item created
 * @property {string} updatedAt - Date of item updated
 * @property {string} deleteAt - Date of item deleted
 * 
 * @typedef {Object} ReturnObject
 * @property {number} status - HTTP status code
 * @property {boolean} success - Request success
 * @property {Result} - Result object
 * 
 * @returns {ReturnObject} - ReturnObject object
 */
const getMultipleItem = async (
	page: number,
	category: string,
	keyword: string
) => {
	return axios
		.get(`/items`, {
			params: {
				offset: page,
				category: category,
				keyword: keyword,
				pageSize: 20,
			},
		})
		.then((res) => res)
		.catch((err) => null);
};

/**
 * API call function for getting a single item
 * @param {string} cid 
 * 			Item cid
 * @param {string} account 
 * 			User wallet address
 * 
 * 
 * @typedef {Object} images
 * @property {string} imageUri - Image URI
 * @property {string} createdAt - Date of image created
 * @property {string} updatedAt - Date of image updated
 * @property {string} deleteAt - Date of image deleted
 * 
 * @typedef {Object} Result
 * @property {string} cid - Item cid
 * @property {string} title - Item title
 * @property {string} description - Itme description
 * @property {string} thumbnailUri - Thumbnail URI
 * @property {Array.<Images>} images - Images object array
 * @property {string} category - Item category (lower case)
 * @property {number} price - Item price
 * @property {string} nickname - User nickname
 * @property {boolean} starred - Starred
 * @property {number} view - View count
 * @property {string} createdAt - Date of Item created
 * @property {string} updatedAt - Date of item updated
 * @property {string} deleteAt - Date of item deleted
 * 
 * @typedef {Object} ReturnObject
 * @property {number} status - HTTP status code
 * @property {boolean} success - Request success
 * @property {Result} - Result object
 * 
 * @returns {ReturnObject} - ReturnObject object
 */
const getSingleItem = (cid: any, account: any) =>
	axios
		.get(`/item/${cid}`, { headers: { Address: account } })
		.then((res) => res.data.result)
		.catch((err) => console.log(err));

/**
 * API call function for updating item infomation
 * @param {string} cid 
 * 			Item cid
 * @param {string} category 
 * 			Item category
 * @param {string} title 
 * 			Item title
 * @param {string} description 
 * 			Item description
 * @param {Array.<string>} images 
 * 			Item images
 * @param {number} price 
 * 			Item price
 * @param {string} address 
 * 			The wallet address of the user who update the item.
 * 			and this wallet address user is owner of item.
 * 
 * @typedef {Object} ReturnObject
 * @property {number} status - HTTP status code
 * @property {boolean} success - Request success
 * @property {string} result - Result message
 * 
 * @returns {ReturnObject} - ReturnObject object
 */
const updateItem = async (
	cid: string,
	category: string,
	title: string,
	description: string,
	images: string[],
	price: number,
	address: string
) => {
	return axios.put('/item/update', {
		cid: cid,
		category: category,
		title: title,
		description: description,
  		images: images,
		price: price,
	  	address: address
	})
	.then((res) => res.data)
	.catch((err) => console.log(err));
};

/**
 * API call function for deleting item
 * @param {string} address 
 * 			The wallet address of the user who delete the item.
 * 			and this wallet address user is owner of item.	
 * @param {string} cid 
 * 			Item cid
 * 
 * 
 * @typedef {Object} ReturnObject
 * @property {number} status - HTTP status code
 * @property {boolean} success - Request success
 * @property {string} result - Result message
 * 
 * @returns {ReturnObject} - ReturnObject object
 */
const deleteItem = async (address: string, cid: string) => {
	return axios.delete(`/item/${cid}/delete`, {
		headers: {
			Address: address
		},
		params: {
			cid: cid
		}
	})
	.then((res) => res.data)
	.catch((err) => console.log(err));
};

/**
 * API call function to set like When user press like button unstarred
 * @param {string} cid 
 * 			The item ipfs cid
 * @param {string} account 
 * 			The user wallet address
 * 
 * @returns {boolean}
 */
const setLikeItem = (cid: any, account: any) =>
	axios
		.post(`/item/${cid}/like`, {
			headers: { Address: account },
		})
		.then((res) => res.data.success)
		.catch((err) => console.log(err));

/**
 * API call function to set unlike when user press like button starred
 * @param {string} cid 
 * 			The item ipfs cid
 * @param {string} account 
 * 			The user wallet address
 * 
 * @returns {boolean}
 */
const setUnlikeItem = (cid: any, account: any) =>
	axios
		.delete(`/item/${cid}/unlike`, {
			headers: { Address: account },
		})
		.then((res) => res.data.success)
		.catch((err) => console.log(err));

const ItemAPI = {
	getSingleItem,
	getMultipleItem,
	updateItem,
	deleteItem,
	setLikeItem,
	setUnlikeItem,
};

export default ItemAPI;
