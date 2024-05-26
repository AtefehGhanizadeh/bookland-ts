import React from "react";
import CustomCardContainer from "../ui/bookDetail/CustomCardContainer";
import { Tabs, TabList, TabPanels, Tab, TabPanel, HStack } from "@chakra-ui/react";
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
        <Tabs >
          <TabList>
            <Tab fontWeight="medium" fontSize="17px">
              درباره {book.bookname}
            </Tab>
            <Tab fontWeight="medium" fontSize="17px" >
              مشخصات
            </Tab>
          </TabList>

          <TabPanels>
            <TabPanel dir="rtl">
              <p className="leading-[30px] text-[16px] font-normal">
                {book.description}
              </p>
            </TabPanel>
            <TabPanel pr="0">
              <Card border="none" boxShadow="none" >
                <CardBody pr="0">
                  <Stack divider={<StackDivider />} spacing="4" pr="0">
                    <Box>
                      <HStack gap="150px">
                      <Heading fontFamily="Vazirmatn" color="gray.300" fontSize="16px" fontWeight="normal"  width="100px">
                        تعداد صفحات
                      </Heading>
                      <Text pt="2" fontFamily="Vazirmatn" fontWeight="normal" fontSize="16px">
                        {book.numberofpages}
                      </Text>
                      </HStack>
                    </Box>
                    <Box>
                    <HStack gap="150px">
                      <Heading fontFamily="Vazirmatn" color="gray.300" fontSize="16px" fontWeight="normal"  width="100px">
                       نویسنده
                      </Heading>
                      <Text pt="2" fontFamily="Vazirmatn" fontWeight="normal" fontSize="16px">
                        {book.authorname}
                      </Text>
                      </HStack>
                    </Box>
                    <Box>
                    <HStack gap="150px">
                      <Heading fontFamily="Vazirmatn" color="gray.300" fontSize="16px" fontWeight="normal"  width="100px">
                        ناشر
                      </Heading>
                      <Text pt="2" fontFamily="Vazirmatn" fontWeight="normal" fontSize="16px">
                        {book.publisher}
                      </Text>
                      </HStack>
                    </Box>
                    <Box>
                    <HStack gap="150px">
                      <Heading fontFamily="Vazirmatn" color="gray.300" fontSize="16px" fontWeight="normal"  width="100px">
                        زبان
                      </Heading>
                      <Text pt="2" fontFamily="Vazirmatn" fontWeight="normal" fontSize="16px">
                        {book.language}
                      </Text>
                      </HStack>
                    </Box>
                    <Box>
                    <HStack gap="150px">
                      <Heading fontFamily="Vazirmatn" color="gray.300" fontSize="16px" fontWeight="normal"  width="100px">
                        تاریخ انتشار
                      </Heading>
                      <Text pt="2" fontFamily="Vazirmatn" fontWeight="normal" fontSize="16px">
                        {book.releaseddate}
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
