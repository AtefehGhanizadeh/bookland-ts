import React from 'react'
import { HStack, VStack, Image } from "@chakra-ui/react";
import { CommentItem } from '@/src/helpers/Interfaces';

function CommentItems({comment}:{comment:CommentItem}) {
  return (
    <VStack alignItems="flex-start" gap="20px" w="full">
    <HStack>
      <div className="rounded-full overflow-hidden w-[31px] h-[31px]">
        <Image className="w-[31px] h-[31px]" src="https://platformboy.com/wp-content/uploads/2022/10/%D8%B9%DA%A9%D8%B3-%D9%BE%D8%B1%D9%88%D9%81%D8%A7%DB%8C%D9%84-%D8%AE%D8%A7%D9%86%D9%85-%D8%A8%D8%A7-%D9%BE%DB%8C%D8%B1%D8%A7%D9%87%D9%86-%D9%82%D8%B1%D9%85%D8%B2.png" />
      </div>
      <span className='text-[16px] font-medium'>{comment.username}</span>
      <span className='text-[16px] font-normal text-[#515457]'>{new Date(comment.created_date).toLocaleDateString('fa-IR')}</span>
    </HStack>
    <p className='text-[16px] font-light tex-[#515457]'>
      {comment.comment}
    </p>
  </VStack>
  )
}

export default CommentItems