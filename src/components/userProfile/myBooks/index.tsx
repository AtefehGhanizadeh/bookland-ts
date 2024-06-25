import BooksList from "@/src/components/userProfile/BooksList";
import useGetMyBooks from "@/src/react-query/hooks/useGetMyBooks";
import Layout from "@/src/components/userProfile/Layout";
import { Spinner,Center } from "@chakra-ui/react";
import Navbar from "@/src/components/navbar/Navbar";
import useShowToast from "@/src/components/ui/useShowToast";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

function MyBooks({searchValue}:{searchValue:string}) {
	const { data,error, isLoading, isError,isSuccess } = useGetMyBooks();
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
			<Layout >
				<Center alignItems="center" h="full">

				<Spinner
                  thickness="4px"
                  speed="0.65s"
                  emptyColor="gray.200"
                  color="primary"
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
				type="mybooks"
				booksArray={data}
				searchValue={searchValue}
			  />
			)}
		  </Layout>
		</>
	  );
}

export default MyBooks;
