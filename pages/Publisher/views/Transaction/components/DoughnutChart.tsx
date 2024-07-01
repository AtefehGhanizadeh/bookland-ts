import useGetPublisherBalance from "@/src/react-query/hooks/useGetPublisherBalance";
import {
  Box,
  CircularProgress,
  CircularProgressLabel,
  Flex,
  Spinner,
  Text,
} from "@chakra-ui/react";

const DoughnutChart = () => {
  const { data,isSuccess, isLoading, isError } =
    useGetPublisherBalance();

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
            {isSuccess && (
              <Text color="#fff" fontSize="30px" fontWeight="semibold" mb="4px">
                {data.deposit - data.withdraw}
              </Text>
            )}
			{(isLoading||isError)&&<Spinner color="white"/>}

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
