import React, { useRef } from "react";
import CustomCardContainer from "../ui/bookDetail/CustomCardContainer";
import {
  HStack,
  VStack,
  Textarea,
  Center,
  Box,
  Spinner,
} from "@chakra-ui/react";
import CommentList from "./CommentList";
import Rating from "./Rating";
import { ChevronRightIcon, ChevronLeftIcon } from "@chakra-ui/icons";
import { useState } from "react";
import useGetComments from "@/react-query/hooks/useGetComments";
import useSendComments from "@/react-query/hooks/useSendComments";
import useSendReview from "@/react-query/hooks/useSendReview";
import Cookies from "js-cookie";
import useShowToast from "../ui/useShowToast";
function Comment({bookId}:{bookId:number}) {
  const token = Cookies.get("token");
  const showToast = useShowToast();
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [review, setReview] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isSuccess,isError,isLoading } = useGetComments(bookId, currentPage);
  const { mutate:sendComment } = useSendComments(bookId, currentPage);
  const { mutate: sendReview } = useSendReview(bookId);

  let pageButtons;
  if (isSuccess) {
    const totalPages = data.data.count;
    pageButtons = Array.from(
      { length: Math.min(totalPages) },
      (_, index) => index + 1
    );
  }

  const submitHandler = (e) => {
    e.preventDefault();
      if (token) {
      if (textareaRef.current?.value.trim().length === 0 && review === 0) {
        showToast("نظری برای ثبت وجود ندارد.")
      } else{
        if (textareaRef.current?.value.trim().length === 0) {
        sendReview({ id: bookId, value: review });
        setReview(0)
      } else if (review === 0) {
        sendComment({ id: bookId, value: textareaRef.current?.value });
        textareaRef.current.value=''
      } else {
        sendReview({ id: bookId, value: review });
        sendComment({ id: bookId, value: textareaRef.current?.value });
        textareaRef.current.value=''
        // setReview(0)
      }
      }
    }
    else{
      showToast("وارد شوید!","info")
    }
    
  };

  return (
    <CustomCardContainer pt="16px" pb="16px" pr="20px" pl="20px">
      <div>
        <VStack gap="16px" paddingBottom="16px">
          <HStack justifyContent="space-between" width="100%">
            <VStack alignItems="flex-start">
              <p className="text-[20px] font-medium">
                به این کتاب چه امتیازی میدی؟
              </p>
              <p className="text-[16px] font-normal">
                بقیه رو از نظرت با خبر کن!
              </p>
            </VStack>
            <Rating setReview={setReview} rate={review}/>
          </HStack>
          <form className="flex flex-col w-full gap-6" onSubmit={submitHandler}>
            <Textarea
              resize="none"
              h="162px"
              w="full"
              borderRadius="12px"
              border="1px"
              borderColor="primary"
              placeholder="نظر من اینه که..."
              ref={textareaRef}
            />
            <button
              type="submit"
              className="w-full bg-primary rounded-xl px-[44px] py-[10px] text-white text-[16px] font-medium"
            >
              ثبت نظر
            </button>
          </form>
        </VStack>
        {isSuccess && (
          <>
            <CommentList commentList={data.data.data} />
            <Center marginTop="30px">
              <Box
                dir="ltr"
                display="flex"
                justifyContent="center"
                alignItems="center"
                gap="16px"
              >
                <button
                  style={{
                    background: "rgba(87, 93, 251, 0.11)",
                    width: "24px",
                    height: "24px",
                    borderRadius: "50%",
                  }}
                  onClick={() => setCurrentPage((prev) => prev - 1)}
                  disabled={currentPage === 1}
                >
                  <ChevronLeftIcon style={{ color: "#575DFB" }} />
                </button>

                {pageButtons.map((page) => (
                  <button
                    style={{
                      fontSize: "16px",
                      fontWeight: "400",
                      textDecoration:
                        currentPage === page ? "underline" : "none",
                      color: "#575DFB",
                    }}
                    key={page}
                    onClick={() => {
                      setCurrentPage(page);
                    }}
                    disabled={currentPage === page}
                  >
                    {page}
                  </button>
                ))}

                <button
                  style={{
                    background: "rgba(87, 93, 251, 0.11)",
                    width: "24px",
                    height: "24px",
                    borderRadius: "50%",
                  }}
                  onClick={() => {
                    setCurrentPage((prev) => prev + 1);
                  }}
                  disabled={currentPage === data.data.count}
                >
                  <ChevronRightIcon style={{ color: "#575DFB" }} />
                </button>
              </Box>
            </Center>
          </>
        )}
        {(isError || isLoading) && (
            <Center alignItems="center">
              <Spinner
                thickness="4px"
                speed="1s"
                emptyColor="gray.200"
                color="primary"
                size="xl"
              />
            </Center>
          )}
      </div>
    </CustomCardContainer>
  );
}

export default Comment;
