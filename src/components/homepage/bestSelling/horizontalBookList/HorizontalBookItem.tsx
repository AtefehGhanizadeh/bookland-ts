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
} from "@chakra-ui/react";
import Link from "next/link";

interface Props {
  id: number;
  bookname: string;
  authorname: string;
  bookcoverimage: string;
  price: number;
}


function HorizontalBookItem({id,bookcoverimage,bookname,authorname,price}:Props) {
  return (
    <Card w="230px" paddingX="30px" paddingTop="20px">
      <CardBody p="0" display="flex" flexDir="column">
        <Link href={`/books/${id}`}>
          <Image
            src={bookcoverimage}
            alt="Green double couch with wooden legs"
            objectFit="fill"
            w="full"
            h="200px"
            p="0"
          />
        </Link>
        <Stack mt="6" spacing="3" flexGrow="1">
          <Heading size="sm" flexGrow="1">{bookname}</Heading>
          <Text>{authorname}</Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter justifyContent="flex-end" pl="0">
        <Text>
          <span>{price === 0 ? "رایگان" : price}</span>
          <span className="text-[12px] text-[#C8C8C8] font-extrabold">
          {price===0?"":"تومان"}
          </span>
        </Text>
      </CardFooter>
    </Card>
  );
}

export default HorizontalBookItem;
