import BookCard from "@/src/components/ui/userProfile/BookCard";
import { Flex } from "@chakra-ui/react";
import React from "react";
import filterBooks from "@/src/helpers/filterBooks";
import { Book } from "@/src/helpers/Interfaces";

function BooksList({
  type,
  searchValue,
  booksArray,
}: {
  type: "favbooks" | "mybooks";
  searchValue: string;
  booksArray: Book[];
}) {

  const filteredBooks = filterBooks(searchValue, booksArray);
  if (filteredBooks.length === 0) {
    return <p>کتابی یافت نشد.</p>;
  }
  return (
    <Flex flexDir="column" width="100%" rowGap="20px">
      {filteredBooks.map((book) => (
        <BookCard book={book} key={book.book_id} type={type} />
      ))}
    </Flex>
  );
}

export default BooksList;
