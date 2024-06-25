import { Book } from "@/src/helpers/Interfaces";

function filterBooks(value:string,myBooks:Book[]) {
  return (myBooks.filter((book) =>
    book.name.includes(value)
  ));
}

export default filterBooks;
