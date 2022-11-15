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

// /**
//  * API call function for getting a user information
//  * @param {string} admin_key 
//  * 			Authorized key for admin
//  * @param {string} nickname 
//  * 			User nickname gotten infomation
//  * 
//  * @typedef {Object} Result
//  * @property {string} address - User wallet address
//  * @property {string} privateKey - User private key
//  * @property {Array.<string>} - Items posted by user
//  * @property {string} nickname - User nickname
//  * @property {string} createdAt - Date created
//  * @property {string} updateAt - Date updated
//  * @property {string} deletedAt - Date deleted
//  * 
//  * @typedef {Object} ReturnObject
//  * @property {number} status - HTTP status code
//  * @property {boolean} success - Request seccess
//  * @property {Result} result - Result object
//  * 
//  * @returns {ReturnObject} - ReturnObject object
//  */
// const getUserInfo = async (admin_key: string, nickname: string) => {
// 	return axios.get('/user/info', {
// 		headers: {
// 			Authorized: admin_key
// 		},
// 		params: {
// 			nickname: nickname
// 		}
// 	})
// 	.then((res) => res.data)
// 	.catch((err) => console.log(err));
// };

/**
 * API call function for updating user nickname
 * @param {string} address
 * 			The wallet address of the user who wants to change the nickname
 * @param {string} nickname
 * 			New nickname wanting to change
 * 
 * @typedef {Object} ReturnObject
 * @property {number} status - HTTP status code
 * @property {boolean} success - Request success
 * @property {string} result - result message
 * 
 * @returns {ReturnObject} - ReturnObject object
 */
const updateUser = async (address: string, nickname: string) => {
	return axios.put('/user/update', {
	  nickname: nickname
	}, {
	  headers: {
		Address: address
	  }
	})
	.then((res) => res.data)
	.catch((err) => console.log(err));
};

// // user address 와 User wallet address는 다른 것인지?
// /** 
//  * API call function for deleting user
//  * @param {string} address 
//  * 			The wallet address of the user to be deleted
//  * 
//  * @typedef {Object} ReturnObject
//  * @property {number} status - HTTP status code
//  * @property {boolean} success - Request success
//  * @property {string} result - result message
//  * 
//  * @returns {ReturnObject} - ReturnObject object
//  */
// const deleteUser = async (address: string) => {
// 	return axios.delete('/user/delete', {
// 		headers: {
// 			Address: address
// 		}
// 	})
// 	.then((res) => res.data)
// 	.catch((err) => console.log(err));
// };

const checkNickname = async (nickname: string): Promise<any> => {
	axios
		.get(`/check_nickname/${nickname}`)
		.then((res) => {
			const status = res.data.status;
			if (status === 200)
				return true;
			else if (status === 409)
				return false;
			else
				throw new Error("Error : Error is occured when check the user nickname");
		})
		.catch((err) => console.log(err));
};

const UserAPI = {
	createUser,
	// getUserInfo,
	updateUser,
	// deleteUser,
	checkNickname,
};
  
export default UserAPI;
