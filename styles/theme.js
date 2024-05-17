import { extendTheme } from "@chakra-ui/react";
import colors from '@/styles/colors'

const theme = {
 direction: "rtl",
 colors,
 config: {
  initialColorMode: "light",
  useSystemColorMode: false,
 },
};

export default extendTheme(theme);