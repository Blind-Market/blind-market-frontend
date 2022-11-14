export declare global {
	interface IOpponent {
		nickname: string;
		last_chatted_date: Date;
		last_chatted_msg: string;
	}

	interface IProduct {
		cid: string;
		title: string;
		thumbnail_uri: string;
		price: number;
		starred: number;
	}

	// interface for user data gotten from contract
	interface IUserData {
		gradePoint: number;
		grade: number;
		nickname: string;
	}

	// interface for trade information gotten from contract
	interface IRequest {
		token_id: number;
		hash: number;
		phase: number;
		buyerAddress: string;
		sellerAddress: string;
		buyer: string;
		seller: string;
	}

	interface ITransactionLog {
		product_name: string;
		opponent: string;
		price: string;
		type: string;
		status: transactionState;
	}

	interface IItem {
		cid: string;
		title: string;
		nickname: string;
		// grade: string;
		price: number;
		description: string;
		thumbnailUri: string;
		images: string[];
		category: string;
		starred: number;
		view: number;
	}

	interface ICategoryStore {
		category: string;
		setCategory: (select: string) => void;
	}

	interface IUserInfo {
		Account: string;
		Nickname: string;
		setUserInfo: (id: string, nickname: string) => void;
	}

	interface IWindowSize {
		innerWidth: number;
		innerHeight: number;
		setWindowSize: (innerWidth: number, innerHeight: number) => void;
	}

	interface IChatRoom {
		OpponentNickname: string;
		setOpponent: (nickname: string) => void;
	}
}
