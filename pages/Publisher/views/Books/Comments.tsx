import { Card, CardBody, CardHeader, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import Sidebar from "../../components/Sidebar";
import { useRouter } from "next/router";
import useGetPublisherComments from "@/src/react-query/hooks/useGetPublisherComment";

const Comments = () => {
	const router = useRouter();

	const { id, bookname } = router.query;

	const { data } = useGetPublisherComments(+id!);

	return (
		<>
			<Sidebar pageName={"Books"}>
				<div className="flex justify-center">
					<Flex w="1000px" direction="column" mt="70px">
						<Flex justifyContent="center" alignItems="center">
							<Card width="900px" minHeight="430px">
								<CardHeader>
									<Flex mr="20px">
										<Link href="./">
											<Text
												_hover={{ color: "blue.500" }}
											>
												کتاب‌ها
											</Text>
										</Link>
										<Text> ‌ › ‌ </Text>

										<Link
											href={`?id=${id}&bookname=${bookname}`}
										>
											<Text
												_hover={{ color: "blue.500" }}
											>
												{bookname}
											</Text>
										</Link>
									</Flex>
								</CardHeader>
								<CardBody>
									<Flex flexDir="column" gap="5">
										{data?.data &&
											data?.data.map((row) => (
												<Card
													key={row.id}
													backgroundColor="#edf2fa"
												>
													<CardBody>
														<Text>
															{row.comment}
														</Text>
													</CardBody>
												</Card>
											))}
									</Flex>
								</CardBody>
							</Card>
						</Flex>
					</Flex>
				</div>
			</Sidebar>
		</>
	);
};

export default Comments;
