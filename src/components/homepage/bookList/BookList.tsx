import {Center, Skeleton, Spinner } from "@chakra-ui/react";
import React from "react";
import BookItem from "./BookItem";
import useGetBookGroups from "@/src/react-query/hooks/useGetBookGroups";


function BookList({searchKey}:{searchKey:string}) {
  const { data:books, isSuccess } =useGetBookGroups(searchKey);
  if (isSuccess&&books) {
    const slicedBooks = books.slice(0, 4);
    return (
      <div className="grid grid-cols-2 grid-rows-2 gap-[20px] md:grid-cols-4 md:grid-rows-1 ">
        {slicedBooks.map((book) => (
          <BookItem
            id={book.id}
            key={book.id}
            bookname={book.name}
            authorname={book.author_name}
            price={book.price}
            bookcoverimage={book.book_cover_image}
          />
        ))}
      </div>
    );
  } else {
    return (
      <div className="grid grid-cols-2 grid-rows-2 gap-[20px] md:grid-cols-4 md:grid-rows-1 ">
        {[1,1,1,1].map(item=><Skeleton className=" max-w-[220px] w-[120px] h-[150px] sm:w-[200px] sm:h-[200px] md:w-[220px] md:h-[200px]" key={Math.random()}/>)}
      </div>
    );
  }
}

export default BookList;
