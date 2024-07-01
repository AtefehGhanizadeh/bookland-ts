import { useRouter } from "next/router";
import Sidebar from "../../components/Sidebar";
import { Center, Flex, Grid, Spinner } from "@chakra-ui/react";
import BookList from "./components/BookList";
import useGetPublisherBooks from "@/src/react-query/hooks/useGetPublisherBooks";
import useShowToast from "@/src/components/ui/useShowToast";
import Cookies from "js-cookie";

const Books = () => {
  const router = useRouter();
  const pageName = router.pathname;

  const { data, error, isLoading, isError, isSuccess } = useGetPublisherBooks();
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
  if (isLoading || isError) {
    return (
      <Sidebar pageName={pageName}>
        <div className="flex justify-center flex-1 h-full">
          <Center className="flex-1 h-full w-full">
            <Spinner />
          </Center>
        </div>
      </Sidebar>
    );
  }

  if (isSuccess) {
    return (
      <Sidebar pageName={pageName}>
        <div className="flex justify-center">
          <Flex w="1000px" direction="column" mt="70px">
            <Grid templateColumns="repeat(1, 1fr)" gap="22px">
              <BookList
                title="لیست کتاب ها"
                captions={[
                  "",
                  "کتاب",
                  "نویسنده/مترجم",

                  "تاریخ انتشار",
                  "تعداد صفحات",
                  "زبان",
                  "",
                  "",
                  "",
                ]}
                data={data}
              />
            </Grid>
          </Flex>
        </div>
      </Sidebar>
    );
  }
};

export default Books;
