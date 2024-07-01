import React, { useState } from "react";
import {
	Button,
	Modal,
	ModalBody,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Text,
} from "@chakra-ui/react";
import useGetReview from "@/src/react-query/hooks/useGetReview";

const Review = ({ isModalOpen, closeModal, clickedRow, id }) => {
	const { data } = useGetReview(id);

	console.log(`point is ${data}`);
	console.log(`point2 for id ${id} is ${data?.data}`);

	return (
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
							{data?.data ? (
								<>{data?.data}</>
							) : (
								<>
									<Text>
										امتیازی برای این کتاب ثبت نشده است.
									</Text>
								</>
							)}
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
	);
};

export default Review;
