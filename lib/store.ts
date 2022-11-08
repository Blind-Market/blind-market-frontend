/* 상태 관리 파일 */
import create from "zustand";

// 유저가 선택한 카테고리 관리
const useCategory = create<ICategoryStore>((set) => ({
	category: "all",
	setCategory: (select) => {
		set((state) => ({ state, category: select }));
	},
}));

// 유저 인증 정보(로그인) 관리
const useAuth = create<IUserInfo>((set) => ({
	Account: "",
	Nickname: "",
	setUserInfo: (account: string, nickname: string) => {
		set((state) => ({ Account: account, Nickname: nickname }));
	},
}));

// 윈도우 크기 정보 관리
const useWindowSize = create<IWindowSize>((set) => ({
	innerWidth: 0,
	innerHeight: 0,
	setWindowSize: (innerWidth: number, innerHeight: number) => {
		set((state) => ({ innerWidth: innerWidth, innerHeight: innerHeight }));
	},
}));

// 채팅방 상태 관리
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
