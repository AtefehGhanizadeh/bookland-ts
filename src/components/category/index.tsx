import React, { useState } from "react";
import { Flex } from "@chakra-ui/react";
import FilteredList from "@/src/components/category/FilteredList";
import FilterBox from "@/src/components/category/FilterBox";
import Navbar from "@/src/components/navbar/Navbar";
import Drawer from '@/src/components/category/Drawer'


function Categories() {

  const[priceRange,setPriceRange]=useState<number|null>(null);
  const[pageRange,setPageRange]=useState<number|null>(null);
  const[language,setLanguage]=useState<string|null>(null);
  const[category,setCategory]=useState<string|null>(null);
  return (
    <div className="w-full">
      <Navbar/>
      <Flex flexDir="column" width="90%" marginX="auto" paddingY="50px" gap="40px">
        <Flex className="flex flex-col lg:flex-row" width="full" gap="20px">
          <div  className="hidden lg:block lg:w-[20%]">
            <FilterBox setPriceRange={setPriceRange} setPageRange={setPageRange} setLanguage={setLanguage} language={language}/>
          </div>
          <div className="lg:hidden">
            <Drawer setPriceRange={setPriceRange} setPageRange={setPageRange} setLanguage={setLanguage} language={language}/>
          </div>
          
          <div className="w-full lg:w-[80%]">
            <FilteredList priceRange={priceRange} pageRange={pageRange} language={language}/>
          </div>
        </Flex>
      </Flex>
    </div>
  );
}

export default Categories;
