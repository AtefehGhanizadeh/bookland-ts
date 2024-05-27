import React, { useEffect, useState } from "react";
import SearchBox from "@/src/components/navbar/SearchBox";
import { Box, Flex } from "@chakra-ui/react";
import Link from "next/link";
import Cookies from "js-cookie";
import { Container } from "@chakra-ui/react";

import Logo from "@/src/components/ui/Logo";
import UserIcon from "@/src/components/ui/UserIcon";
import NavMenu from "@/src/components/navbar/NavMenu";


function Navbar() {
  const [tokenState, setTokenState] = useState<string|undefined>();


  useEffect(() => {
    const token = Cookies.get("token");
    setTokenState(token);
  });

  function exitHandler() {
    Cookies.remove("token")
    setTokenState('');
  }

  return (
    <nav className=" w-full bg-white sticky top-0 z-[80]  shadow-lg">
      <Container
        centerContent
        w="90%"
        maxW="7xl"
        paddingX="0"
        className="md:pt-[20px] md:pb-[2px] h-full"
      >
        <Flex flexDir="column" gap="10px" width="full">
          <Flex
            justifyContent="space-between"
            alignItems="center"
            flexWrap="wrap"
            className="gap-[10px] md:gap-[35px]"
          >
            <Link href="/" className="md:order-1">
              <Logo />
            </Link>
            <Flex className="gap-[10px] md:gap-[35px] sm:order-3" order={{sm:3}}>
              <div className="h-full">
                <Link
                  href={tokenState ? "/user/userProfile" : "/login"}
                  className="border-[0.5px] border-[#C8C8C8] flex p-[5px] rounded-[10px] gap-[2px] items-center h-[30px] md:h-[44px]"
                >
                  <UserIcon />
                  <div className="text-[#515457] text-[13px] font-normal">
                    {tokenState ? "پروفایل من" : "ورود/ثبت نام"}
                  </div>
                </Link>
              </div>
              {tokenState && (
                <button
                  onClick={() => exitHandler()}
                  className="text-[#515457] text-[13px] font-normal border-[0.5px] border-[#C8C8C8] px-[15px] rounded-[10px]  items-center h-[30px] md:h-[44px]"
                >
                  خروج
                </button>
              )}
            </Flex>
            <Box className="flex-1 min-w-[200px]" order={{sm:2}}>
              <SearchBox />
            </Box>
          </Flex>
          <ul className="flex items-center gap-[25px] md:gap-[50px] md:pt-[15px]">
            <NavMenu />
            <li className="text-[13px] md:text-[18px]">
              <Link href="/call-us">ارتباط با ما</Link>
            </li>
            <li className="text-[13px] md:text-[18px]">
              <Link href="/contact-us">همکاری با ما</Link>
            </li>
          </ul>
        </Flex>
      </Container>
    </nav>
  );
}

export default Navbar;
