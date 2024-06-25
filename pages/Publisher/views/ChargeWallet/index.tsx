import { useRouter } from "next/router";
import Sidebar from "@/pages/Publisher/components/Sidebar"
import { Flex, Icon } from "@chakra-ui/react";
import CreditCard from "./components/CreditCard";
import Wallet from "./components/wallet";
import { RiMastercardFill } from "react-icons/ri";
import useGetPublisherBalance from "@/src/react-query/hooks/useGetPublisherBalance";

const ChargeWallet = () => {
	const router = useRouter();
	const pageName = router.pathname;

	const { data, refetch, isSuccess, isLoading, isError } =
		useGetPublisherBalance();

	if (isLoading) {
		return <p>Loading...</p>;
	}

	if (isError) {
		return <p>Error loading data.</p>;
	}

	return (
		<Sidebar pageName={pageName}>
			<div className="flex justify-center">
				<Flex alignItems="center" direction="column" mt="70px">
					<Flex
						justifyContent="center"
						w="1000px"
						minW="600px"
						mb="50px"
					>
						<CreditCard
							// icon={
							// 	<Icon
							// 		as={RiMastercardFill}
							// 		w="48px"
							// 		h="auto"
							// 		color="gray.400"
							// 	/>
							// }
						/>
					</Flex>
					<Wallet
						data={data}
						walletInfoIsLoading={isLoading}
						isSuccess={isSuccess}
						mright={"620px"}
						refetch={refetch}
					/>
				</Flex>
			</div>
		</Sidebar>
	);
};

export default ChargeWallet;
