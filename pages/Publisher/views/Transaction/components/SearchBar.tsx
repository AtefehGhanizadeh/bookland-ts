import React, { SetStateAction, Dispatch } from "react";
import {
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  useColorModeValue,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
export function SearchBar({
  setSearchValue,
}: {
  setSearchValue: Dispatch<SetStateAction<string>>;
}) {
  const mainTeal = useColorModeValue("teal.300", "teal.300");
  const searchIconColor = useColorModeValue("gray.700", "gray.200");
  const inputBg = useColorModeValue("white", "gray.800");
  return (
    <InputGroup
      bg={inputBg}
      borderRadius="15px"
      borderColor="black"
      w="200px"
      _focus={{
        borderColor: { mainTeal },
      }}
      _active={{
        borderColor: { mainTeal },
      }}
    >
      <InputLeftElement>
        <SearchIcon color={searchIconColor} w="15px" h="15px" />
      </InputLeftElement>
      <Input
        fontSize="xs"
        pr="10px"
        dir="rtl"
        placeholder="جستجوی تراکنش ..."
        borderRadius="inherit"
        onChange={(event) => setSearchValue(event.target.value)}
      />
    </InputGroup>
  );
}
