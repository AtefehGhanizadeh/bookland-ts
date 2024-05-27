import { Grid, Center, Spinner } from "@chakra-ui/react";
import React from "react";
import SuggestedBookItem from "@/src/components/bookdetail/BookItem";
import useGetCategoryBooks from "@/src/react-query/hooks/useGetCategoryBooks";

function SuggestedBooksList({category}:{category:string}) {
  const { data, isSuccess } = useGetCategoryBooks(category);
  if (isSuccess) {
    const slicedBooks = data.slice(0, 2);
    return (
      <Grid className=" gap-[20px] auto-rows-fr" width="100%">
        {slicedBooks.map((book) => (
          <SuggestedBookItem
            id={book.id}
            key={book.id}
            bookname={book.bookname}
            authorname={book.authorname}
            price={book.price}
            language={book.language}
            publisher={book.publisher}
            bookcoverimage={book.bookcoverimage}
          />
        ))}
      </Grid>
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

export default SuggestedBooksList;
