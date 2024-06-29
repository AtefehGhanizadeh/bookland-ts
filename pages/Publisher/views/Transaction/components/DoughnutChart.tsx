import useGetPublisherBalance from "@/src/react-query/hooks/useGetPublisherBalance";
import {
	Box,
	CircularProgress,
	CircularProgressLabel,
	Flex,
	Text,
} from "@chakra-ui/react";

const DoughnutChart = () => {
	const { data, refetch, isSuccess, isLoading, isError } =
		useGetPublisherBalance();
	if (isLoading) {
		return <p>Loading...</p>;
	}

	if (isError) {
		return <p>Error loading data.</p>;
	}
	return (
		<Box ml="0px">
			<CircularProgress
				borderRadius="50%"
				size="200"
				value={80}
				thickness={6}
				color="#c2efea"
				// variant="vision"
				trackColor="#fff"
				bg="#4fd1c5"
			>
				<CircularProgressLabel>
					<Flex direction="column" justify="center" align="center">
						<Text color="white" fontSize="30px" fontWeight="bold">
							سود کل
						</Text>
						<Text
							color="#fff"
							fontSize="30px"
							fontWeight="semibold"
							mb="4px"
						>
							{isSuccess && data.deposit
}
						</Text>
						<Text color="#fff" fontSize="sm">
							تومان
						</Text>
					</Flex>
				</CircularProgressLabel>
			</CircularProgress>
		</Box>
	);
};

export default DoughnutChart;
