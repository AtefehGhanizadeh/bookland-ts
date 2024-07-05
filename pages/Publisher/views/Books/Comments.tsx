import {
  Card,
  CardBody,
  CardHeader,
  Flex,
  HStack,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import Sidebar from "../../components/Sidebar";
import { useRouter } from "next/router";
import useGetPublisherComments from "@/src/react-query/hooks/useGetPublisherComment";
import { Image } from "@chakra-ui/react";

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
                      <Text _hover={{ color: "blue.500" }}>کتاب‌ها</Text>
                    </Link>
                    <Text> ‌ › ‌ </Text>

                    <Link href={`?id=${id}&bookname=${bookname}`}>
                      <Text _hover={{ color: "blue.500" }}>{bookname}</Text>
                    </Link>
                  </Flex>
                </CardHeader>
                <CardBody>
                  <Flex flexDir="column" gap="5">
                    {data &&
                      data.map((row) => (
                        <Card key={row.id} backgroundColor="#edf2fa" padding="10px">
                          <HStack>
                            <div className="rounded-full overflow-hidden w-[31px] h-[31px]">
                              <Image
                                className="w-[31px] h-[31px]"
                                src="https://platformboy.com/wp-content/uploads/2022/10/%D8%B9%DA%A9%D8%B3-%D9%BE%D8%B1%D9%88%D9%81%D8%A7%DB%8C%D9%84-%D8%AE%D8%A7%D9%86%D9%85-%D8%A8%D8%A7-%D9%BE%DB%8C%D8%B1%D8%A7%D9%87%D9%86-%D9%82%D8%B1%D9%85%D8%B2.png"
                              />
                            </div>
                            <span className="text-[16px] font-medium">
                              {row.username}
                            </span>
                            <span className="text-[16px] font-normal text-[#515457]">
                              {new Date(row.created_date).toLocaleDateString(
                                "fa-IR"
                              )}
                            </span>
                          </HStack>
                          <p className="text-[16px] font-light tex-[#515457]">
                            {row.comment}
                          </p>
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
