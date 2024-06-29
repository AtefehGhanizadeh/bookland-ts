// Chakra imports
import { Button, Flex, Text, useColorModeValue,Image } from "@chakra-ui/react";
// Custom components
import Card from "../../../components/Card/Card";
import CardBody from "../../../components/Card/CardBody";
import CardHeader from "../../../components/Card/CardHeader";
import React, { useState } from "react";
import { EditIcon } from "@/pages/Publisher/components/Icons/Icons";
import EditModal from "./EditModal";
// import Image from "next/image";


const ProfileInformation = ({
	title,
	address,
	phoneNo1,
	phoneNo2,
	logo,
}:{title:string,address:string|null,phoneNo1:string,phoneNo2:string|null,logo:string}) => {
	// Chakra color mode
	const textColor = useColorModeValue("gray.700", "white");

	const [isOpenPass, setOpenPass] = useState(false);
	const [isOpenAddress, setOpenAddress] = useState(false);
	const [isOpenPhoneNo1, setOpenPhoneNo1] = useState(false);
	const [isOpenPhoneNo2, setOpenPhoneNo2] = useState(false);
	const [isOpenLogo, setOpenLogo] = useState(false);

	return (
		<Card p="16px" my="24px">
			<CardHeader p="12px 5px" mb="12px">
				<Text fontSize="lg" color={textColor} fontWeight="bold">
					{title}
				</Text>
			</CardHeader>
			<CardBody px="5px">
				<Flex direction="column">
					{/* <Flex align="center" mb="18px">
						<Text
							fontSize="md"
							color={textColor}
							fontWeight="bold"
							width="110px"
						>
							رمز :{" "}
						</Text>

						<Button
							bg="fff"
							width="10px"
							height="30px"
							_active={{ bg: "fff" }}
							_hover={{ bg: "fff" }}
							onClick={() => setOpenPass(true)}
						>
							<EditIcon />
						</Button>
						<Text fontSize="md" color="gray.500" fontWeight="400">
							{pass}
						</Text>
					</Flex> */}
					<EditModal
						isOpen={isOpenPass}
						onClose={() => setOpenPass(false)}
						edit={"Pass"}
					/>
					<Flex align="center" mb="18px">
						<Text
							fontSize="md"
							color={textColor}
							fontWeight="bold"
							width="110px"
						>
							آدرس :{" "}
						</Text>

						<Button
							bg="#fff"
							width="10px"
							height="30px"
							_active={{ bg: "fff" }}
							_hover={{ bg: "fff" }}
							onClick={() => setOpenAddress(true)}
						>
							<EditIcon />
						</Button>
						<Text fontSize="md" color="gray.500" fontWeight="400">
							{address}
						</Text>
					</Flex>

					<EditModal
						isOpen={isOpenAddress}
						onClose={() => setOpenAddress(false)}
						edit={"Address"}
					/>
					<Flex align="center" mb="18px">
						<Text
							fontSize="md"
							color={textColor}
							fontWeight="bold"
							width="110px"
						>
							شماره تلفن 1 :{" "}
						</Text>

						{/* <Button
							bg="fff"
							width="10px"
							height="30px"
							_active={{ bg: "fff" }}
							_hover={{ bg: "fff" }}
							onClick={() => setOpenPhoneNo1(true)}
						>
							<EditIcon />
						</Button> */}
						<Text fontSize="md" color="gray.500" fontWeight="400">
							{phoneNo1}
						</Text>
					</Flex>
					<EditModal
						isOpen={isOpenPhoneNo1}
						onClose={() => setOpenPhoneNo1(false)}
						edit={"PhoneNo1"}
					/>
					<Flex align="center" mb="18px">
						<Text
							fontSize="md"
							color={textColor}
							fontWeight="bold"
							width="110px"
						>
							شماره تلفن 2 :{" "}
						</Text>

						<Button
							bg="fff"
							width="10px"
							height="30px"
							_active={{ bg: "fff" }}
							_hover={{ bg: "fff" }}
							onClick={() => setOpenPhoneNo2(true)}
						>
							<EditIcon />
						</Button>
						<Text fontSize="md" color="gray.500" fontWeight="400">
							{phoneNo2}
						</Text>
					</Flex>
					<EditModal
						isOpen={isOpenPhoneNo2}
						onClose={() => setOpenPhoneNo2(false)}
						edit={"PhoneNo2"}
					/>
					<Flex mb="18px" alignItems="center">
						<Text
							fontSize="md"
							color={textColor}
							fontWeight="bold"
							width="110px"
						>
							لوگو :{" "}
						</Text>

						<Button
							bg="fff"
							width="10px"
							height="30px"
							_active={{ bg: "fff" }}
							_hover={{ bg: "fff" }}
							onClick={() => setOpenLogo(true)}
						>
							<EditIcon />
						</Button>
						<Text
							fontSize="md"
							color="gray.500"
							// width="256px"
							// height="256px"
							fontWeight="400"
						>
							{logo && (
								<Image
									objectFit="fill"
									width="250"
									height="250"
									src={logo}
								/>
							)}
						</Text>
					</Flex>
					<EditModal
						isOpen={isOpenLogo}
						onClose={() => setOpenLogo(false)}
						edit={"Logo"}
					/>
				</Flex>
			</CardBody>
		</Card>
	);
};

export default ProfileInformation;
