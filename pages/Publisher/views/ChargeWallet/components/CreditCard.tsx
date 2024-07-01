// Chakra imports
import {
  Box,
  ComponentWithAs,
  Flex,
  IconProps,
  Spacer,
  Spinner,
  Text,
} from "@chakra-ui/react";
// Custom components
import Card from "../../../components/Card/Card.js";
import CardBody from "../../../components/Card/CardBody.js";
import React, { useState } from "react";
import BackgroundCard from "../../../assets/img/BackgroundCard1.png";
import usePublisherProfile from "@/src/react-query/hooks/usePublisherProfile";
import Cookies from "js-cookie";
import { useRouter } from "next/router.js";
import useShowToast from "@/src/components/ui/useShowToast";

const CreditCard = () => {
  const { data,error, isError, isSuccess, isLoading } = usePublisherProfile();
  const showToast = useShowToast();
  const {push} = useRouter();
  const token = Cookies.get("token");

  if(isError){
    if (error.response?.data.result?.error_message) {
      showToast(error.response!.data.result?.error_message);
      if (error.response?.status === 401 || error.response?.status === 403) {
        token ? Cookies.remove("token") : "";
        push("/login");
      }
      } else {
      showToast("مشکلی رخ داده است.");
      }
  }

  const DisplayCardNumber = (cardnumber: string) => {

    const visibleDigits = 4;
    const hiddenDigits = cardnumber.length - visibleDigits * 2;

    const firstSegment = cardnumber.substring(0, visibleDigits);
    const secondSegment = cardnumber.substring(
      visibleDigits,
      visibleDigits + 2
    );
    const middleSegment1 = "*".repeat(hiddenDigits / 4);
    const middleSegment2 = "*".repeat(hiddenDigits / 2);
    const lastSegment = cardnumber.substring(cardnumber.length - visibleDigits);

    const maskedNumber = `${firstSegment} ‌‌ ‌ ${secondSegment}${middleSegment1} ‌‌ ‌ ${middleSegment2} ‌‌ ‌ ${lastSegment}`;

    return maskedNumber;
  };

  const DisplayCardIcon = (cardnumber: string) => {

    const firstSegment = cardnumber.substring(0, 6);
    let title;
    if (firstSegment === "627412") {
      title = "بانک انصار";
    } else if (
      firstSegment === "622106" ||
      firstSegment === "639194" ||
      firstSegment === "627884"
    ) {
      title = "بانک پارسیان";
    } else if (firstSegment === "639347" || firstSegment === "502229") {
      title = "بانک پاسارگارد";
    } else if (firstSegment === "627353") {
      title = "بانک تجارت";
    } else if (firstSegment === "627648" || firstSegment === "207177") {
      title = "بانک صادرات";
    } else if (firstSegment === "502938") {
      title = "بانک دی";
    } else if (firstSegment === "589463") {
      title = "بانک رفاه کارگران";
    } else if (firstSegment === "621986") {
      title = "بانک سامان";
    } else if (firstSegment === "589210") {
      title = "بانک سپه";
    } else if (firstSegment === "502806") {
      title = "بانک شهر";
    } else if (firstSegment === "603769") {
      title = "بانک صادرات";
    } else if (firstSegment === "603770" || firstSegment === "639217") {
      title = "بانک کشاورزی";
    } else if (firstSegment === "505416") {
      title = "بانک گردشگری";
    } else if (firstSegment === "628023") {
      title = "بانک مسکن";
    } else if (firstSegment === "610433" || firstSegment === "991975") {
      title = "بانک ملت";
    } else if (firstSegment === "603799") {
      title = "بانک ملی";
    } else if (firstSegment === "505801") {
      title = "بانک کوثر";
    } else if (firstSegment === "627760") {
      title = "پست بانک ایران";
    } else {
      title = "Unknown Bank";
    }
    return title;
  };
    return (
      <Card
        style={{
          backgroundImage: `url(${BackgroundCard.src})`,
        }}
        backgroundRepeat="no-repeat"
        background="cover"
        bgPosition="10%"
        p="16px"
        h="220px"
        w="400px"
        borderRadius="20px"
      >
        <CardBody h="100%" w="100%">
          <Flex
            direction="column"
            color="white"
            h="95%"
            p="20px 10px 20px 10px"
            w="100%"
          >
            <Flex justify="space-around" align="center" gap="20">
              <Text fontSize="md" fontWeight="bold">
                {isSuccess?DisplayCardIcon(data.card_number):""}
              </Text>
              <Text fontSize="md" fontWeight="bold">
                {/* {icon} */}
              </Text>
            </Flex>
            <Spacer />
            <Flex
              direction="column"
              alignItems="center"
              justifyContent="center"
              height="100%"
            >
              {
                isSuccess&&<Text
                fontSize="xl"
                letterSpacing="2px"
                fontWeight="bold"
                dir="ltr"
              >{DisplayCardNumber(data.card_number)}</Text>
              }
              {isLoading&&<Spinner/>}
              {isError&&"یافت نشد"}
            </Flex>
          </Flex>
        </CardBody>
      </Card>
    );
  }


export default CreditCard;
