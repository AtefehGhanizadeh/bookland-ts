import { Flex, Heading } from '@chakra-ui/react'
import React from 'react'
import FavoriteCategoriesItems from '@/src/components/homepage/favoriteCategories/FavoriteCategoriesItems'
import loveImage from '@/public/assets/images/BookOfLove.webp'
import tanzImage from '@/public/assets/images/TanzeImage.jpg'
import hayajanImage from '@/public/assets/images/hayajanImage.jpg'


const FavoriteCategories = () => {
  return (
    <Flex flexDir="column" gap="10px">
              <Heading
                fontFamily="Vazirmatn"
                fontWeight="medium"
                fontSize={{base:"20px",md:"24px"}}
              >
                دسته بندی های محبوب
              </Heading>
              <Flex gap="10px">
               <FavoriteCategoriesItems category='عاشقانه' imageSrc={loveImage}/>
               <FavoriteCategoriesItems category="هیجان انگیز"imageSrc={hayajanImage}/>
               <FavoriteCategoriesItems category='طنز'  imageSrc={tanzImage}/>
              </Flex>
            </Flex>

  )
}

export default FavoriteCategories