import React from "react";
import { Flex } from "@chakra-ui/react";
import Link from "next/link";

interface Props {
  key: number;
  id: number;
  img: string;
  name: string;
  author: string;
}
function BestSellingItem({id,img,name,author}:Props) {
  return (
    <Flex flexDirection="column" gap="8px" justifyContent="center" alignItems="center">
      <Link href={`books/${id}`}>
        <div className="w-[80px] h-[100px] md:w-[150px] md:h-[200px] lg:w-[204px] lg:h-[317px] rounded overflow-hidden">
          <img className="w-[80px] h-[100px] md:w-[150px] md:h-[200px] lg:w-[204px] lg:h-[317px]" src={img} />
        </div>
      </Link>
      <Flex gap="8px" flexDir="column">
        <p className="text-[13px] md:text-[18px] lg:text-[24px] font-bold text-white whitespace-pre text-center">{name}</p>
        <p className="text-[13px] md:text-[14px] lg:text-[16px] font-normal text-white whitespace-pre text-center">{author}</p>
      </Flex>
    </Flex>
  );
}

export default BestSellingItem;
