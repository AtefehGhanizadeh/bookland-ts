import React from "react";
import { Container, Divider, HStack, Heading } from "@chakra-ui/react";
import Link from "next/link";
import { Flex } from "@chakra-ui/react";
import HorizontalBookList from "./HorizontalBookList";

interface Props {
  searchKey: string;
  header: string;
}
function HorizontalBooks({ searchKey, header }: Props) {
  return (
    <Container
      maxW="7xl"
      pt="30px"
      pr="20px"
      pl="20px"
      pb="20px"
      rowGap="16px"
      roundedBottom="16px"
      roundedTop="16px"
      bgColor="white"
    >
      <HStack justifyContent="space-between">
        <Heading fontFamily="Vazirmatn" fontSize="24px" fontWeight="semibold">
          {header}
        </Heading>
        <Flex>
          <Link
            href={`filter/group?group=${searchKey}`}
            className="font-normal text-[16px] leading-[25px] text-primary text-right "
          >
            مشاهده همه &#8598;
          </Link>
        </Flex>
      </HStack>
      <Divider borderBottomColor="rgb(226, 232, 240)" />
      <HorizontalBookList searchKey={searchKey} />
    </Container>
  );
}

export default HorizontalBooks;
