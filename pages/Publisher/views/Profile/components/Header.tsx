// Chakra imports
import { Avatar, Box, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import avatarImg from "@/pages/Publisher/assets/img/avatar.png";

const Header = ({ name, email,avatar }: { name: string; email: string ,avatar:string|null}) => {
  const bgProfile = useColorModeValue(
    "hsla(0,0%,100%,.8)",
    "linear-gradient(112.83deg, rgba(255, 255, 255, 0.21) 0%, rgba(255, 255, 255, 0) 110.84%)"
  );
  const textColor = useColorModeValue("gray.700", "white");
  const borderProfileColor = useColorModeValue(
    "white",
    "rgba(255, 255, 255, 0.31)"
  );
  const emailColor = useColorModeValue("gray.400", "gray.300");
  return (
    <Box
      mb="70px"
      borderRadius="15px"
      px="0px"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        bgImage={bgProfile}
        w="100%"
        h="300px"
        borderRadius="25px"
        bgPosition="50%"
        bgRepeat="no-repeat"
        position="relative"
        display="flex"
        justifyContent="center"
      >
        <Flex
          direction="row"
          mx="1.5rem"
          maxH="330px"
          w="95%"
          justifyContent="space-between"
          align="center"
          backdropFilter="saturate(200%) blur(50px)"
          position="absolute"
          boxShadow="0px 2px 5.5px rgba(0, 0, 0, 0.02)"
          border="2px solid"
          borderColor={borderProfileColor}
          bg={bgProfile}
          p="24px"
          borderRadius="20px"
          transform="translateY(50%)"
        >
          <Flex
            align="center"
            mb="0px"
            direction="column"
            justifyContent="center"
            alignItems="center"
            w="100%"
          >
            <Avatar src={avatar?avatar:avatarImg.src} w="80px" h="80px" borderRadius="15px" />
            <Flex
              alignItems="center"
              direction="column"
              maxWidth="100%"
              my="14px"
            >
              <Text
                fontSize="xl"
                color={textColor}
                fontWeight="bold"
                ms="8px"
                textAlign="center"
              >
                {name}
              </Text>
              <Text
                fontSize="md"
                color={emailColor}
                fontWeight="semibold"
                textAlign="center"
              >
                {email}
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default Header;
