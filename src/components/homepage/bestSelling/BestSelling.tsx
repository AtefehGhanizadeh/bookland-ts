import React from "react";
import { Container, Flex, Heading, Skeleton } from "@chakra-ui/react";
import useGetBookGroups from "@/src/react-query/hooks/useGetBookGroups";
import BestSellingItem from "./BestSellingItem";

function BestSelling() {
  const { data:books,error, isSuccess,isLoading } = useGetBookGroups("best-sellers");

  return (
    <div className="bg-[#382F79]">
      <Container maxW="7xl" w="90%" className="pt-[30px] pb-[50px]">
        <Flex flexDirection="column" gap="20px">
          <Heading
            color="white"
            fontSize={{base:"20px",md:"25px",lg:"30px"}}
            fontFamily="Vazirmatn"
            fontWeight="medium"
            width="full"
          >
            پرفروش ترین ها
          </Heading>
          <Flex width="full" alignItems="center" className="md:justify-end md:gap-[30px] gap-[10px] justify-center">
            {isSuccess&&(books.slice(0,3).map(book=><BestSellingItem key={book.id} id={book.id} img={book.bookcoverimage} name={book.bookname} author={book.authorname}/>))}
          </Flex>
          {(error||isLoading)&&<Flex width="full" alignItems="center" className="md:justify-end md:gap-[30px] gap-[10px] justify-center">
            <Skeleton className="w-[80px] h-[100px] md:w-[150px] md:h-[200px] lg:w-[204px] lg:h-[317px] rounded overflow-hidden"/>
            <Skeleton className="w-[80px] h-[100px] md:w-[150px] md:h-[200px] lg:w-[204px] lg:h-[317px] rounded overflow-hidden"/>
            <Skeleton className="w-[80px] h-[100px] md:w-[150px] md:h-[200px] lg:w-[204px] lg:h-[317px] rounded overflow-hidden"/>
          </Flex>}
        </Flex>
      </Container>
    </div>
  );
}

export default BestSelling;
