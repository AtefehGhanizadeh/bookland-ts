export interface Book {
  id: number;
  book_id: number;
  publisher: string;
  bookname: string;
  authorname: string;
  translatorname: string;
  releaseddate: number;
  bookcoverimage: string;
  price: number;
  numberofpages: number;
  language: string;
  description: string;
}

export interface Result {
  error_code: string;
  error_message: string;
  errors: string;
}

export interface Response<T> {
  data: T;
  result: Result;
}

export interface CommentItem {
  id: number;
  bookid: number;
  comment: string;
  createddate: string;
  username: string;
}


export interface Comments{
  count:number,
  data:CommentItem[]
  page_index:number
  page_size:number
}



