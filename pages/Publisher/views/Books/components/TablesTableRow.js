import React, { useState } from "react";
import {
	Button,
	Flex,
	Icon,
	Modal,
	ModalBody,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Popover,
	PopoverArrow,
	PopoverBody,
	PopoverContent,
	PopoverHeader,
	PopoverTrigger,
	Td,
	Text,
	Tr,
	useColorModeValue,
} from "@chakra-ui/react";
import { FaEllipsisV } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
// import useDelete from "@/src/react-query/hooks/useDeleteBook";
// import useGetReview from "@/src/react-query/hooks/useGetReview";

function TablesTableRow(props) {
	const {
		logo,
		bookname,
		author,
		date,
		translatorname,
		language,
		numberofpages,
		id,
	} = props;
	const textColor = useColorModeValue("gray.700", "white");

	// const { mutate } = useDelete(id);

	const [isModalOpen, setIsModalOpen] = useState(false);

	const [clickedRow, setClickedRow] = useState(null);

	// const { data } = useGetReview(id);

	const point = data?.data;
	const openModal = () => {
		setIsModalOpen(true);
		setClickedRow({ bookname, author, date, point });
	};

	const closeModal = () => {
		setIsModalOpen(false);
		setClickedRow(null);
	};

	return (
		<>
			<Tr>
				<Td style={{ width: "100px" }}>
					<Flex
						justifyContent="center"
						align="center"
						py=".8rem"
						flexWrap="nowrap"
					>
						<Text
							fontSize="md"
							color={textColor}
							fontWeight="bold"
							minWidth="100%"
							textAlign="center"
						>
							{logo && (
								<Image width="30" height="30" src={logo} />
							)}
						</Text>
					</Flex>
				</Td>
				<Td style={{ width: "200px" }}>
					<Flex
						justifyContent="center"
						align="center"
						py=".8rem"
						flexWrap="nowrap"
					>
						<Text
							fontSize="md"
							color={textColor}
							fontWeight="bold"
							minWidth="100%"
							textAlign="center"
						>
							{bookname}
						</Text>
					</Flex>
				</Td>
				<Td style={{ width: "200px" }}>
					<Flex
						justifyContent="center"
						align="center"
						py=".8rem"
						flexWrap="nowrap"
					>
						<Flex direction="column">
							<Text
								fontSize="md"
								color={textColor}
								fontWeight="bold"
								minWidth="100%"
								textAlign="center"
							>
								{author}
							</Text>
							{translatorname === null && (
								<Text
									fontSize="sm"
									color="gray.400"
									textAlign="center"
									fontWeight="normal"
								>
									{translatorname}
								</Text>
							)}
						</Flex>
					</Flex>
				</Td>

				<Td>
					<Text
						fontSize="md"
						color={textColor}
						fontWeight="bold"
						pb=".5rem"
						textAlign="center"
					>
						{new Date(date).toLocaleDateString("fa-IR", {
							year: "numeric",
						})}
					</Text>
				</Td>
				<Td>
					<Text
						fontSize="md"
						color={textColor}
						fontWeight="bold"
						pb=".5rem"
						textAlign="center"
					>
						{numberofpages} صفحه
					</Text>
				</Td>
				<Td>
					<Text
						fontSize="md"
						color={textColor}
						fontWeight="bold"
						pb=".5rem"
						textAlign="center"
					>
						{language}
					</Text>
				</Td>
				<Td>
					<Button
						p="0px"
						bg="transparent"
						variant="no-hover"
						onClick={() => mutate(id)}
					>
						<Text
							fontSize="md"
							color="gray.400"
							fontWeight="bold"
							cursor="pointer"
						>
							حذف
						</Text>
					</Button>
				</Td>
				{/* <Td>
					<Button p="0px" bg="transparent" variant="no-hover">
						<Link
							href={`./Books/EditBook?id=${id}&bookname=${bookname}`}
						>
							<Text
								fontSize="md"
								color="gray.400"
								fontWeight="bold"
								cursor="pointer"
							>
								ویرایش
							</Text>
						</Link>
					</Button>
				</Td> */}
				<Td>
					<Popover>
						<PopoverTrigger>
							<Button p="0px" bg="transparent">
								<Icon
									as={FaEllipsisV}
									color="gray.400"
									cursor="pointer"
								/>
							</Button>
						</PopoverTrigger>
						<PopoverContent width="200px">
							<PopoverArrow />
							<PopoverBody>
								<Flex flexDir="column" gap={1}>
									<Button>
										<Link
											href={`./Books/Comments?id=${id}&bookname=${bookname}`}
										>
											کامنت ها
										</Link>
									</Button>
									<Button onClick={openModal}>
										امتیازها
									</Button>
								</Flex>
							</PopoverBody>
						</PopoverContent>
					</Popover>
				</Td>
			</Tr>
			<Modal isOpen={isModalOpen} onClose={closeModal}>
				<ModalOverlay />
				<ModalContent mt="270px" width="fit-content" maxWidth="500px">
					<ModalHeader>امتیازات</ModalHeader>
					<ModalBody>
						<Text fontWeight="400" fontSize="18px">
							کتاب
							<span className="text-primary">
								{" "}
								{clickedRow?.bookname}
							</span>
							{" : "}
							<Text mt="15px" fontWeight="500" textAlign="center">
								{point ? (
									<>{point}</>
								) : (
									<>
										<Text>
											امتیازی برای این کتاب ثبت نشده است.
										</Text>
									</>
								)}
								{/* {data ? (
									<>{data}</>
								) : (
									<>
										<Text>
											امتیازی برای این کتاب ثبت نشده است.
										</Text>
									</>
								)} */}
							</Text>
						</Text>
					</ModalBody>

					<ModalFooter>
						<Button colorScheme="blue" mr={3} onClick={closeModal}>
							Close
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
}

export default TablesTableRow;
