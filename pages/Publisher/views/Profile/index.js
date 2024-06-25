import { useRouter } from "next/router";
import Sidebar from "../../components/Sidebar";
import { Box, Flex, Grid, useColorModeValue } from "@chakra-ui/react";
import avatar4 from "../../assets/img/avatars/avatar4.png";
import React from "react";
import Header from "./components/Header";
import ProfileInformation from "./components/ProfileInformation";
// import usePublisherProfile from "@/src/react-query/hooks/usePublisherProfile";

const Profile = () => {
	const router = useRouter();
	const pageName = router.pathname;

	// const { data, isError, isSuccess, isLoading } = usePublisherProfile();

	const bgProfile = useColorModeValue(
		"hsla(0,0%,100%,.8)",
		"linear-gradient(112.83deg, rgba(255, 255, 255, 0.21) 0%, rgba(255, 255, 255, 0) 110.84%)"
	);

	return (
		<Sidebar pageName={pageName}>
			<div display="flex" w="1200px" justifyContent="center">
				<Flex alignItems="center" direction="column" mt="10px">
					<Flex
						mt="60px"
						direction="column"
						justifyContent="center"
						w="1000px"
						minW="600px"
					>
						<Box background="#4fd1c5" borderRadius="30px">
							{isSuccess && (
								<Header
									border="1px solid blue"
									backgroundProfile={bgProfile}
									avatarImage={avatar4}
									name={data.data.username}
									email={data.data.email}
								/>
							)}
						</Box>
						<Grid templateColumns="1fr" gap="22px">
							{isSuccess && (
								<ProfileInformation
									title={"تغییر اطلاعات کاربری"}
									address={data.data.address}
									phoneNo1={data.data.phonenumber}
									phoneNo2={data.data.phonenumber2}
									logo={data.data.publicationsimage}
								/>
							)}
						</Grid>
					</Flex>
				</Flex>
			</div>
		</Sidebar>
	);
};

export default Profile;
