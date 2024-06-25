export interface Book {
  id: number;
  publisher: string;
  name: string;
  author_name: string;
  translator_name: string;
  released_date: number;
  book_cover_image: string;
  price: number;
  number_of_pages: number;
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
  created_date: string;
  username: string;
}


export interface Comments{
  count:number,
  data:CommentItem[]
  page_index:number
  page_size:number
}

export interface TransactionItem{
  id: number,
          actiontype:"واریز"|"برداشت",
          amount: number,
          is_successful: boolean,
          description:string,
          created_date: Date
}

export interface TransactionInformation{
  page_size: number,
  page_index: number,
  count: number,
  data: TransactionItem[]
}

