// chakra imports
import { Box, useColorModeValue, ChakraProvider, Card } from "@chakra-ui/react";
import React, { ReactNode, useState } from "react";
import SidebarContent from "./SidebarContent";
import Footer from "../Footer/Footer.js";
import MainPanel from "../Layout/MainPanel.js";
import PanelContainer from "../Layout/PanelContainer.js";
import PanelContent from "../Layout/PanelContent.js";

const Sidebar = ({
  pageName,
  children,
}: {
  pageName: string;
  children: ReactNode;
}) => {
  const mainPanel = React.useRef();

  //  Chakra Color Mode
  let sidebarBg = "#ffffff";
  let sidebarRadius = "0px";
  let sidebarMargins = "0px";

  return (
    <Box>
      <Box
        backgroundColor="#ffffff"
        dir="rtl"
        display="flex"
        flexDir="row"
        minHeight="91.4vh"
      >
        <Box
          paddingRight="40px"
          bg={sidebarBg}
          w="260px"
          ms="16px"
          mt="16px"
          m={sidebarMargins}
          borderRadius={sidebarRadius}
          position="fixed"
        >
          <SidebarContent pageName={pageName} />
        </Box>
        <ChakraProvider>
          <MainPanel
            backgroundColor="#ffffff"
            display="flex"
            w="1000px"
            mr="270px"
          >
            <PanelContent className="flex-1">
              <PanelContainer className="w-full h-full">
                {React.Children.map(children, (child) => {
                  return React.cloneElement(child as React.ReactElement<any>);
                })}
              </PanelContainer>
            </PanelContent>
          </MainPanel>
        </ChakraProvider>
      </Box>
      <Footer />
    </Box>

  );
};

export default Sidebar;
