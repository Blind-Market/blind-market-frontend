import axios from "axios";

/**
 * API call function for creating the user
 * @param {string} address
 * 			New user's wallet address
 * @param {string} nickname
 * 			New user's nickname
 * 
 * @typedef {Object} ReturnObject
 * @property {number} status - HTTP status code
 * @property {boolean} success - Request seccess
 * @property {string} result - Result message
 * 
 * @returns {ReturnObject} - ReturnObject object
 */
const createUser = async (address: string, nickname: string) => {
	return axios.post('/user/create', {
		address: address,
		nickname: nickname
	})
	.then((res) => res.data)
	.catch((err) => console.log(err));
};

const checkNickname = async (nickname: string): Promise<any> => {
	axios
		.get(`/check_nickname/${nickname}`)
		.then((res) => {
			return res.data.success;
		})
		.catch((err) => console.log(err));
};

const UserAPI = {
	createUser,
	checkNickname,
};
  
export default UserAPI;
