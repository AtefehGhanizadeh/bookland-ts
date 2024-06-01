import React from "react";
import BooksList from "../BooksList";
import useGetBookmarks from "@/src/react-query/hooks/useGetBookmarks";
import Layout from "@/src/components/userProfile/Layout";
import { Spinner,Center } from "@chakra-ui/react";
import Navbar from "@/src/components/navbar/Navbar";

function MyBookmarks({searchValue}:{searchValue:string}) {
	const { data, isLoading, isError,isSuccess } = useGetBookmarks();
	if (isLoading) {
		return (
			<Layout>
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
			<Layout>
				<p>Something went wrong...</p>
			</Layout>
		);
	}

	return (
		<>
		<Navbar/>
		<Layout>
			{isSuccess && <BooksList type="favbooks" booksArray={data} searchValue={searchValue} />}
		</Layout>
		</>
	);
}

export default MyBookmarks;
