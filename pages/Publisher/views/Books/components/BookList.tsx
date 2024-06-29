import React from "react";
import {
	Box,
	Button,
	Flex,
	Icon,
	Table,
	Tbody,
	Text,
	Th,
	Thead,
	Tr,
	useColorModeValue,
} from "@chakra-ui/react";
import Card from "../../../components/Card/Card.js";
import CardBody from "../../../components/Card/CardBody.js";
import CardHeader from "../../../components/Card/CardHeader.js";
import TablesTableRow from "@/pages/Publisher/views/Books/components/TablesTableRow";
import { FaPlus } from "react-icons/fa";
import { Seperator } from "@/pages/Publisher/components/Seperator/Seperator.js";
import { useRouter } from "next/router.js";
import { Book } from "@/src/helpers/Interfaces.jsx";

const BookList = ({ title, captions, data }:{title:string,captions:string[],data:Book[]}) => {
	const textColor = useColorModeValue("gray.700", "white");

	const router = useRouter();

	const AddBook = () => {
		router.push("./Books/AddBook");
	};

	return (
		<Card overflowX="auto">
			<CardHeader p="6px 0px 22px 0px">
				<Box
					display="flex"
					justifyContent="center"
					width="956px"
					flexDir="column"
				>
					<Box display="flex" justifyContent="center" width="956px">
						<Button
							p="0px"
							bg="transparent"
							color="gray.500"
							border="1px solid lightgray"
							borderRadius="15px"
							height="80px"
							width="240px"
							onClick={AddBook}
						>
							<Flex
								direction="row"
								justifyContent="center"
								align="center"
							>
								<Icon as={FaPlus} fontSize="lg" ml="12px" />
								<Text fontSize="lg" fontWeight="bold">
									اضافه کردن کتاب جدید
								</Text>
							</Flex>
						</Button>
					</Box>
					<Seperator my="30px" />
					<Text fontSize="xl" color={textColor} fontWeight="bold">
						{title}
					</Text>
				</Box>
			</CardHeader>
			<CardBody>
				<Table variant="simple" color={textColor}>
					<Thead>
						<Tr my=".8rem" color="gray.400">
							{captions.map((caption, idx) => (
								<Th
									textAlign="center"
									color="gray.400"
									key={idx}
									fontSize="18px"
								>
									{caption}
								</Th>
							))}
						</Tr>
					</Thead>
					<Tbody>
						{data.map((row) => (
							<TablesTableRow
								key={row.id}
								id={row.id}
								logo={row.book_cover_image}
								bookname={row.name}
								author={row.author_name}
								translatorname={row.translator_name}
								date={row.released_date}
								language={row.language}
								numberofpages={row.number_of_pages}
							/>
						))}
					</Tbody>
				</Table>
			</CardBody>
		</Card>
	);
};

export default BookList;
