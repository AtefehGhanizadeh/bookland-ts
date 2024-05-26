import { Flex, Image, Stack, Heading, HStack } from "@chakra-ui/react";
import CustomCardContainer from "../ui/bookDetail/CustomCardContainer";
import Stars from "./Stars";

import useGetBookCategory from "@/src/react-query/hooks/useGetBookCategory";
import Like from "@/src/components/ui/bookDetail/Like";
import Cookies from "js-cookie";
import { Book } from "@/src/helpers/Interfaces";

function BookDetailCard({book}:{book:Book}) {
  const { data } = useGetBookCategory(book.book_id);
  const token=Cookies.get("token")

  return (
    <CustomCardContainer pt="30px" pr="20px" pl="20px" pb="30px" height={{md:"315px"}}>
      <Flex className="flex-col md:flex-row gap-[30px] items-center">
        <div className="w-[250px] h-[300px] md:w-[250px] md:h-[339px] md:absolute top-[-12px] rounded-xl overflow-hidden shadow-[2px_3px_14px_0px_#00000038]">
          <Image
            objectFit="fill"
            className="w-[250px] h-[300px] md:w-[250px] md:h-[339px]"
            src={book.bookcoverimage}
          />
        </div>
        <Flex width="100%" className="md:mr-[280px] md:h-[300px]">
          <Stack spacing="3" rowGap="18px" flexGrow="1">
            <Heading
              fontFamily="Vazirmatn"
              fontWeight="extrabold"
              fontSize={{base:"18px",md:"24px"}}
            >
              {book.bookname}
            </Heading>
            <Stars book_id={book.book_id} />
            <HStack gap="10px">
            {data&&data.map((cat) => (
              <div key={Math.random()} className="w-[65px] h-[27px] bg-[#575DFB1A] border-[1px] border-primary rounded-lg flex justify-center items-center ">
                <span className="text-primary text-[12px] font-medium">
                  {cat}
                </span>
              </div>
            ))}
            </HStack>

            <Stack rowGap="20px" flexGrow={{md:"1"}}>
              <span className="text-[13px] md:text-[16px] font-medium text-[#000015]">
                زبان:&nbsp;{book.language}
              </span>
              <span className="text-[13px] md:text-[16px] font-medium text-[#000015]">
                نویسنده:&nbsp;{book.authorname}
              </span>
              <span className="text-[13px] md:text-[16px] font-medium text-[#000015]">
                ناشر:&nbsp;{book.publisher}
              </span>
            </Stack>
          </Stack>
          {token&&<Like book_id={book.book_id} />}
        </Flex>
      </Flex>
    </CustomCardContainer>
  );
}

export default BookDetailCard;
