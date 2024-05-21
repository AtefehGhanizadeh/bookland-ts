import React from 'react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
  } from "@chakra-ui/react";
  import { ChevronDownIcon, HamburgerIcon } from "@chakra-ui/icons";
  import Link from 'next/link';

  const categoryList = [
    "کمک درسی ",
    "داستانی",
    "غیر داستانی",
    "زندگینامه",
    "طنز",
    "رمان",
    "هیجان انگیز",
    "عاشقانه",
    "زبان خارجی",
    "رازآلود",
    "شعر",
    "فلسفه",
    " علمی-تخیلی",
    "تاریخ",
    "خودیاری",
  ];

const NavMenu = () => {
  return (
    <Menu offset={[0,0]} strategy='fixed'>
    {({ isOpen }) => (
      <>
        <MenuButton
          as={Button}
          rightIcon={<ChevronDownIcon />}
          leftIcon={<HamburgerIcon />}
          padding="0"
          fontSize={{ base: "13px", md: "18px" }}
          fontFamily="Vazirmatn"
          fontWeight="normal"
          bg="inherit"
          _hover={{ backgroundColor: `${isOpen ? "" : "inherit"}` }}
          _active={{ backgroundColor: "secondaryBlue" }}
        >
          دسته بندی ها
        </MenuButton>
        <MenuList
          marginTop="0px"
          borderRadius="0"
          outline="none"
          border="none"
          maxH="580px"
          width={{base:"290px",md:"300px"}}
        >
          {categoryList.map((category) => (
            <MenuItem
              _hover={{ backgroundColor: "secondaryBlue" }}
              _focus={{backgroundColor: "secondaryBlue"}}
              key={categoryList.indexOf(category)}
            >
              <Link
                className="w-full"
                href={
                  category !== "زبان خارجی"
                    ? `/filter/category?category=${category}`
                    : `filter/group?group=language-original`
                }
              >
                {category}
              </Link>
            </MenuItem>
          ))}
        </MenuList>
      </>
    )}
  </Menu>
  )
}

export default NavMenu