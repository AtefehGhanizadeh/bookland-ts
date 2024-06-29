import AuthorBookItem from "@/src/components/bookdetail/BookItem";
import { Grid, Center, Spinner } from "@chakra-ui/react";
import React from "react";
import useGetAuthorBooks from "@/src/react-query/hooks/useGetAuthorBooks";

function AuthorBooksList({author}:{author:string}) {
  const { data, isSuccess } = useGetAuthorBooks(author);
  if (isSuccess) {
    const slicedBooks = data.slice(0, 2);
    return (
      <Grid className=" gap-[20px] auto-rows-fr" width="100%">
        {slicedBooks.map((book) => (
          <AuthorBookItem
            id={book.id}
            key={book.id}
            bookname={book.name}
            authorname={book.author_name}
            price={book.price}
            language={book.language}
            publisher={book.publisher}
            bookcoverimage={book.book_cover_image}
          />
        ))}
      </Grid>
    );
  } else {
    return(
    <Center alignItems="center">
      <Spinner
        thickness="4px"
        speed="1s"
        emptyColor="gray.200"
        color="primaryBlue"
        size="xl"
      />
    </Center>
    )
  }
}

export default AuthorBooksList;
