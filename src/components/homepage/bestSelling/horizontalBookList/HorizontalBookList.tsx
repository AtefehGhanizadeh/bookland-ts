import { Flex, Center, Spinner } from "@chakra-ui/react";
import React from "react";
import HorizontalBookItem from "./HorizontalBookItem";
import useGetBookGroups from "@/src/react-query/hooks/useGetBookGroups";


function HorizontalBookList({searchKey}:{searchKey:string}) {
  const { data:books, isSuccess } =useGetBookGroups(searchKey);
  if (isSuccess&&books) {
    const slicedBooks = books.slice(0, 4);
    return (
      <Flex width="100%" columnGap="20px" justifyContent="center" className="md:flex-row flex-col">
        {slicedBooks.map((book) => (
          <HorizontalBookItem
            id={book.id}
            key={book.id}
            bookname={book.bookname}
            authorname={book.authorname}
            price={book.price}
            bookcoverimage={book.bookcoverimage}
          />
        ))}
      </Flex>
    );
  } else {
    return (
      <Center alignItems="center">
        <Spinner
          thickness="4px"
          speed="1s"
          emptyColor="gray.200"
          color="primary"
          size="xl"
        />
      </Center>
    );
  }
}

export default HorizontalBookList;
