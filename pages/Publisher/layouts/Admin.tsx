import { ChakraProvider } from "@chakra-ui/react";
import React from "react";

import ChargeWallet from "../views/ChargeWallet";

const Dashboard = () => {

  return (
    <ChakraProvider>
      <ChargeWallet />
    </ChakraProvider>
  );
};

export default Dashboard;
