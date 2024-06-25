import { useRouter } from "next/router";
import Sidebar from "../../components/Sidebar";
// Chakra imports
import {
	Flex,
	Grid,
	Image,
	SimpleGrid,
	useColorModeValue,
} from "@chakra-ui/react";
// assets
import peopleImage from "../../assets/img/people-image.png";
import logoChakra from "../../assets/svg/logo-white.svg";
import LineChart from "../../components/Charts/LineChart";
// Custom icons
import {
	CartIcon,
	DocumentIcon,
	GlobeIcon,
	WalletIcon,
} from "../../components/Icons/Icons.js";
import React from "react";
import { dashboardTableData, timelineData } from "../../variables/general";
import BuiltByDevelopers from "./components/BuiltByDevelopers";
import MiniStatistics from "./components/MiniStatistics";
import OrdersOverview from "./components/OrdersOverview";
import Projects from "./components/Projects";
import SalesOverview from "./components/SalesOverview";
import WorkWithTheRockets from "./components/WorkWithTheRockets";

const Dashboard = () => {
	const iconBoxInside = useColorModeValue("white", "white");
	const router = useRouter();
	const pageName = router.pathname;

	return (
		<Sidebar pageName={pageName}>
			<div display="flex" w="1200px" justifyContent="center">
				<Flex alignItems="center" direction="column" mt="75px">
					<Flex
						flexDir="column"
						justifyContent="center"
						w="1000px"
						minW="600px"
					>
						<SimpleGrid columns="4" spacing="24px">
							<MiniStatistics
								title={"Today's Moneys"}
								amount={"$53,000"}
								percentage={55}
								icon={
									<WalletIcon
										h={"24px"}
										w={"24px"}
										color={iconBoxInside}
									/>
								}
							/>
							<MiniStatistics
								title={"Today's Users"}
								amount={"2,300"}
								percentage={5}
								icon={
									<GlobeIcon
										h={"24px"}
										w={"24px"}
										color={iconBoxInside}
									/>
								}
							/>
							<MiniStatistics
								title={"New Clients"}
								amount={"+3,020"}
								percentage={-14}
								icon={
									<DocumentIcon
										h={"24px"}
										w={"24px"}
										color={iconBoxInside}
									/>
								}
							/>

							<MiniStatistics
								title={"Total Sales"}
								amount={"$173,000"}
								percentage={8}
								icon={
									<CartIcon
										h={"24px"}
										w={"24px"}
										color={iconBoxInside}
									/>
								}
							/>
						</SimpleGrid>
						<Grid
							templateColumns="1.8fr 1.2fr"
							templateRows="1fr"
							my="26px"
							gap="24px"
						>
							<BuiltByDevelopers
								title={"Built by Developers"}
								name={"Purity UI Dashboard"}
								description={
									"From colors, cards, typography to complex elements, you will find the full documentation."
								}
								image={
									<Image
										src={logoChakra}
										alt="chakra image"
										minWidth="auto"
									/>
								}
							/>
							<WorkWithTheRockets
								backgroundImage={peopleImage}
								title={"Work with the rockets"}
								description={
									"Wealth creation is a revolutionary recent positive-sum game. It is all about who takes the opportunity first."
								}
							/>
						</Grid>
						<Grid
							templateColumns="1.3fr 1.7fr"
							templateRows="1fr"
							gap="24px"
							mb="26px"
						>
							{/* <SalesOverview
								title={"Sales Overview"}
								percentage={5}
								chart={<LineChart />}
							/> */}
						</Grid>
						<Grid
							templateColumns="2fr 1fr"
							templateRows="1fr"
							gap="24px"
						>
							<Projects
								title={"Projects"}
								amount={30}
								captions={[
									"Companies",
									"Members",
									"Budget",
									"Completion",
								]}
								data={dashboardTableData}
							/>
							{/* <OrdersOverview
								title={"Orders Overview"}
								amount={30}
								data={timelineData}
							/> */}
						</Grid>
					</Flex>
				</Flex>
			</div>
		</Sidebar>
	);
};

export default Dashboard;
