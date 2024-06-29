import { Center, Flex, Spinner, Text } from "@chakra-ui/react";
import React from "react";
import BookDetailCard from "@/src/components/bookdetail/BookDetailCard";
import BookDescription from "@/src/components/bookdetail/BookDescription";
import Comment from "@/src/components/bookdetail/Comment";
import BookBuyCard from "@/src/components/bookdetail/BookBuyCard";
import BookDetail from "./BookDetail";
import useGetBookInformation from "@/src/react-query/hooks/useGetBookInformation";
import { useRouter } from "next/router";
import AuthorBooks from "@/src/components/bookdetail/authorBooks";
import CustomCardContainer from "@/src/components/ui/bookDetail/CustomCardContainer";
import SuggestBooks from "./suggestBooks";
import Navbar from "@/src/components/navbar/Navbar";


function BookDetails() {
  const router=useRouter();
  const { data, isLoading, isSuccess, isError } = useGetBookInformation(router.query);

  if (isLoading || isError) {
    return (
      <div className="w-full min-h-screen">
        <div className="mx-auto w-[90%] h-screen py-[50px]">
          <CustomCardContainer>
            <Center alignItems="center">
              {isLoading && (
                <Spinner
                  thickness="4px"
                  speed="0.65s"
                  emptyColor="gray.200"
                  color="primaryBlue"
                  size="xl"
                />
              )}
              {isError && <Text>مشکلی رخ داده است.</Text>}
            </Center>
          </CustomCardContainer>
        </div>
      </div>
    );
  }
  if(isSuccess){

    return (
      <div className="w-full">
        <Navbar/>
        <div className="mx-auto w-[90%] h-full py-[50px]">
          <Flex height="full" gap="20px" className="flex-col lg:flex-row ">
            <Flex className="flex-col lg:w-[65%] gap-[46px]">
              <BookDetailCard book={data} />
              <BookDescription book={data} />
              <AuthorBooks author={data.author_name} />
              <SuggestBooks bookId={data.id}/>
              <Comment bookId={data.id} />
            </Flex>
            <div className="hidden lg:block lg:w-[35%] relative">
              <BookBuyCard book={data} />
              <BookDetail book={data} />
            </div>
          </Flex>
        </div>
      </div>
    );
  }
}

export default BookDetails;
