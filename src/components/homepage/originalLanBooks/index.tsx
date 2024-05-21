import { Flex, Heading } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import image from '@/public/assets/images/originalLanImage.jpg'
import Image from "next/image";

const OriginalLanBooks = () => {
  return (
    <div className=" w-full h-[300px] relative rounded-2xl overflow-hidden">
      <Image
        className="w-full h-full brightness-[0.3] absolute z-[-1]"
        alt=''
        src={image}
      />
      <div className="px-[20px] md:px-[60px] pt-[40px] pb-[30px] h-full">
        <Flex flexDir="column" justifyContent="space-between" height="full">
          <Heading
            color="white"
            fontFamily="Vazirmatn"
            fontWeight="semibold"
            fontSize={{ base: "20px", md: "35px" }}
          >
            کتاب های زبان اصلی
          </Heading>
          <div className="text-left">
            <Link href={`filter/group?group=language-original`}>
              <button className="bg-[#FAFAFA] px-[30px] py-[5px] md:px-[70px] md:py-[10px] rounded-xl font-semibold text-[15px] md:text-[20px] text-[#05000E]">
                مشاهده
              </button>
            </Link>
          </div>
        </Flex>
      </div>
    </div>
  );
};

export default OriginalLanBooks;
