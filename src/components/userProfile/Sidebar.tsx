import useGetUserInfo from "@/src/react-query/hooks/useGetUserInfo";
import {
  Card,
  CardHeader,
  Avatar,
  Heading,
  Divider,
  CardBody,
  Icon,
  CardFooter,
  Box,
  Text,
} from "@chakra-ui/react";

import Link from "next/link";
import { useRouter } from "next/router";
import React, { ReactNode } from "react";
import { CiUser } from "react-icons/ci";
import { FaHistory } from "react-icons/fa";
import { GiBookshelf } from "react-icons/gi";
import { GoBookmarkFill } from "react-icons/go";
import { IoWalletOutline } from "react-icons/io5";

const listItemStyle = {
  fontSize: "16px",
  height: "48px",
  fontWeight: 500,
};
const dividerStyle = {
  color: "#C8C8C8",
  stroke: "0.5px",
};
const headingStyle = {
  margin: "4px auto 5px",
  fontSize: "20px",
  fontStyle: "normal",
  lineHeight: "normal",
  fontFamily: "'Vazirmatn', sans-serif",
  fontWeight: "semibold",
};

const Sidebar = () => {
  const router = useRouter();
  const pageName = router.pathname;

  const { data, isLoading, isSuccess } = useGetUserInfo();
  return (
    <div className="hidden lg:block">
      <Card
        width="250px"
        padding="16px 16px 0px"
        display="flex"
        justifyContent="center"
        alignItems="center"
        gap="10px"
        borderRadius="20px"
        background="#FAFAFA"
      >
        <CardHeader
          display="flex"
          flexDir="column"
          justifyContent="center"
          alignItems="center"
          padding="2px 0px 0px"
        >
          <Avatar
            width="70px"
            height="70px"
            name={isSuccess ? data.username : ""}
          />
          <Box
            display="flex"
            flexDir="column"
            justifyContent="center"
            alignItems="center"
          >
            <Heading style={headingStyle}>
              {isLoading && ""}
              {isSuccess && data.username}
            </Heading>
            <Text
              fontSize="12px"
              fontStyle="normal"
              fontWeight="200"
              marginBottom="3px"
            >
              {isLoading && ""}
              {isSuccess && data.email}
            </Text>
          </Box>
        </CardHeader>
        <Divider style={dividerStyle} />
        <CardBody
          display="flex"
          justifyContent="flex-start"
          alignItems="flex-start"
          flexDir="column"
          width="100%"
          textColor="primary"
          fontSize="20px"
          fontWeight="500"
          paddingRight="20px"
          paddingTop="16px"
          paddingBottom="16px"
        >
          <Box >
            <Link
              className={`flex flex-row items-center font-SemiBold text-${
                pageName === "/wallet" ? "primaryBlue" : "black"
              }`}
              href="/wallet"
            >
              <IoWalletOutline className="w-[20px] h-[20px] p-0" />
              &nbsp; کیف پول من
            </Link>
          </Box>
        </CardBody>
        <Divider style={dividerStyle} />
        <CardFooter
          display="flex"
          justifyContent="flex-start"
          alignItems="flex-start"
          flexDir="column"
          width="100%"
          paddingTop="20px"
          paddingBottom="8px"
          paddingRight="20px"
        >
          <Link
            style={{
              ...listItemStyle,
            }}
            className={`flex flex-row font-SemiBold text-${
              pageName === "/userProfile" ? "primaryBlue" : "black"
            }`}
            href="/userProfile"
          >
            <CiUser className="w-[20px] h-[20px] p-0" /> &nbsp; اطلاعات کاربری
          </Link>
          <Link
            style={{
              ...listItemStyle,
            }}
            className={`flex flex-row font-SemiBold text-${
              pageName === "/myBooks" ? "primaryBlue" : "black"
            }`}
            href="/myBooks"
          >
            <GiBookshelf className="w-[20px] h-[20px] p-0"/> &nbsp; کتابخانه من
          </Link>
          <Link
            style={{
              ...listItemStyle,
            }}
            className={`flex flex-row font-SemiBold text-${
              pageName === "/myBookmarks" ? "primaryBlue" : "black"
            }`}
            href="/myBookmarks"
          >
            <GoBookmarkFill className="w-[20px] h-[20px] p-0"/> &nbsp; فهرست علاقه‌مندی‌ها
          </Link>
          <Link
            style={{
              ...listItemStyle,
            }}
            className={`flex flex-rowfont-SemiBold text-${
              pageName === "/transactionHistory" ? "primaryBlue" : "black"
            }`}
            href="/transactionHistory"
          >
            <FaHistory className="w-[20px] h-[20px] p-0"/> &nbsp; تاریخچه تراکنش‌ها
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Sidebar;
