import React from "react";
import CustomCardContainer from "../ui/bookDetail/CustomCardContainer";
import { Tabs, TabList, TabPanels, Tab, TabPanel, HStack, Flex } from "@chakra-ui/react";
import {
  Card,
  CardBody,
  Heading,
  Stack,
  Box,
  Text,
  StackDivider,
} from "@chakra-ui/react";
import { Book } from "@/src/helpers/Interfaces";
function BookDescription({book}:{book:Book}) {
  return (
    <CustomCardContainer pt="30px" pr="20px" pl="20px">
      <div>
        <Tabs>
          <TabList>
            <Tab fontWeight="medium" w="50%" fontSize={{base:"15px",md:"17px"}} pr="0">
              درباره {book.name}
            </Tab>
            <Tab fontWeight="medium" fontSize={{base:"15px",md:"17px"}} flex="1" >
              مشخصات
            </Tab>
          </TabList>

          <TabPanels>
            <TabPanel dir="rtl">
              <p className="leading-[30px] text-[13px] md:text-[16px] font-normal">
                {book.description}
              </p>
            </TabPanel>
            <TabPanel pr="0">
              <Card border="none" boxShadow="none" >
                <CardBody p="0">
                  <Stack divider={<StackDivider />} spacing="4" pr="0" width="full">
                    <Box>
                      <HStack gap={{base:"90px",md:"150px"}}>
                        <div className="w-[100px]">
                      <Heading fontFamily="Vazirmatn" color="gray.300" fontSize="16px" fontWeight="normal" className="w-[100px]">
                        تعداد صفحات
                      </Heading>

                        </div>
                      <Text pt="2" fontFamily="Vazirmatn" fontWeight="normal" fontSize="16px">
                        {book.number_of_pages}
                      </Text>
                      </HStack>
                    </Box>
                    <Box>
                    <HStack gap={{base:"90px",md:"150px"}}>
                    <div className="w-[100px]">
                      <Heading fontFamily="Vazirmatn" color="gray.300" fontSize="16px" fontWeight="normal" className="w-[100px]">
                       نویسنده
                      </Heading>
                      </div>
                      <Text pt="2" fontFamily="Vazirmatn" fontWeight="normal" fontSize="16px">
                        {book.author_name}
                      </Text>
                      </HStack>
                    </Box>
                    <Box>
                    <HStack gap={{base:"90px",md:"150px"}}>
                    <div className="w-[100px]">
                      <Heading fontFamily="Vazirmatn" color="gray.300" fontSize="16px" fontWeight="normal" className="w-[100px]">
                        ناشر
                      </Heading>
                      </div>
                      <Text pt="2" fontFamily="Vazirmatn" fontWeight="normal" fontSize="16px">
                        {book.publisher}
                      </Text>
                      </HStack>
                    </Box>
                    <Box>
                    <HStack gap={{base:"90px",md:"150px"}}>
                    <div className="w-[100px]">
                      <Heading fontFamily="Vazirmatn" color="gray.300" fontSize="16px" fontWeight="normal" className="w-[100px]">
                        زبان
                      </Heading>
                      </div>
                      <Text pt="2" fontFamily="Vazirmatn" fontWeight="normal" fontSize="16px">
                        {book.language}
                      </Text>
                      </HStack>
                    </Box>
                    <Box>
                    <HStack gap={{base:"90px",md:"150px"}}>
                    <div className="w-[100px]">
                      <Heading fontFamily="Vazirmatn" color="gray.300" fontSize="16px" fontWeight="normal" className="w-[100px]">
                        تاریخ انتشار
                      </Heading>
                      </div>
                      <Text pt="2" fontFamily="Vazirmatn" fontWeight="normal" fontSize="16px">
                        {book.released_date}
                      </Text>
                      </HStack>
                    </Box>
                  </Stack>
                </CardBody>
              </Card>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </CustomCardContainer>
  );
}

export default BookDescription;
