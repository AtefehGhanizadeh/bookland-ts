// Chakra imports
import { Flex } from "@chakra-ui/react";
// Assets
import React from "react";
import Transactions from '@/pages/Publisher/views/Transaction/components/Transactions';
import Sidebar from "../../components/Sidebar";
import { useRouter } from "next/router";

const Transaction = () => {
	const router = useRouter();
	const pageName = router.pathname;

	return (
		<Sidebar pageName={pageName}>
			<div  className="flex justify-center">
				<Flex
					alignItems="center"
					direction="column"
					pr="40px"
					mr="60px"
					mt="20px"
				>
					<Flex justifyContent="center" w="940px" minW="600px">
						<Transactions
							title={"تراکنشات شما"}
						/>
					</Flex>
				</Flex>
			</div>
		</Sidebar>
	);
};

export default Transaction;
