import React, { useState } from "react";
import {
  Flex,
  Text,
  useColorModeValue,
  Center,
  Spinner,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import Card from "../../../components/Card/Card.js";
import CardBody from "../../../components/Card/CardBody.js";
import CardHeader from "../../../components/Card/CardHeader.js";
import DoughnutChart from "@/pages/Publisher/views/Transaction/components/DoughnutChart";
import { Seperator } from "../../../components/Seperator/Seperator.js";
import usePublisherWalletHistory from "@/src/react-query/hooks/usePublisherWalletHistory";
import useShowToast from "@/src/components/ui/useShowToast";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { SearchBar } from "./SearchBar";
const tableHeadStyle = {
  fontSize: "16px",
  fontWeight: "600",
  color: "#515457",
  whiteSpace: "pre",
};

const tableDataStyle = {
  fontSize: "16px",
  fontWeight: "400",
};

const Transaction = ({ title }: { title: string }) => {
  const { data, isLoading, isError, isSuccess, error } =
    usePublisherWalletHistory();

  const textColor = useColorModeValue("gray.700", "white");
  const [searchValue, setSearchValue] = useState("");
  const showToast = useShowToast();
  const token = Cookies.get("token");
  const { push } = useRouter();

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
  }

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
        <Flex direction="column" w="100%" gap="60px">
          <Flex direction="row" gap="80px" alignItems="center">
            <SearchBar setSearchValue={setSearchValue} />

          </Flex>
          {isLoading && (
            <Center alignItems="center" h="full">
              <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="primary"
                size="xl"
              />
            </Center>
          )}
          {isSuccess && (
            <div className="overflow-x-scroll flex-1">
              <Table>
                <Thead>
                  <Tr>
                    <Th style={tableHeadStyle}>مبلغ</Th>
                    <Th style={tableHeadStyle}>تاریخ</Th>
                    <Th style={tableHeadStyle}>نوع تراکنش</Th>
                    <Th style={tableHeadStyle}>شرح</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {data
                    .filter((row) => row.description.includes(searchValue))
                    .map((row) => (
                      <Tr key={row.id}>
                        <Td style={tableDataStyle}>{row.amount}</Td>
                        <Td style={tableDataStyle}>
                          {new Date(row.created_date).toLocaleDateString(
                            "fa-IR"
                          )}
                        </Td>
                        <Td
                          style={{
                            fontSize: "16px",
                            fontWeight: "400",
                            color:
                              row.actiontype === "واریز"
                                ? "#20AA25"
                                : "#D62737",
                          }}
                        >
                          {row.actiontype}
                        </Td>
                        <Td style={tableDataStyle} className="whitespace-pre">
                          {row.description}
                        </Td>
                      </Tr>
                    ))}
                </Tbody>
              </Table>
            </div>
          )}

        </Flex>
      </CardBody>
    </Card>
  );
};

export default Transaction;
