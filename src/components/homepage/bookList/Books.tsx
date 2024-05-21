import React from "react";
import { Card, Container, Divider, HStack, Heading } from "@chakra-ui/react";
import Link from "next/link";
import { Flex } from "@chakra-ui/react";
import BookList from "./BookList";

interface Props {
  searchKey: string;
  header: string;
}
function Books({ searchKey, header }: Props) {
  return (
    <Card w="100%" roundedBottom="16px" roundedTop="16px" bgColor="white">
      <Container centerContent pt="30px" px="20px" pb="20px" rowGap="16px" maxW="7xl">
        <HStack justifyContent="space-between" w="100%">
          <Heading fontFamily="Vazirmatn" fontSize={{base:"18px",md:"24px"}} fontWeight="semibold" className="whitespace-pre">
            {header}
          </Heading>
          <Flex>
            <Link
              href={`filter/group?group=${searchKey}`}
              className="font-normal text-[13px] md:text-[16px] leading-[25px] text-primary text-right "
            >
              مشاهده همه &#8598;
            </Link>
          </Flex>
        </HStack>
        <Divider borderBottomColor="rgb(226, 232, 240)" />
        <BookList searchKey={searchKey} />
      </Container>
    </Card>
  );
}

export default Books;
