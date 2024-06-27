import React from "react";
import { Flex, Image } from "@chakra-ui/react";
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
    <Flex flexDirection="column" gap="8px" className="flex-1 md:flex-grow-0 items-center" >
      <Link href={`books/${id}`}>
        <div className="w-[80px] h-[100px] md:w-[150px] md:h-[200px] lg:w-[204px] lg:h-[317px] rounded overflow-hidden">
          <Image className="w-[80px] h-[100px] md:w-[150px] md:h-[200px] lg:w-[204px] lg:h-[317px]" src={img} />
        </div>
      </Link>
      <Flex gap="8px" flexDir="column" flex="1" >
        <p className="text-[13px] md:text-[18px] lg:text-[24px] font-bold text-white text-center flex-1">{name}</p>
        <p className="text-[13px] md:text-[14px] lg:text-[16px] font-normal text-white whitespace-pre text-center">{author}</p>
      </Flex>
    </Flex>
  );
}

export default BestSellingItem;
