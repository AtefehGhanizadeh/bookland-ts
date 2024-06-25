import React, { useEffect, useState } from "react";
import SearchBox from "@/src/components/navbar/SearchBox";
import {
  Box,
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import Link from "next/link";
import Cookies from "js-cookie";
import { Container } from "@chakra-ui/react";

import Logo from "@/src/components/ui/Logo";
import UserIcon from "@/src/components/ui/UserIcon";
import NavMenu from "@/src/components/navbar/NavMenu";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { CiUser } from "react-icons/ci";
import { GoBookmarkFill } from "react-icons/go";
import { GiBookshelf } from "react-icons/gi";
import { FaHistory } from "react-icons/fa";
import { IoWalletOutline } from "react-icons/io5";

function Navbar() {
  const [tokenState, setTokenState] = useState<string | undefined>();
  const [state, setState] = useState(false);

  useEffect(() => {
    const token = Cookies.get("token");
    setTokenState(token);
  });

  function exitHandler() {
    Cookies.remove("token");
    setTokenState("");
  }

  const clickHandler = () => {
    setState((prevState) => !prevState);
  };

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
            <Flex
              className="gap-[10px] md:gap-[35px] sm:order-3"
              order={{ sm: 3 }}
            >
              <div className="h-full">
                {tokenState && (
                  <div className="border-[0.5px] border-[#C8C8C8] flex p-[5px] rounded-[10px] gap-[2px] items-center h-[30px] md:h-[44px]">
                    <UserIcon />
                    <Menu
                      offset={[138, 10]}
                      strategy="fixed"
                      autoSelect={false}
                    >
                      {({ isOpen }) => (
                        <>
                          <MenuButton
                            as={Button}
                            rightIcon={<ChevronDownIcon />}
                            padding="0"
                            fontSize="13px"
                            fontFamily="Vazirmatn"
                            fontWeight="normal"
                            bg="inherit"
                            _hover={{
                              backgroundColor: "inherit",
                            }}
                            _active={{ backgroundColor: "inherit" }}
                            onClick={clickHandler}
                          >
                            پروفایل من
                          </MenuButton>
                          <MenuList
                            zIndex="60"
                            marginTop="0px"
                            borderRadius="10px"
                            maxH="580px"
                            width={{ base: "250px", md: "250px" }}
                            overflow="hidden"
                            padding="10px"
                            display="flex"
                            flexDir="column"
                            gap="20px"
                          >
                            <Link href="/userProfile" onClick={clickHandler}>
                              <MenuItem
                                icon={
                                  <CiUser className="w-[20px] h-[20px] p-0" />
                                }
                                _hover={{
                                  backgroundColor: "white",
                                }}
                                _active={{ backgroundColor: "white" }}
                              >
                                اطلاعات کاربر
                              </MenuItem>
                            </Link>
                            <Link href="/myBooks" onClick={clickHandler}>
                              <MenuItem
                                icon={
                                  <GiBookshelf className="w-[20px] h-[20px] p-0" />
                                }
                                _hover={{
                                  backgroundColor: "white",
                                }}
                                _active={{ backgroundColor: "white" }}
                              >
                                کتابخانه من{" "}
                              </MenuItem>
                            </Link>
                            <Link href="/myBookmarks" onClick={clickHandler}>
                              <MenuItem
                                icon={
                                  <GoBookmarkFill className="w-[20px] h-[20px] p-0" />
                                }
                                _hover={{
                                  backgroundColor: "white",
                                }}
                                _active={{ backgroundColor: "white" }}
                              >
                                علاقه مندی ها
                              </MenuItem>
                            </Link>
                            <Link
                              href="/transactionHistory"
                              onClick={clickHandler}
                            >
                              <MenuItem
                                icon={
                                  <FaHistory className="w-[20px] h-[20px] p-0" />
                                }
                                _hover={{
                                  backgroundColor: "white",
                                }}
                                _active={{ backgroundColor: "white" }}
                              >
                                تاریخچه تراکنش ها
                              </MenuItem>
                            </Link>
                            <Link href="/wallet" onClick={clickHandler}>
                              <MenuItem
                                icon={
                                  <IoWalletOutline className="w-[20px] h-[20px] p-0" />
                                }
                                _hover={{
                                  backgroundColor: "white",
                                }}
                                _active={{ backgroundColor: "white" }}
                              >
                                کیف پول
                              </MenuItem>
                            </Link>
                          </MenuList>
                        </>
                      )}
                    </Menu>
                    {state && (
                      <div
                        className="w-screen h-screen bg-none fixed top-0 left-0 z-50"
                        onClick={clickHandler}
                      ></div>
                    )}
                  </div>
                )}
                {!tokenState && (
                  <Link
                    href="/login"
                    className="border-[0.5px] border-[#C8C8C8] flex p-[5px] rounded-[10px] gap-[2px] items-center h-[30px] md:h-[44px]"
                  >
                    <UserIcon />
                    <div className="text-[#515457] text-[13px] font-normal">
                      ورود/ثبت نام
                    </div>
                  </Link>
                )}
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
            <Box className="flex-1 min-w-[200px]" order={{ sm: 2 }}>
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
