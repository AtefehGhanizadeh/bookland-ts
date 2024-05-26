import React from "react";
import { VStack } from "@chakra-ui/react";
import CommentItem from "./CommentItem";

function CommentList(props) {
  const commentList = props.commentList;
  return (
    <VStack gap="24px" paddingY="24px" paddingX="16px">
      {commentList?.map((comment) => (
        <CommentItem
          key={comment.id}
          bookId={comment.bookid}
          comment={comment.comment}
          username={comment.username}
          createddate={comment.createddate}
        />
      ))}
    </VStack>
  );
}

export default CommentList;
