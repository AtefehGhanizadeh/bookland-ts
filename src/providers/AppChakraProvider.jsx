import theme from "@/styles/theme";
import { ChakraProvider } from "@chakra-ui/react";


const AppChakraProvider = ({ children }) => {
 return (
  <>
   <ChakraProvider theme={theme}>{children}</ChakraProvider>
  </>
 );
};

export default AppChakraProvider;
