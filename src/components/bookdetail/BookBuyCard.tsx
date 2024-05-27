import React, { useState } from "react";
import Link from "next/link";
import CustomCardContainer from "@/src/components/ui/bookDetail/CustomCardContainer";
import {
  Divider,
  HStack,
  VStack,
  Button,
  Center,
  Text,
  Spinner,
} from "@chakra-ui/react";

import useIsBookBought from "@/src/react-query/hooks/useIsBookBought";

import Cookies from "js-cookie";
import { Book } from "@/src/helpers/Interfaces";
import BookBuy from "@/src/components/bookdetail/BookBuy";

function BookBuyCard({book}:{book:Book}) {
  const token = Cookies.get("token");
  const { data, isSuccess, isError, isLoading } = useIsBookBought(
    book.book_id
  );

  if (!token) {
    return (
      <CustomCardContainer
        height="315px"
        pt="20px"
        pb="20px"
        pr="16px"
        pl="16px"
      >
        <BookBuy price={book.price} id={book.book_id} />
      </CustomCardContainer>
    );
  } else if (isSuccess) {
    return (
      <>
        {!data.data && (
          <CustomCardContainer
            height="315px"
            pt="20px"
            pb="20px"
            pr="16px"
            pl="16px"
          >
           <BookBuy price={book.price} id={book.book_id}/>
          </CustomCardContainer>
        )}
        {data.data && (
          <CustomCardContainer pt="20px" pb="20px" pr="16px" pl="16px">
            <VStack
              h="full"
              justifyContent="space-between"
              gap="20px"
              alignItems="center"
            >
              <Text
                fontFamily="Vazirmatn"
                fontSize="24px"
                fontWeight="extrabold"
              >
                این کتاب رو قبلا خریداری کردی!
              </Text>
              <Link className="w-full h-[49px] bg-primary rounded-xl px-[44px] py-[10px] text-white text-[16px] font-medium text-center"
              href={`/original-pdf/${book.id}`}>
                مشاهده فایل
              </Link>
            </VStack>
          </CustomCardContainer>
        )}
      </>
    );
  } else if (isError || isLoading) {
    return (
      <CustomCardContainer
        height="315px"
        pt="20px"
        pb="20px"
        pr="16px"
        pl="16px"
      >
        <Center height="full">
          <Spinner
            thickness="4px"
            speed="1s"
            emptyColor="gray.200"
            color="primaryBlue"
            size="xl"
          />
        </Center>
      </CustomCardContainer>
    );
  }
}

export default BookBuyCard;
