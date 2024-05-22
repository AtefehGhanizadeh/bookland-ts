export interface Book {
    id: number;
    publisher: string;
    bookname: string;
    authorname: string;
    translatorname: string;
    releaseddate: number;
    bookcoverimage: string;
    price: number;
    numberofpages: number;
    language: string;
  }


 export interface Result{
      error_code: string;
      error_message: string;
      errors: string;

  }
