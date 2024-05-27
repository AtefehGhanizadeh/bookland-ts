import { Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, Radio, RadioGroup, Stack, useDisclosure } from "@chakra-ui/react"
import React, { Dispatch, SetStateAction } from "react"
import FilterBox from "./FilterBox"
import { Icon } from "@chakra-ui/react";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";

interface Props{
    setPriceRange:Dispatch<SetStateAction<number|null>> 
    setPageRange:Dispatch<SetStateAction<number|null>> 
    setLanguage:Dispatch<SetStateAction<string|null>> 
    language:string|null
  }

function PlacementExample(props:Props) {
    const { isOpen, onOpen, onClose } = useDisclosure()

  
    return (
      <>
      <div className="w-full bg-white">
        <Button bgColor="inherit"  onClick={onOpen} display="flex" justifyContent="start" w="full" _hover={{backgroundColor:"inherit"}}>
          <Icon as={HiAdjustmentsHorizontal} ml="8px"/>
          <span>فیلترها</span>
          
        </Button>
      </div>
        
        <Drawer placement="bottom"  onClose={onClose} isOpen={isOpen} >
          <DrawerOverlay />
          <DrawerContent maxH="400px">
            <DrawerHeader borderBottomWidth='1px' justifyContent='space-between' alignItems="center" display='flex'>فیلترها
            <Button onClick={onClose} textColor="red" bgColor="inherit">بستن</Button>
            </DrawerHeader>
            <DrawerBody>
              <FilterBox setPriceRange={props.setPriceRange} setPageRange={props.setPageRange} setLanguage={props.setLanguage} language={props.language}/>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    )
  }

export default PlacementExample