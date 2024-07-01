import Sidebar from "@/src/components/userProfile/Sidebar";
import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Spinner,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import useChargeWallet from "@/src/react-query/hooks/useChargeWallet";
import useGetWalletInfo from "@/src/react-query/hooks/useGetWalletInfo";
import useShowToast from "@/src/components/ui/useShowToast";
import axios from "axios";
import Cookies from "js-cookie";
import Navbar from "@/src/components/navbar/Navbar";
import Image from "next/image";
import image1 from "/public/assets/images/Artboard 26.png";
import image2 from "/public/assets/images/Artboard 26 copy.png";
import image3 from "/public/assets/images/Artboard 26 copy 2.png";
import { MouseEvent } from "react";
import Layout from "@/src/components/userProfile/Layout";
const coinStyle = {
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const Wallet = () => {
  const {
    data,
    isLoading: walletInfoIsLoading,
    isSuccess,
    error:dataError,
    isError,
    refetch,
  } = useGetWalletInfo();
  const [inputValue, setInputValue] = useState(0);
  const [error, setError] = useState(false);
  const { mutate } = useChargeWallet(inputValue);
  const showToast = useShowToast();
  const router = useRouter();
  const token = Cookies.get("token");

  if (isError) {
	  if (dataError.response?.data.result?.error_message) {
		showToast(dataError.response!.data.result?.error_message);
		if (dataError.response?.status === 401 || dataError.response?.status === 403) {
		  token ? Cookies.remove("token") : "";
		  router.push("/login");
		}
	  } else {
		showToast("مشکلی رخ داده است.");
	  }
	}

  useEffect(() => {
    if (router.query.Status && router.query.Status === "OK") {
      axios
        .put(
          `http://Localhost:3000/api/wallet/UpdateUserWallet${localStorage.getItem(
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
          if (res.status === 200) {
            showToast("شارژ کیف پول شما با موفقیت انجام شد", "success");
            refetch();
          }
        }).catch((err)=>{
          showToast("مشکلی در شارژ کیف پول بوجود آمده،لطفا دوباره تلاش کنید");

        })
      router.replace("/wallet");
    }
    if (router.query.Status && router.query.Status === "NOK") {
      showToast("مشکلی در شارژ کیف پول بوجود آمده،لطفا دوباره تلاش کنید");
      router.replace("/wallet");
    }
  }, [router, showToast, token]);

  const submitHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    mutate();
  };

  return (
    <div>
      <Navbar />
      <Layout>
        <Box display="flex" flexDir="row" marginBottom="32px">
          <Box fontWeight="700" display="flex" alignItems="center" whiteSpace="pre">
            <span className="text-[18px]">دارایی حساب شما:</span>
            {walletInfoIsLoading && (
							<Spinner/>
						)}
            {isError&&"یافت نشد"}
            {isSuccess && (
              <>
                <span className="text-[23px]" >&nbsp;{data.data}</span>
                <span
                  style={{
                    fontSize: "20px",
                    color: "#C8C8C8",
                  }}
                >
                  {" "}
                  تومان
                </span>
              </>
            )}
          </Box>
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
              fontSize={{base:"13px",sm:"18px"}}
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
              fontSize={{base:"13px",sm:"18px"}}
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
              fontSize={{base:"13px",sm:"18px"}}
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
      </Layout>
    </div>
  );
};

export default Wallet;
