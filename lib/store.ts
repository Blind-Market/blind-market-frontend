import create from "zustand";

const useCategory = create<ICategoryStore>((set) => ({
	category: "all",
	setCategory: (select) => {
		set((state) => ({ state, category: select }));
	},
}));

const useAuth = create<IUserInfo>((set) => ({
	Account: "",
	Nickname: "",
	setUserInfo: (account: string, nickname: string) => {
		set((state) => ({ Account: account, Nickname: nickname }));
	},
}));

const useWindowSize = create<IWindowSize>((set) => ({
	innerWidth: 0,
	innerHeight: 0,
	setWindowSize: (innerWidth: number, innerHeight: number) => {
		set((state) => ({ innerWidth: innerWidth, innerHeight: innerHeight }));
	},
}));

const useChatRoom = create<IChatRoom>((set) => ({
	OpponentNickname: "",
	setOpponent: (nickname) => {
		set((state) => ({ OpponentNickname: nickname }));
	},
}));

const StoreAPI = {
	useCategory,
	useAuth,
	useWindowSize,
	useChatRoom,
};

export default StoreAPI;
