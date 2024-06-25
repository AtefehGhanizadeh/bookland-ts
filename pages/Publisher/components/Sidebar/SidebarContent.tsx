import React from "react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import {
	Box,
	Button,
	Flex,
	Text,
	useColorModeValue,
	Icon,
	Link,
} from "@chakra-ui/react";
import { ProfileIcon } from "../Icons/Icons.js";
import IconBox from "../Icons/IconBox.js";
import routes from "../../routes.js";
import usePublisherProfile from "@/src/react-query/hooks/usePublisherProfile";

function isPersian(text:string) {
	const persianRegex = /[\u0600-\u06FF\uFB8A\u067E\u0686\u06AF\u200C\u200F]/;

	return persianRegex.test(text);
}

function isEnglish(text:string) {
	const englishRegex = /^[a-zA-Z0-9!@#$%^&*(),.?":{}|<>]+$/;

	return englishRegex.test(text);
}

const SidebarContent = ({ pageName }:{pageName:string}) => {
	const { data, isLoading, isSuccess } = usePublisherProfile();
	// const name = "نام انتشارات";
	const adjustedPageName = pageName.substring(1);

	// Chakra Color Mode
	const navbarIcon = useColorModeValue("gray.500", "gray.200");

	let location = useRouter();

	const activeRoute = (routeName) => {
		return location.pathname === routeName ? "active" : "";
	};

	const createLink = (routes) => {
		// Chakra Color Mode
		// const activeBg = useColorModeValue("white", "gray.700");
		// const inactiveBg = useColorModeValue("white", "gray.700");
		// const activeColor = useColorModeValue("gray.700", "white");
		// const inactiveColor = useColorModeValue("gray.400", "gray.400");

		return routes.map((prop, key) => {
			if (prop.redirect) {
				return null;
			}
			if (prop.category) {
				var st = {};
				st[prop["state"]] = !state[prop.state];
				return (
					<div key={prop.name}>
						<Text
							// color={activeColor}
							fontWeight="bold"
							mb="12px"
							mx="auto"
							ps="16px"
							py="12px"
						>
							{name}
						</Text>
						{createLink(prop.views)}
					</div>
				);
			}
			return (
				<NextLink href={prop.layout + prop.path} key={prop.name}>
					{activeRoute(prop.layout + prop.path) === "active" ? (
						<Button
							boxSize="initial"
							justifyContent="flex-start"
							alignItems="center"
							// bg={activeBg}
							mb="12px"
							mx="auto"
							ps="16px"
							py="12px"
							borderRadius="15px"
							_hover="none"
							w="100%"
							_active={{
								bg: "inherit",
								transform: "none",
								borderColor: "transparent",
							}}
							_focus={{
								boxShadow: "none",
							}}
						>
							<Flex>
								{typeof prop.icon === "string" ? (
									<Icon as={prop.icon} />
								) : (
									<IconBox
										bg="teal.300"
										color="white"
										h="30px"
										w="30px"
										me="12px"
									>
										{prop.icon}
									</IconBox>
								)}
								<Text
									// color={activeColor}
									my="auto"
									fontSize="md"
								>
									{prop.name}
								</Text>
							</Flex>
						</Button>
					) : (
						<Button
							boxSize="initial"
							justifyContent="flex-start"
							alignItems="center"
							bg="transparent"
							mb="12px"
							mx="auto"
							py="12px"
							ps="16px"
							borderRadius="15px"
							_hover="none"
							w="100%"
							_active={{
								bg: "inherit",
								transform: "none",
								borderColor: "transparent",
							}}
							_focus={{
								boxShadow: "none",
							}}
						>
							<Flex>
								{typeof prop.icon === "string" ? (
									<Icon as={prop.icon} />
								) : (
									<IconBox
										// bg={inactiveBg}
										color="teal.300"
										h="30px"
										w="30px"
										me="12px"
									>
										{prop.icon}
									</IconBox>
								)}
								<Text
									// color={inactiveColor}
									my="auto"
									fontSize="sm"
								>
									{prop.name}
								</Text>
							</Flex>
						</Button>
					)}
				</NextLink>
			);
		});
	};

	const links = <>{createLink(routes)}</>;
	const activeBg = useColorModeValue("white", "gray.700");
	const inactiveBg = useColorModeValue("white", "gray.700");
	const activeColor = useColorModeValue("gray.700", "white");
	const inactiveColor = useColorModeValue("gray.400", "gray.400");

	return (
		<>
			<Box
				mt="50px"
				pt="25px"
				display="flex"
				mb="12px"
				pl="78px"
				style={{
					flexDirection:
						isSuccess && isPersian(data.username)
							? "row"
							: isSuccess && isEnglish(data.username)
							? "row-reverse"
							: "row",
					paddingRight:
						isSuccess && isPersian(data.username)
							? "20px"
							: isSuccess && isEnglish(data.username)
							? "0"
							: "0",
					paddingLeft:
						isSuccess && isPersian(data.username)
							? "0"
							: isSuccess && isEnglish(data.username)
							? "75px"
							: "0",
				}}
			>
				<ProfileIcon color={navbarIcon} w="22px" h="22px" me="0px" />
				<Text display="flex" ml="8px">
					{isLoading && ""}
					{isSuccess && data.username}
				</Text>
			</Box>
			<Flex direction="column" mb="40px">
				{links}
				<Link
					href="/login/"
					style={{
						textDecoration: "none",
					}}
					mt="30px"
				>
					<Text
						color={inactiveColor}
						my="auto"
						fontSize="md"
						fontWeight="500"
						_hover={{ color: "blue.500" }}
					>
						خروج از حساب کاربری
					</Text>
				</Link>
			</Flex>
		</>
	);
};

export default SidebarContent;
