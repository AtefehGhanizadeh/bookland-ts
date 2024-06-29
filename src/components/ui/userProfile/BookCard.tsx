import {
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  HStack,
  Flex,
} from "@chakra-ui/react";
import Link from "next/link";
import Like from "../bookDetail/Like";
import { Book } from "@/src/helpers/Interfaces";

function BookCard({book,type}:{book:Book,type:"favbooks"|"mybooks"}) {
  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
      width="100%"
      borderRadius="20px"
    >
      <Stack width="100%" height="100%">
        <CardBody>
          <HStack
            alignItems={{base:"center",sm:"flex-start"}}
            justifyContent="space-between"
            gap="24px"
            flexDir={{base:"column",sm:"row"}}
          >
            <Link href={`/books/${book.id}`}>
              <Image
                src={book.book_cover_image}
                minWidth="214px"
                height="295px"
                alt=""
                borderRadius="12px"
                border="0.5px"
                borderColor="#C8C8C8"
              />
            </Link>
            <Flex gap="20px" flexGrow="1">
            <Stack spacing="3" rowGap="20px" flexGrow="1">
              <Heading fontFamily="Vazirmatn" fontWeight="extrabold" fontSize={{base:"18px",md:"20px"}}>
                {book.name}
              </Heading>
              <HStack alignItems="center">
                <span className="text-[#000015] text-[24px]">
                {book.price===0?"رایگان":book.price}
                </span>
                <span className="text-[#C8C8C8] text-[12px]">{book.price===0?"":"تومان"}</span>
              </HStack>
              <Stack rowGap="20px" flexGrow="1">
                <span className="text-[16px] font-medium text-[#000015]">
                  زبان:&nbsp;{book.language}
                </span>
                <span className="text-[16px] font-medium text-[#000015]">
                  نویسنده:&nbsp;{book.author_name}
                </span>
                <span className="text-[16px] font-medium text-[#000015]">
                  ناشر:&nbsp;{book.publisher}
                </span>
              </Stack>
            </Stack>
           {type==="favbooks"&&<Like book_id={book.id}/>}
            </Flex>
          </HStack>
        </CardBody>
      </Stack>
    </Card>
  );
}

export default BookCard;
