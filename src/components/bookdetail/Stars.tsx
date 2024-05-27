import React from 'react'
import { HStack,Skeleton } from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons'
import useGetBookReviews from '@/src/react-query/hooks/useGetBookReviews'

function Stars({book_id}:{book_id:number}) {
  const{data,isSuccess}=useGetBookReviews(book_id)
  const starArray=[false,false,false,false,false]
  if (isSuccess){
    const reviewAvg=data.reviewaverage
    let i;
    for(i=0;i<=reviewAvg;i++){
      starArray[i-1]=true
    }
  }
  if (isSuccess){
    return (
      <HStack>
      <StarIcon color={starArray[4]?"yellow.300":"gray.200"} />
      <StarIcon color={starArray[3]?"yellow.300":"gray.200"} />
      <StarIcon color={starArray[2]?"yellow.300":"gray.200"} />
      <StarIcon color={starArray[1]?"yellow.300":"gray.200"} />
      <StarIcon color={starArray[0]?"yellow.300":"gray.200"} />
      <div>
        <span className="text-[#C8C8C8] text-[10px] whitespace-pre">{data.reviewaverage} از {data.reviewcount} نظر</span>
      </div>
    </HStack>
    )
  }else{
    return(
      <Skeleton startColor='gray.100' endColor='gray.200' height='15px' width="150px" />
    )
  }
}

export default Stars