import React from "react";
import HorizontalBooks from "@/src/components/homepage/bestSelling/horizontalBookList/HorizontalBooks";
import { Flex, Heading,Container } from "@chakra-ui/react";
import Link from "next/link";
import BestSelling from "@/src/components/homepage/bestSelling/BestSelling"
import image from "@/public/assets/images/Group.png";
import Image from "next/image";

function HomePage() {
  return (
    <div>
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
                  <span className="text-primary text-[20px] lg:text-[32px] font-semibold">
                    2780+
                  </span>
                  <span className="text-[#05000E]  text-[14px] lg:text-[18px] font-medium ">
                    کتاب با ژانر مختلف
                  </span>
                </Flex>
                <Flex flexDir="column" className="md:gap-[8px]">
                  <span className="text-primary text-[20px] lg:text-[32px] font-semibold">
                    2780+
                  </span>
                  <span className="text-[#05000E]  text-[14px] lg:text-[18px] font-medium ">
                    کاربر خوشحال
                  </span>
                </Flex>
                <Flex flexDir="column" className="md:gap-[8px]">
                  <span className="text-primary text-[20px] lg:text-[32px] font-semibold">
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
          width="80%"
          alignItems="center"
          marginX="auto"
          marginTop="80px"
        >
          <HorizontalBooks header="کتاب های رایگان" searchKey="free" />
          <HorizontalBooks header="تازه های متنی" searchKey="recently-added" />
          <div className=" w-full h-[300px] relative rounded-2xl overflow-hidden">
            <img
              className="w-full h-full brightness-[0.3] absolute z-[-1]"
              src="https://www.gih.se/images/18.2144ef671843bac72208af/1667483980469/GIH_gamla_anatomibocker.jpg"
            />
            <div className="px-[60px] pt-[40px] pb-[30px] h-full">
              <Flex
                flexDir="column"
                justifyContent="space-between"
                height="full"
              >
                <Heading
                  color="white"
                  fontFamily="Vazirmatn"
                  fontWeight="semibold"
                  fontSize="35px"
                >
                  کتاب های زبان اصلی
                </Heading>
                <div className="text-left">
                  <Link href={`filter/group?group=language-original`}>
                    <button className="bg-[#FAFAFA] px-[70px] py-[10px] rounded-xl font-semibold text-[20px] text-[#05000E]">
                      مشاهده
                    </button>
                  </Link>
                </div>
              </Flex>
            </div>
          </div>
          {/* <HorizontalBooks header="کتاب های ارزان" searchKey="economical" /> */}
          <div className="w-full">
            <Flex flexDir="column" gap="10px">
              <Heading
                fontFamily="Vazirmatn"
                fontWeight="medium"
                fontSize="24px"
              >
                دسته بندی های محبوب
              </Heading>
              <Flex gap="10px">
                <Link
                  href="/filter/category?category=عاشقانه"
                  className="flex-grow w-[25%]"
                >
                  <div className=" w-full h-[300px] relative rounded-2xl overflow-hidden">
                    <img
                      className="w-full h-full brightness-[0.3] absolute z-[-1]"
                      src="https://daily.jstor.org/wp-content/uploads/2016/02/BookOfLove_1050x700.jpg"
                    />
                    <Flex
                      justifyContent="center"
                      alignItems="center"
                      height="full"
                    >
                      <Heading
                        color="white"
                        fontFamily="Vazirmatn"
                        fontWeight="semibold"
                        fontSize="35px"
                      >
                        عاشقانه
                      </Heading>
                    </Flex>
                  </div>
                </Link>
                <Link
                  href="/filter/category?category=هیجان انگیز"
                  className="flex-grow w-[25%]"
                >
                  <div className=" w-full h-[300px] relative rounded-2xl overflow-hidden">
                    <img
                      className="w-full h-full brightness-[0.3] absolute z-[-1]"
                      src="https://images.squarespace-cdn.com/content/v1/60b789fe5c8bd718ae98ea7f/535e4914-8ebc-4bbd-9a00-1d781ded0de6/AdobeStock_191493381.jpeg?format=1500w"
                    />
                    <Flex
                      justifyContent="center"
                      alignItems="center"
                      height="full"
                    >
                      <Heading
                        color="white"
                        fontFamily="Vazirmatn"
                        fontWeight="semibold"
                        fontSize="35px"
                      >
                        هیجان انگیز
                      </Heading>
                    </Flex>
                  </div>
                </Link>
                <Link
                  href="/filter/category?category=طنز"
                  className="flex-grow w-[25%]"
                >
                  <div className=" w-full h-[300px] relative rounded-2xl overflow-hidden">
                    <img
                      className="w-full h-full brightness-[0.3] absolute z-[-1]"
                      src="https://s26162.pcdn.co/wp-content/uploads/sites/2/2018/10/hauntedbookstorefeature.jpg"
                    />
                    <Flex
                      justifyContent="center"
                      alignItems="center"
                      height="full"
                    >
                      <Heading
                        color="white"
                        fontFamily="Vazirmatn"
                        fontWeight="semibold"
                        fontSize="35px"
                      >
                        طنز
                      </Heading>
                    </Flex>
                  </div>
                </Link>
              </Flex>
            </Flex>
          </div>
        </Flex>
      </div>
    </div>
  );
}

export default HomePage;
