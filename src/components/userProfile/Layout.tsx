import { Card, Container, Flex } from "@chakra-ui/react";
import React, { PropsWithChildren, useState } from "react";
import Sidebar from "@/src/components/userProfile/Sidebar";
import SearchBox from "@/src/components/userProfile/SearchBox";

const Layout = ({ children }: PropsWithChildren) => {
  const [input, setInput] = useState("");
  return (
    <div>
      <Container maxW="7xl" w="90%" px="0" className="pt-[30px] pb-[30px]" display="flex" justifyContent="center">
        <Flex flexDir="row" gap="20px" alignItems="stretch" width="full">
          <Sidebar />
          <Flex flexDir="column" gap="20px" flexGrow="1" width="100%">
          
            <SearchBox setInput={setInput}/>

      <Card
					padding="40px 20px"
					borderRadius="20px"
					background="#FAFAFA"
          h="full"
				>
					{React.Children.map(children, (child) => {
						return React.cloneElement(child as React.ReactElement<any>, {
							searchValue: input,
						});
					})}
				</Card>
          </Flex>
        </Flex>
      </Container>

    </div>
  );
};

export default Layout;
