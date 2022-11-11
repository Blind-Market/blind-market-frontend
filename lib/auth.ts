import axios from "axios";

/**
 * API call function for getting a user's private key
 * @param {string} address
 *          User wallet address to get the private key
 * 
 * @typedef {Object} Result
 * @property {string} privateKey - user's private key
 * 
 * @typedef {Object} ReturnObject
 * @property {number} status - HTTP status code
 * @property {boolean} success - Request success
 * @property {Result} result - Result object
 * 
 * @returns {RestunObject} - ReturnObject object
 */
const getPrivateKey = async (address: string) => {
  return axios.post('/private_key', {
    address: address
  })
  .then((res) => res.data)
  .catch((err) => console.log(err));
};

// signature가 body에 있는게 괜찮은지??
/**
 * API call function for double-checking user authorization
 * @param {string} address 
 *          User wallet address to double check
 * @param {string} signature 
 *          User signature to double check
 * 
 * @typedef {Object} ReturnObject
 * @property {number} status - HTTP status code
 * @property {boolean} success - Request success
 * @property {string} result - Result message
 * 
 * @returns {ReturnObject} - ReturnObject object
 */
const doubleCheckUser = async (address: string, signature: string) => {
  return axios.post('/double_check', {
    address: address,
    signature: signature
  })
  .then((res) => res.data)
  .catch((err) => console.log(err));
};

// 유저 주소 + 서명 암호화해서 인증 호출 함수
const login = async (address: string) => {
  const userPrivateKey = await getPrivateKey(address);
  // response error check
  // sign with secret message + private key
  // send signature with api request
  // response error check
  // confirm login
};

const AuthAPI = {
  getPrivateKey,
  doubleCheckUser,
  login,
};

export default AuthAPI;
