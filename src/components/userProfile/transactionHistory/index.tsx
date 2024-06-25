import Layout from "@/src/components/userProfile/Layout";
import {
  Box,
  Center,
  Spinner,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";
import { ChevronRightIcon, ChevronLeftIcon } from "@chakra-ui/icons";
import useTransaction from "@/src/react-query/hooks/useTransaction";
import Navbar from "@/src/components/navbar/Navbar";
import useShowToast from "@/src/components/ui/useShowToast";
import Cookies from "js-cookie";

const TransactionHistory = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isLoading, isError, isSuccess, error } =
    useTransaction(currentPage);
  const showToast = useShowToast();
  const { push } = useRouter();
  const token = Cookies.get("token");
  let pageButtons: number[] = [1];

  if (isError) {
    console.log(error);
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

  if (isSuccess) {
    const totalPages = data.count;

    pageButtons = Array.from(
      { length: Math.min(totalPages) },
      (_, index) => index + 1
    );
  }

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

  if (isLoading) {
    return (
      <Layout>
        <Center alignItems="center" h="full">
          <Spinner
            thickness="4px"
            speed="1s"
            emptyColor="gray.200"
            color="primaryBlue"
            size="xl"
          />
        </Center>
      </Layout>
    );
  }


  if (isError) {
    return (
      <Layout>
        
      </Layout>
    );
  }

  if (isSuccess) {
    return (
      <>
        <Navbar />
        <Layout>
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
                {data.data.map((row) => (
                  <Tr key={row.id}>
                    <Td style={tableDataStyle}>{row.amount}</Td>
                    <Td style={tableDataStyle}>
                      {new Date(row.created_date).toLocaleDateString("fa-IR")}
                    </Td>
                    <Td
                      style={{
                        fontSize: "16px",
                        fontWeight: "400",
                        color:
                          row.actiontype === "واریز" ? "#20AA25" : "#D62737",
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
          <Center marginTop="30px">
            <Box
              dir="ltr"
              display="flex"
              justifyContent="center"
              alignItems="center"
              gap="16px"
            >
              <button
                style={{
                  background: "rgba(87, 93, 251, 0.11)",
                  width: "24px",
                  height: "24px",
                  borderRadius: "50%",
                }}
                onClick={() => setCurrentPage((prev) => prev - 1)}
                disabled={currentPage === 1}
              >
                <ChevronLeftIcon style={{ color: "#575DFB" }} />
              </button>

              {pageButtons.map((page) => (
                <button
                  style={{
                    fontSize: "16px",
                    fontWeight: "400",
                    textDecoration: currentPage === page ? "underline" : "none",
                    color: "#575DFB",
                  }}
                  key={page}
                  onClick={() => {
                    setCurrentPage(page);
                  }}
                  disabled={currentPage === page}
                >
                  {page}
                </button>
              ))}

              <button
                style={{
                  background: "rgba(87, 93, 251, 0.11)",
                  width: "24px",
                  height: "24px",
                  borderRadius: "50%",
                }}
                onClick={() => {
                  setCurrentPage((prev) => prev + 1);
                }}
                disabled={currentPage === data.count}
              >
                <ChevronRightIcon style={{ color: "#575DFB" }} />
              </button>
            </Box>
          </Center>
        </Layout>
      </>
    );
  }
};

export default TransactionHistory;
