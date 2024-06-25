import React from "react";
import BooksList from "../BooksList";
import useGetBookmarks from "@/src/react-query/hooks/useGetBookmarks";
import Layout from "@/src/components/userProfile/Layout";
import { Spinner, Center } from "@chakra-ui/react";
import Navbar from "@/src/components/navbar/Navbar";
import useShowToast from "@/src/components/ui/useShowToast";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

function MyBookmarks({ searchValue }: { searchValue: string }) {
  const { data, isLoading, isError, isSuccess, error } = useGetBookmarks();
  const showToast = useShowToast();
  const { push } = useRouter();
  const token = Cookies.get("token");

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

  if (isLoading) {
    return (
      <Layout>
        <Center alignItems="center" h="full">
          <Spinner
            thickness="4px"
            speed="0.65s"
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
      <Layout/>
    );
  }

  return (
    <>
      <Navbar />
      <Layout>
        {isSuccess && (
          <BooksList
            type="favbooks"
            booksArray={data}
            searchValue={searchValue}
          />
        )}
      </Layout>
    </>
  );
}

export default MyBookmarks;
