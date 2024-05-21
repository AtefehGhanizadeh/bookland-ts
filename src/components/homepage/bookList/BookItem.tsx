import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Heading,
  Text,
  Stack,
  Divider,
  Flex,
} from "@chakra-ui/react";
import Link from "next/link";

interface Props {
  id: number;
  bookname: string;
  authorname: string;
  bookcoverimage: string;
  price: number;
}

function BookItem({
  id,
  bookcoverimage,
  bookname,
  authorname,
  price,
}: Props) {
  return (
    <Card maxW={{md:"220px"}}>
      <Link href={`/books/${id}`} className="px-[10px] pt-[20px] h-full">
        <Flex flexDir="column" height="full">
          <CardBody
            p="0"
            display="flex"
            flexDir="column"
            flex="1"
          >
            <div className="w-full flex justify-center">
              <div className="w-[100px] h-[150px] sm:w-[180px] sm:h-[200px] md:w-[200px] md:h-[200px]">
                <Image
                  src={bookcoverimage}
                  alt=""
                  objectFit="fill"
                  className="w-[100px] h-[150px] sm:w-[180px] sm:h-[200px] md:w-[200px] md:h-[200px]"
                  p="0"
                />
              </div>
            </div>

            <Stack mt="6" spacing="3" flex="1">
              <Heading size={{base:'xs',md:"sm"}} flex="1" textAlign="right" w="full">
                {bookname}
              </Heading>
              <Text className="text-[13px] md:text-[16px]">{authorname}</Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter justifyContent="flex-end" pl="0">
            <Text>
              <span>{price === 0 ? "رایگان" : price}</span>
              <span className="text-[12px] text-[#C8C8C8] font-extrabold">
                {price === 0 ? "" : "تومان"}
              </span>
            </Text>
          </CardFooter>
        </Flex>
      </Link>
    </Card>
  );
}

export default BookItem;
