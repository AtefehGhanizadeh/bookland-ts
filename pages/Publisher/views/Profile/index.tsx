import { useRouter } from "next/router";
import Sidebar from "../../components/Sidebar";
import { Box, Flex, Grid, useColorModeValue } from "@chakra-ui/react";

import React from "react";
import Header from "./components/Header";
import ProfileInformation from "./components/ProfileInformation";
import usePublisherProfile from "@/src/react-query/hooks/usePublisherProfile";
import useShowToast from "@/src/components/ui/useShowToast";
import Cookies from "js-cookie";

const Profile = () => {
	const router = useRouter();
	const pageName = router.pathname;
	const showToast=useShowToast()
	const token=Cookies.get("token")

	const { data, isError, isSuccess, isLoading ,error} = usePublisherProfile();

	if(isError){
		if (error.response?.data.result?.error_message) {
		  showToast(error.response!.data.result?.error_message);
		  if (error.response?.status === 401 || error.response?.status === 403) {
			token ? Cookies.remove("token") : "";
			router.push("/login");
		  }
		  } else {
		  showToast("مشکلی رخ داده است.");
		  }
	  }


	return (
		<Sidebar pageName={pageName}>
			<div className="flex justify-center">
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
									// border="1px solid blue"
									avatar={data.publications_image}
									name={data.username}
									email={data.email}
								/>
							)}
						</Box>
						<Grid templateColumns="1fr" gap="22px">
							{isSuccess && (
								<ProfileInformation
									title="تغییر اطلاعات کاربری"
									address={data.address}
									phoneNo1={data.phone_number}
									phoneNo2={data.phone_number2}
									logo={data.publications_image}
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
