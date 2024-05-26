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
  key: number;
  bookname: string;
  authorname: string;
  price: number;
  language: string;
  publisher: string;
  bookcoverimage: string;
}

function SuggestedBookItem(props: Props) {
  return (
    <Card w="300px" paddingX="30px" paddingTop="20px">
      <CardBody p="0">
        <Link href={`/books/${props.id}`}>
          <Image
            src={props.bookcoverimage}
            alt="Green double couch with wooden legs"
            objectFit="fill"
            w="full"
            h="317px"
            p="0"
          />
        </Link>

        <Stack mt="6" spacing="3">
          <Heading size="md">{props.bookname}</Heading>
          <Text>{props.authorname}</Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter justifyContent="flex-end" pl="0">
        <Text>
          <span>{props.price}</span>
          <span className="text-[12px] text-[#C8C8C8] font-extrabold">
            تومان
          </span>
        </Text>
      </CardFooter>
    </Card>
  );
}

export default SuggestedBookItem;
