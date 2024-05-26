import theme from "@/styles/theme";
import { ChakraProvider } from "@chakra-ui/react";
import { PropsWithChildren } from "react";


const AppChakraProvider = ({ children }:PropsWithChildren) => {
 return (
  <>
   <ChakraProvider theme={theme}>{children}</ChakraProvider>
  </>
 );
};

export default AppChakraProvider;
