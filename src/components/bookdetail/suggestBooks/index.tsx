import React from "react";
import CustomCardContainer from "@/src/components/ui/bookDetail/CustomCardContainer";
import { Divider, HStack, Heading } from "@chakra-ui/react";
import Link from "next/link";
import { Flex } from "@chakra-ui/react";
import SuggestedBooksList from "@/src/components/bookdetail/suggestBooks/SuggestedBooksList";
import useGetBookCategory from "@/src/react-query/hooks/useGetBookCategory";
function SuggestBooks({bookId}:{bookId:number}) {
  const { data, isSuccess } = useGetBookCategory(bookId);
  if (isSuccess) {
    return (
      <CustomCardContainer pt="30px" pr="20px" pl="20px" pb="20px">
        <HStack justifyContent="space-between">
          <Heading fontFamily="Vazirmatn" fontSize={{ base: "14px", sm: "18px", md: "24px" }} fontWeight="semibold">
            کتاب های پیشنهادی
          </Heading>
          <Flex>
            <Link
              href={`/filter/category?category=${data[0]}`}
              className="font-normal whitespace-pre text-[13px] md:text-[16px] leading-[25px] text-primaryBlue text-right "
            >
              مشاهده همه &#8598;
            </Link>
          </Flex>
        </HStack>
        <Divider borderBottomColor="rgb(226, 232, 240)" />
        <SuggestedBooksList category={data[0].name} />
      </CustomCardContainer>
    );
  }
}

export default SuggestBooks;
