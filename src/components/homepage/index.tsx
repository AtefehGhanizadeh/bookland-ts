import React from "react";
import Books from "@/src/components/homepage/bookList/Books";
import { Flex,Container } from "@chakra-ui/react";
import BestSelling from "@/src/components/homepage/bestSelling/BestSelling"
import image from "@/public/assets/images/Group.png";
import Image from "next/image";
import OriginalLanBooks from "./originalLanBooks";
import FavoriteCategories from "./favoriteCategories";

function HomePage() {
  return (
    <div className="pb-[30px]">
      <div>
        <Container  w="90%" maxW='7xl' centerContent  paddingY="60px" paddingX="0"  >
          <Flex
          width='full'
            alignItems="center"
            className="flex flex-col gap-[80px] md:flex-row md:justify-between"
          >
            <Flex flexDir="column" gap="20px">
              <div className="text-[25px] text-center md:text-right md:text-[30px] lg:text-[40px] font-extrabold text-[#05000E]">
                <p className="whitespace-pre">
                  لذت خوندن کتاب رو همه‌جا
                </p>
                <p>
                  {" "}
                  به خودت هدیه بده!
                </p>
              </div>
              <p className="text-[15px] md:text-[18px] font-normal text-[#05000E]">
                دانلود قانونی بیش از 5000 کتاب متنی با بوکلند
              </p>
            </Flex>
            <Flex>
              <div className="md:pt-[60px] mb-[50px] w-[300px] h-[300px]  lg:w-[400px] lg:h-[400px] ">
                <Image src={image} className="w-[300px] h-[300px] lg:w-[400px] lg:h-[400px]" alt=""/>
              </div>
              <Flex flexDir="column" gap="12px" mr="-70px">
                <Flex flexDir="column" className="md:gap-[8px]">
                  <span className="text-primaryBlue text-[20px] lg:text-[32px] font-semibold">
                    2780+
                  </span>
                  <span className="text-[#05000E]  text-[14px] lg:text-[18px] font-medium ">
                    کتاب با ژانر مختلف
                  </span>
                </Flex>
                <Flex flexDir="column" className="md:gap-[8px]">
                  <span className="text-primaryBlue text-[20px] lg:text-[32px] font-semibold">
                    2780+
                  </span>
                  <span className="text-[#05000E]  text-[14px] lg:text-[18px] font-medium ">
                    کاربر خوشحال
                  </span>
                </Flex>
                <Flex flexDir="column" className="md:gap-[8px]">
                  <span className="text-primaryBlue text-[20px] lg:text-[32px] font-semibold">
                    2780+
                  </span>
                  <span className="text-[#05000E]  text-[14px] lg:text-[18px] font-medium">
                    نویسنده{" "}
                  </span>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Container>
      </div>
      <div>
        <BestSelling />
      </div>
      <div>
        <Flex
          flexDirection="column"
          gap="30px"
          maxW="7xl"
          width="90%"
          alignItems="center"
          marginX="auto"
          marginTop="80px"
        >
          <Books header="کتاب های رایگان" searchKey="free" />
          <Books header="تازه های متنی" searchKey="recently-added" />
          <OriginalLanBooks/>
          <Books header="کتاب های ارزان" searchKey="economical" />
          <div className="w-full">
            <FavoriteCategories/>
          </div>
        </Flex>
      </div>
    </div>
  );
}

export default HomePage;
