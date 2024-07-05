import React from "react";
import { VStack } from "@chakra-ui/react";
import CommentItems from "./CommentItems";
import { Comments } from "@/src/helpers/Interfaces";

function CommentList({ comments }: { comments: Comments }) {
  if (comments.data instanceof Array) {
    return (
      <VStack gap="24px" paddingY="24px" paddingX="16px">
        {comments.data.map((comment) => (
          <CommentItems key={comment.id} comment={comment} />
        ))}
      </VStack>
    );
  } else {
    return <VStack gap="24px" paddingY="24px" paddingX="16px"></VStack>;
  }
}

export default CommentList;
