import React from "react";
import { Checkbox, Center } from "@chakra-ui/react";
import { useState } from "react";
import useAddToBookmark from "@/src/react-query/hooks/useAddToBookmark";
import useRemoveBookmark from "@/src/react-query/hooks/useRemoveBookmark";
import useGetIsBookmark from "@/src/react-query/hooks/useGetIsBookmark";
import { Spinner } from "@chakra-ui/react";

function Like({book_id}:{book_id:number}) {
  const { mutate: addToBookmarks } = useAddToBookmark(book_id);
  const { mutate: removeBookmark } = useRemoveBookmark(book_id);

  const [liked, setLike] = useState<boolean>();

  const { isSuccess,isLoading,isError } = useGetIsBookmark(book_id, setLike);

  const likeHandler = () => {
    if (liked) {
      removeBookmark();
      setLike(false);
    } else {
      addToBookmarks();
      setLike(true);
    }
  };
  return (
    <Center
      width="48px"
      height="48px"
      borderRadius="10px"
      border="1px"
      borderColor="#C8C8C8"
      overflow="hidden"
    >
      {isSuccess && (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill={liked ? "red" : "none"}
            viewBox="0 0 25 24"
            strokeWidth={1.5}
            stroke="red"
            className="w-[30px] h-[30px]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>

          <Checkbox
            _hover={{ backgroundColor: "white" }}
            bgColor="white"
            w="19px"
            h="19px"
            p="5px"
            opacity="0"
            onChange={likeHandler}
            position="absolute"
          />
        </>
      )}
      {(isLoading ||isError) && (
          <Spinner
            thickness="2px"
            speed="0.65s"
            emptyColor="gray.200"
            color="primaryBlue"
            size="sm"
          />
        )}
    </Center>
  );
}

export default Like;
