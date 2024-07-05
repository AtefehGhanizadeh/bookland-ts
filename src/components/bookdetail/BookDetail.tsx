import React from "react";
import {
  Divider,
  Center,
  Flex,
  Image,
  Stack,
  Heading,
  Spinner,
} from "@chakra-ui/react";
import CustomCardContainer from "@/src/components/ui/bookDetail/CustomCardContainer";
import Stars from "@/src/components/bookdetail/Stars";

import useIsBookBought from "@/src/react-query/hooks/useIsBookBought";

import Cookies from "js-cookie";
import { Book } from "@/src/helpers/Interfaces";
import BookBuy from "./BookBuy";
import useShowToast from "../ui/useShowToast";
import { useRouter } from "next/router";
function BookDetail({ book }: { book: Book }) {
  const token = Cookies.get("token");
  const showToast = useShowToast();
  const { push } = useRouter();
  const { data, isSuccess, isError, isLoading, error } = useIsBookBought(
    book.id
  );
  if (isError) {
    if (error.response?.data.result?.error_message) {
      showToast(error.response!.data.result?.error_message);
      if (error.response?.status === 401 || error.response?.status === 403) {
        token ? Cookies.remove("token") : "";
        push("/login");
      }
    } else {
      showToast("مشکلی رخ داده است.");
    }
  }
  if (!token) {
    return (
      <CustomCardContainer
        pt="20px"
        pb="20px"
        pr="16px"
        pl="16px"
        position="sticky"
        top="150px"
        marginTop="46px"
      >
        <Flex gap="28px">
          <div className="rounded-xl overflow-hidden w-[300px] h-[250px]">
            <Image
              width="170px"
              height="250px"
              objectFit="fill"
              src={book.book_cover_image}
            />
          </div>
          <Flex width="100%">
            <Stack spacing="3" rowGap="18px" flexGrow="1">
              <Heading
                fontFamily="Vazirmatn"
                fontWeight="extrabold"
                fontSize={{ base: "18px", xl: "20px" }}
              >
                {book.name}
              </Heading>
              <Stars book_id={book.id} />
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
          </Flex>
        </Flex>
        <Divider borderBottomColor="rgb(226, 232, 240)" />
        <BookBuy price={book.price} id={book.id} />
      </CustomCardContainer>
    );
  }
  if (isSuccess && !data) {
    return (
      <CustomCardContainer
        pt="20px"
        pb="20px"
        pr="16px"
        pl="16px"
        position="sticky"
        top="150px"
        marginTop="46px"
      >
        <Flex gap="28px">
          <div className="rounded-xl overflow-hidden w-[300px] h-[250px]">
            <Image
              width="170px"
              height="250px"
              objectFit="fill"
              src={book.book_cover_image}
            />
          </div>
          <Flex width="100%">
            <Stack spacing="3" rowGap="18px" flexGrow="1">
              <Heading
                fontFamily="Vazirmatn"
                fontWeight="extrabold"
                fontSize={{ base: "18px", xl: "20px" }}
              >
                {book.name}
              </Heading>
              <Stars book_id={book.id} />
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
          </Flex>
        </Flex>
        <Divider borderBottomColor="rgb(226, 232, 240)" />
        <BookBuy price={book.price} id={book.id} />
      </CustomCardContainer>
    );
  } else if (isError || isLoading) {
    return (
      <CustomCardContainer
        pt="20px"
        pb="20px"
        pr="16px"
        pl="16px"
        position="sticky"
        top="5px"
        marginTop="46px"
      >
        <Center alignItems="center">
          <Spinner
            thickness="4px"
            speed="1s"
            emptyColor="gray.200"
            color="primaryBlue"
            size="xl"
          />
        </Center>
      </CustomCardContainer>
    );
  }
}

export default BookDetail;
