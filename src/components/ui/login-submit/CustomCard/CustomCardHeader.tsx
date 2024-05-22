import { CardHeader } from "@chakra-ui/react"
import { PropsWithChildren } from "react"

function CustomCardHeader({children}:PropsWithChildren){
    return(
        <CardHeader fontWeight='bold' className="text-[18px] sm:text-[24px]" lineHeight='40px' color='primary' textAlign='right' padding="0">{children}</CardHeader>
    )
}

export default CustomCardHeader