import Link from "next/link"
import { Flex } from "@chakra-ui/react"
import { ReactNode } from "react"

function CustomCardLink({href,children}:{href:string,children:ReactNode}){
    return(
        <Flex justifyContent='flex-end'>
            <Link href={href} className="font-normal text-[13px] sm:text-[16px] leading-[25px] text-primaryBlue text-right w-full ">{children} &#8598;</Link>
        </Flex>
        
    )
}

export default CustomCardLink