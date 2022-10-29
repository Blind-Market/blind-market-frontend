import axios from "axios";

const getChatRoom = (userAccount: string, opponentNickname: string) => {
	axios
		.get(`/chat`, {
			headers: { Address: userAccount },
			params: {
				opponentNickname: opponentNickname,
			},
		})
		.then((res) => res.data.result)
		.catch((err) => console.log(err));
};

const ChatAPI = getChatRoom;

export default ChatAPI;
