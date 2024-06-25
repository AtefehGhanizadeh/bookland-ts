import { Box, Flex, Icon, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";

function TransactionRow(props) {
	const textColor = useColorModeValue("gray.700", "white");
	const { actiontype, createddate, description, issuccessful, amount, book } =
		props;

	return (
		<Flex dir="rtl" my="1rem" justifyContent="center" gap="90px">
			<Flex width="100px" alignItems="center">
				<Flex flexDir="column">
					<Text
						fontSize="sm"
						color="gray.400"
						fontWeight="semibold"
						textAlign="center"
					>
						{new Date(createddate).toLocaleDateString("fa-IR")}
					</Text>
					<Text
						fontSize="sm"
						color="gray.400"
						textAlign="center"
						fontWeight="semibold"
					>
						{new Date(createddate).toLocaleTimeString("fa-IR", {
							hour12: false,
						})}
					</Text>
				</Flex>
			</Flex>
			<Flex width="100px" alignItems="center">
				{actiontype === "Deposit" && issuccessful ? (
					<Text fontSize="sm" color="gray.400" fontWeight="semibold">
						واریز موفق
					</Text>
				) : actiontype === "Deposit" && !issuccessful ? (
					<Text fontSize="sm" color="gray.400" fontWeight="semibold">
						واریز ناموفق
					</Text>
				) : actiontype === "Withdraw" && issuccessful ? (
					<Text fontSize="sm" color="gray.400" fontWeight="semibold">
						خرید موفق
					</Text>
				) : actiontype === "Withdraw" && !issuccessful ? (
					<Text fontSize="sm" color="gray.400" fontWeight="semibold">
						خرید ناموفق
					</Text>
				) : null}
			</Flex>
			<Flex width="100px" alignItems="center">
				<Text
					color={issuccessful ? "green.400" : "red.400"}
					mt="3"
					display="flex"
					justifyContent="center"
					alignItems="center"
					fontSize="sm"
					fontWeight="bold"
					dir="rtl"
				>
					{actiontype === "Deposit" ? amount + " هزار تومان" : null}
					{actiontype === "Withdraw" ? amount + " هزار تومان" : null}
				</Text>
			</Flex>
			{book ? (
				<Flex width="200px" alignItems="center">
					<Text
						mt="3"
						fontSize="15px"
						color={textColor}
						fontWeight="400"
					>
						{}
						{description.match(/Purchased "(.*?)"/)?.[1] ||
							"نام کتاب پیدا نشد"}
					</Text>
				</Flex>
			) : (
				<Flex width="200px" alignItems="center"></Flex>
			)}
		</Flex>
	);
}

export default TransactionRow;
