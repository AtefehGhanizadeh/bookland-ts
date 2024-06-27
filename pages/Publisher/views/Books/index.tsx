import { useRouter } from "next/router";
import Sidebar from "../../components/Sidebar";
import { Flex, Grid } from "@chakra-ui/react";
import BookList from "./components/BookList";
import useGetPublisherBooks from '@/src/react-query/hooks/useGetPublisherBooks'

const Books = () => {
	const router = useRouter();
	const pageName = router.pathname;

	const { data, isLoading, isError,isSuccess } = useGetPublisherBooks();

	if (isLoading) {
		return <p>Loading...</p>; // You can customize the loading message
	}

	if (isError) {
		return <p>Error loading data.</p>; // You can customize the error message
	}

	if(isSuccess){
		return (
			<Sidebar pageName={pageName}>
				<div  className="flex justify-center">
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
