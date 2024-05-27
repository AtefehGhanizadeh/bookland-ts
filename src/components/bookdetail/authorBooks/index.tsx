import React from "react";
import CustomCardContainer from "@/src/components/ui/bookDetail/CustomCardContainer";
import { Divider, HStack, Heading } from "@chakra-ui/react";
import Link from "next/link";
import { Flex } from "@chakra-ui/react";
import AuthorBooksList from "@/src/components/bookdetail/authorBooks/AuthorBooksList";

function AuthorBooks({ author }: { author: string }) {
  return (
    <CustomCardContainer pt="30px" pr="20px" pl="20px" pb="20px">
      <HStack justifyContent="space-between">
        <Heading
          fontFamily="Vazirmatn"
          fontSize={{ base: "14px", sm: "18px", md: "24px" }}
          fontWeight="semibold"
        >
          دیگر کتاب های این نویسنده
        </Heading>
        <Flex>
          <Link
            href={`/filter/author?author=${author}`}
            className="font-normal whitespace-pre text-[13px] md:text-[16px] leading-[25px] text-primaryBlue text-right "
          >
            مشاهده همه &#8598;
          </Link>
        </Flex>
      </HStack>
      <Divider borderBottomColor="rgb(226, 232, 240)" />
      <AuthorBooksList author={author} />
    </CustomCardContainer>
  );
}

export default AuthorBooks;
