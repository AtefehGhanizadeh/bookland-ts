import React, { useState } from "react";
import {
  Box,
  Flex,
  Icon,
  Text,
  useColorModeValue,
  ChakraProvider,
  CSSReset,
  Center,
  Spinner,
} from "@chakra-ui/react";
import Card from "../../../components/Card/Card.js";
import CardBody from "../../../components/Card/CardBody.js";
import CardHeader from "../../../components/Card/CardHeader.js";
import TransactionRow from "../../../components/Tables/TransactionRow.js";
import DoughnutChart from "@/pages/Publisher/views/Transaction/components/DoughnutChart";
import { Seperator } from "../../../components/Seperator/Seperator.js";
// import TimeSelectionTable from "@/pages/Publisher/views/Transaction/components/TimeSelectionTable";
import usePublisherWalletHistory from "@/src/react-query/hooks/usePublisherWalletHistory";
import useShowToast from "@/src/components/ui/useShowToast";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { SearchBar } from "./SearchBar";
import { TransactionItem } from "@/src/helpers/Interfaces";

const Transaction = ({ title }: { title: string }) => {
  const { data, isLoading, isError, isSuccess, error } =
    usePublisherWalletHistory();
  const textColor = useColorModeValue("gray.700", "white");

  const [startDate, setStartDate] = useState<Date | null>();
  const [endDate, setEndDate] = useState<Date | null>();

  const [searchValue, setSearchValue] = useState("");
  const [timeCondition, setTimeCondition] = useState(false);
  const showToast = useShowToast();
  const token = Cookies.get("token");
  const { push } = useRouter();

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
    if (error.response?.data.result?.error_message) {
      showToast(error.response!.data.result?.error_message);
      if (error.response?.status === 401 || error.response?.status === 403) {
        token ? Cookies.remove("token") : "";
        push("/login");
      }
    } else {
      showToast("مشکلی رخ داده است.");
    }
    // return(
    //   <>
    //   <Navbar/>
    //   <Layout/>
    //   </>
    // )
  }

//   function isTransactionWithinTime(transaction:TransactionItem) {
//   	return (
//   		new Date(
//   			new Date(transaction.created_date).toLocaleDateString("fa-IR", {
//   				year: "numeric",
//   				month: "numeric",
//   				day: "numeric",
//   				numberingSystem: "latn",
//   			})
//   		) >= new Date(startDate) &&
//   		new Date(
//   			new Date(transaction.created_date).toLocaleDateString("fa-IR", {
//   				year: "numeric",
//   				month: "numeric",
//   				day: "numeric",
//   				numberingSystem: "latn",
//   			})
//   		) <= new Date(endDate)
//   	);
//   }

  if (isSuccess) {
    return (
      <Card my="24px">
        <CardHeader mb="12px">
          <Flex direction="column" w="100%">
            <Flex align="center" ml="450px" direction="row" gap="270px">
              <DoughnutChart />
              <Flex
                direction="column"
                mt="20px"
                align="flex-end"
                justify="center"
                w="200px"
                gap="10px"
                h="70%"
              >
                <Text color={textColor} fontSize="30" fontWeight="semibold">
                  {title}
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </CardHeader>
        <Seperator ml="300px" my="20px" />
        <CardBody>
          <Flex ml="-75px" alignItems="flex-end" direction="column" w="100%">
            <Flex direction="row" gap="80px" alignItems="center">
              <ChakraProvider>
                <CSSReset />
                {/* <TimeSelectionTable
                  startDate={startDate}
                  endDate={endDate}
                  setStartDate={setStartDate}
                  setEndDate={setEndDate}
                  setTimeCondition={setTimeCondition}
                  data={data}
                /> */}
              </ChakraProvider>
              <Flex>
                <SearchBar setSearchValue={setSearchValue} />
              </Flex>
            </Flex>

            {data.length === 0 ? (
              <div
                style={{
                  height: "250px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "700px",
                }}
              >
                <p dir="rtl">تراکنشی یافت نشد. </p>
              </div>
            ) : isLoading ? (
              <div
                style={{
                  height: "293px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "700px",
                }}
              >
                <p dir="rtl">
                  در حال بارگذاری اطلاعات ...
                  <br /> از صبر و شکیبایی شما سپاسگذاریم.
                </p>
              </div>
            ) : (
              <Box dir="rtl" mr="0px">
                {searchValue !== "" ? (
                  // Render based on searchValue
                  <>
                    <Text
                      color="gray.400"
                      fontSize="md"
                      fontWeight="semibold"
                      my="12px"
                    >
                      برداشت
                    </Text>
                    {/* {data
                      .filter(
                        (row) =>
                          row.description
                            .toLowerCase()
                            .includes(searchValue.toLowerCase()) &&
                        //   isTransactionWithinTime(row)
                      )
                      .map((row, index) =>
                        row.actiontype === "برداشت" ? (
                          <TransactionRow
                            key={index}
                            actiontype={row.actiontype}
                            amount={row.amount}
                            issuccessful={row.is_successful}
                            description={row.description}
                            createddate={row.created_date}
                            book={true}
                          />
                        ) : null
                      )} */}
                  </>
                ) : timeCondition ? (
                  // Render based on timeCondition
                  <>
                    <Text
                      color="gray.400"
                      fontSize="md"
                      fontWeight="semibold"
                      my="12px"
                    >
                      واریز
                    </Text>
                    {/* {data
                      .filter(
                        (row) =>
                          row.actiontype === "واریز" &&
                        //   isTransactionWithinTime(row)
                      )
                      .map((row, index) => (
                        <TransactionRow
                          key={index}
                          actiontype={row.actiontype}
                          amount={row.amount}
                          issuccessful={row.is_successful}
                          description={row.description}
                          createddate={row.created_date}
                          book={false}
                        />
                      ))} */}
                    <Text
                      color="gray.400"
                      fontSize="md"
                      fontWeight="semibold"
                      my="12px"
                    >
                      برداشت
                    </Text>
                    {/* {data
                      .filter(
                        (row) =>
                          row.actiontype === "برداشت" &&
                        //   isTransactionWithinTime(row)
                      )
                      .map((row, index) => (
                        <TransactionRow
                          key={index}
                          actiontype={row.actiontype}
                          amount={row.amount}
                          issuccessful={row.is_successful}
                          description={row.description}
                          createddate={row.created_date}
                          book={true}
                        />
                      ))} */}
                  </>
                ) : (
                  <>
                    <Text
                      color="gray.400"
                      fontSize="md"
                      fontWeight="semibold"
                      my="12px"
                    >
                      واریز
                    </Text>
                    {data.map(
                      (row, index) =>
                        row.actiontype === "واریز" && (
                          <TransactionRow
                            key={index}
                            actiontype={row.actiontype}
                            amount={row.amount}
                            issuccessful={row.is_successful}
                            description={row.description}
                            createddate={row.created_date}
                            book={false}
                          />
                        )
                    )}

                    <Text
                      color="gray.400"
                      fontSize="md"
                      fontWeight="semibold"
                      my="12px"
                    >
                      برداشت
                    </Text>
                    {data.map(
                      (row, index) =>
                        row.actiontype === "برداشت" && (
                          <TransactionRow
                            key={index}
                            actiontype={row.actiontype}
                            amount={row.amount}
                            issuccessful={row.is_successful}
                            description={row.description}
                            createddate={row.created_date}
                            book={true}
                          />
                        )
                    )}
                  </>
                )}
              </Box>
            )}
          </Flex>
        </CardBody>
      </Card>
    );
  }
};

export default Transaction;
