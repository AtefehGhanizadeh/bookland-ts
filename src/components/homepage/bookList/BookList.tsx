import {Center, Spinner } from "@chakra-ui/react";
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
            bookname={book.bookname}
            authorname={book.authorname}
            price={book.price}
            bookcoverimage={book.bookcoverimage}
          />
        ))}
      </div>
    );
  } else {
    return (
      <Center alignItems="center">
        <Spinner
          thickness="4px"
          speed="1s"
          emptyColor="gray.200"
          color="primaryBlue"
          size="xl"
        />
      </Center>
    );
  }
}

export default BookList;
