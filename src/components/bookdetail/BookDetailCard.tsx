import { Flex, Image, Stack, Heading, HStack, Divider } from "@chakra-ui/react";
import CustomCardContainer from "../ui/bookDetail/CustomCardContainer";
import Stars from "./Stars";

import useGetBookCategory from "@/src/react-query/hooks/useGetBookCategory";
import Like from "@/src/components/ui/bookDetail/Like";
import Cookies from "js-cookie";
import { Book } from "@/src/helpers/Interfaces";
import BookBuy from "./BookBuy";

function BookDetailCard({book}:{book:Book}) {
  const { data } = useGetBookCategory(book.id);
  const token=Cookies.get("token")

  return (
    <CustomCardContainer pt="30px" pr="20px" pl="20px" pb="30px" height={{lg:"315px"}}>
      <Flex className="flex-col lg:flex-row gap-[30px] items-center">
        <div className="w-[250px] h-[300px] lg:w-[200px] xl:w-[250px] lg:h-[339px] lg:absolute top-[-12px] rounded-xl overflow-hidden shadow-[2px_3px_14px_0px_#00000038]">
          <Image
            objectFit="fill"
            className="w-[250px] h-[300px] lg:w-[250px] lg:h-[339px]"
            src={book.book_cover_image}
          />
        </div>
        <Flex width="100%" className="lg:mr-[210px] xl:mr-[280px] lg:h-[300px]">
          <Stack spacing="3" rowGap="18px" flexGrow="1">
            <Heading
              fontFamily="Vazirmatn"
              fontWeight="extrabold"
              fontSize={{base:"18px",xl:"24px"}}
            >
              {book.name}
            </Heading>
            <Stars book_id={book.id} />
            <HStack gap="10px">
            {data&&data.map((cat) => (
              <div key={Math.random()} className="w-[65px] h-[27px] bg-[#575DFB1A] border-[1px] border-primary rounded-lg flex justify-center items-center ">
                <span className="text- text-[12px] font-medium">
                  {cat}
                </span>
              </div>
            ))}
            </HStack>

            <Stack rowGap="20px" flexGrow={{lg:"1"}}>
              <span className="text-[13px] lg:text-[16px] font-medium text-[#000015]">
                زبان:&nbsp;{book.language}
              </span>
              <span className="text-[13px] lg:text-[16px] font-medium text-[#000015]">
                نویسنده:&nbsp;{book.author_name}
              </span>
              <span className="text-[13px] lg:text-[16px] font-medium text-[#000015]">
                ناشر:&nbsp;{book.publisher}
              </span>
            </Stack>
          </Stack>
          {token&&<Like book_id={book.id} />}
        </Flex>
        <Divider className="lg:hidden"/>
        <div className="w-full lg:hidden">
          <BookBuy price={book.price} id={book.id}/>
        </div>
        
      </Flex>
    </CustomCardContainer>
  );
}

export default BookDetailCard;
