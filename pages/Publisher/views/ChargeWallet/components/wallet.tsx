import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import useShowToast from "@/src/components/ui/useShowToast";
import axios from "axios";
import useChargePublisherWallet from "@/src/react-query/hooks/useChargePublisherWallet";
import image1 from "/public/assets/images/Artboard 26.png";
import image2 from "/public/assets/images/Artboard 26 copy.png";
import image3 from "/public/assets/images/Artboard 26 copy 2.png";
import { MouseEvent } from "react";
import Image from "next/image";
import { Center, Spinner } from "@chakra-ui/react";
import useGetPublisherBalance from "@/src/react-query/hooks/useGetPublisherBalance";

const coinStyle = {
  height: "110px",
  width: "165px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const Wallet = () => {
  const router = useRouter();
  const [error, setError] = useState(false);
  const [inputValue, setInputValue] = useState(0);

  const { mutate } = useChargePublisherWallet(inputValue);
  const showToast = useShowToast();
  const token = Cookies.get("token");
  const { data,refetch, isSuccess, isLoading, isError } = useGetPublisherBalance();

  useEffect(() => {
    if (router.query.Status && router.query.Status === "OK") {
      showToast("شارژ کیف پول شما با موفقیت انجام شد", "success");
      axios
        .put(
          `https://Localhost:5000/api/publisher/wallet/UpdatePublisherWallet${localStorage.getItem(
            "id"
          )}`,
          {},
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        )
        .then((res) => {
			console.log(res)
          if (res.status === 200) {
            refetch();
          }
        })
        .catch((err) => console.log(err));
      router.replace("/Publisher/views/ChargeWallet");
    }
    if (router.query.Status && router.query.Status === "NOK") {
      showToast("مشکلی در شارژ کیف پول بوجود آمده،لطفا دوباره تلاش کنید");
      router.replace("/Publisher/views/ChargeWallet");
    }
  }, [router, showToast, token]);

  if (isLoading) {
    return (
      <Center alignItems="center" h="full">
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="primary"
          size="xl"
        />
      </Center>
    );
  }

  if (isError) {
    return <p>Error loading data.</p>;
  }

  const submitHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    mutate();
  };

  return (
    <div>
      <Box display="flex" flexDir="row" marginBottom="32px">
        <Text
          fontWeight="700"
          display="flex"
          alignItems="center"
          whiteSpace="pre"
        >
          <span className="text-[18px]">دارایی حساب شما:</span>
          <span className="text-[23px]">&nbsp;0</span>
          <span
            style={{
              fontSize: "20px",
              color: "#C8C8C8",
            }}
          >
            {" "}
            تومان
          </span>
        </Text>
      </Box>
      <Text fontSize="16px" fontWeight="500" className="hidden md:block">
        لطفا میزان شارژ کیف پول خود را انتخاب کنید:
      </Text>
      <Box
        className="flex gap-[20px] md:gap-[60px]"
        justifyContent="center"
        alignItems="flex-start"
        flexDirection="row"
        marginTop="24px"
        marginBottom="32px"
      >
        <Box
          minW="75px"
          border="0.5px solid #DD8114"
          borderRadius="16px"
          onClick={() => setInputValue(200000)}
          style={{ cursor: "pointer" }}
        >
          <div style={coinStyle}>
            <Image alt="" src={image1} />
          </div>
          <Text
            display="flex"
            justifyContent="center"
            alignItems="center"
            color="#DD8114"
            fontSize={{ base: "13px", sm: "18px" }}
            fontWeight="500"
            whiteSpace="pre"
          >
            ۲۰۰هزار تومان
          </Text>
        </Box>
        <Box
          minW="75px"
          border="0.5px solid #6F8595"
          borderRadius="16px"
          onClick={() => setInputValue(100000)}
          style={{ cursor: "pointer" }}
        >
          <div style={coinStyle}>
            <Image alt="" src={image2} />
          </div>
          <Text
            display="flex"
            justifyContent="center"
            alignItems="center"
            color="#6F8595"
            fontSize={{ base: "13px", sm: "18px" }}
            fontWeight="500"
          >
            ۱۰۰هزار تومان
          </Text>
        </Box>
        <Box
          minW="75px"
          border="0.5px solid #7E4200"
          borderRadius="16px"
          onClick={() => setInputValue(50000)}
          style={{ cursor: "pointer" }}
        >
          <div style={coinStyle}>
            <Image alt="" src={image3} />
          </div>
          <Text
            display="flex"
            justifyContent="center"
            alignItems="center"
            color="#7E4200"
            fontSize={{ base: "13px", sm: "18px" }}
            fontWeight="500"
          >
            ۵۰هزار تومان
          </Text>
        </Box>
      </Box>
      <Text fontSize="16px" fontWeight="500" marginBottom="16px">
        یا به صورت دستی وارد کنید:
      </Text>
      <Flex flexDir="column" gap="10px">
        <Box
          display="flex"
          flexDir="column"
          justifyContent="flex-start"
          gap="16px"
          alignItems="flex-start"
        >
          <InputGroup
            border="0.5px solid #C8C8C8"
            borderRadius="16px"
            maxW="300px"
            height="41px"
          >
            <Input
              name="amount"
              border="none"
              type="number"
              value={inputValue}
              onChange={(e) => {
                setInputValue(+e.target.value);
                if (+e.target.value < 50000 || +e.target.value > 200000) {
                  setError(true);
                } else {
                  setError(false);
                }
              }}
              width="100%"
              height="41px"
              borderRadius="16px"
              padding="0px 20px"
            />
            <InputRightElement>
              <Text fontSize="md" mr={-20}>
                تومان
              </Text>
            </InputRightElement>
          </InputGroup>
          <Button
            onClick={(e) => submitHandler(e)}
            type="submit"
            borderRadius="12px"
            bg="#575DFB"
            width="198px"
            padding="8px"
            _hover={{ background: "#575DFB" }}
            color="white"
          >
            خرید
          </Button>
        </Box>
        {error && (
          <p className="text-error text-[12px]">
            مبلغ وارد شده باید بیشتر از 50000 و کمتر از 200000 تومان باشد.
          </p>
        )}
      </Flex>
    </div>
  );
};

export default Wallet;
