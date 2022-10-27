import axios from "axios";

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

const getSingleItem = (cid: any, account: any) =>
  axios
    .get(`/item/${cid}`, { headers: { Address: account } })
    .then((res) => res.data.result)
    .catch((err) => console.log(err));

const updateItem = async () => {};

const deleteItem = async () => {};

const searchItemsByCondition = async () => {};

const setLikeItem = async (cid: any, account: any) =>
  axios
    .post(`/item/${cid}/starred`, {
      headers: { Address: account },
    })
    .then((res) => res.data.success)
    .catch((err) => console.log(err));

const setUnlikeItem = async (cid: any, account: any) =>
  axios
    .delete(`/item/${cid}/unstarred`, {
      headers: { Address: account },
    })
    .then((res) => res.data.success)
    .catch((err) => console.log(err));

const ItemAPI = {
  getSingleItem,
  getMultipleItem,
  searchItemsByCondition,
  updateItem,
  deleteItem,
  setLikeItem,
  setUnlikeItem,
};

export default ItemAPI;
