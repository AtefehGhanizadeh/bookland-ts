/*eslint-disable*/
import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import PropTypes from "prop-types";

export default function Footer(props) {
	return (
		<Flex
			flexDirection="row"
			alignItems="flex-end"
			justifyContent="center"
			// px="30px"
			pt="20px"
			pb="20px"
			backgroundColor="#ffffff"
		>
			<Text color="gray.400" textAlign="start" mb="0px">
				&copy; {1900 + new Date().getYear()},{" "}
				<Text as="span"> BookLand</Text>
			</Text>
		</Flex>
	);
}
