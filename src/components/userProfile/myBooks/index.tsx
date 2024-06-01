import BooksList from "@/src/components/userProfile/BooksList";
import useGetMyBooks from "@/src/react-query/hooks/useGetMyBooks";
import Layout from "@/src/components/userProfile/Layout";
import { Spinner,Center } from "@chakra-ui/react";
import Navbar from "@/src/components/navbar/Navbar";

function MyBooks({searchValue}:{searchValue:string}) {
	const { data, isLoading, isError } = useGetMyBooks();

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
			<Layout >
				<p>Something went wrong...</p>
			</Layout>
		);
	}
	return (
		<>
		<Navbar/>
		<Layout >
			<BooksList type="mybooks" booksArray={data.data} searchValue={searchValue} />
		</Layout>
		</>
	);
}

export default MyBooks;
