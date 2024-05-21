import { Flex, Heading } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const FavoriteCategoriesItems = ({category,imageSrc}:{category:string,imageSrc:any}) => {
  return (
    <Link
    href={`/filter/category?category=${category}`}
    className="flex-grow w-[25%]"
  >
    <div className=" w-full h-[230px] md:h-[300px] relative rounded-2xl overflow-hidden">
      <Image
      alt=""
        className="w-full h-full brightness-[0.3] absolute z-[-1]"
        src={imageSrc}
      />
      <Flex
        justifyContent="center"
        alignItems="center"
        height="full"
      >
        <Heading
          color="white"
          fontFamily="Vazirmatn"
          fontWeight="semibold"
          fontSize={{ base: "20px", md: "35px" }}
          textAlign="center"

        >
          {category}
        </Heading>
      </Flex>
    </div>
  </Link>
  )
}

export default FavoriteCategoriesItems