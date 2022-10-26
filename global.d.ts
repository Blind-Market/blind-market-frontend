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

  interface ITransactionLog {
    product_name: string;
    opponent: string;
    date: string;
    price: string;
    type: string;
    status: transactionState;
  }

  interface IItem {
    cid: string;
    title: string;
    seller: string;
    grade: string;
    price: number;
    description: string;
    thumbnail_uri: string;
    content_uri: string[];
    starred: number;
    view: number;
  }
}
