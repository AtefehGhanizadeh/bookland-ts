import React from "react";
import { Flex } from "@chakra-ui/react";

export function Seperator(props) {
	const { variant, children, ...rest } = props;
	return (
		<Flex
			h="1px"
			w="900px"
			bg="linear-gradient(90deg, rgba(224, 225, 226, 0) 0%, #000 49.52%, rgba(224, 225, 226, 0) 100%)"
			{...rest}
		>
			{children}
		</Flex>
	);
}
