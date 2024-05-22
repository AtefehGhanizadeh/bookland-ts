import { Text } from "@chakra-ui/react"
import { PropsWithChildren } from "react"

function CustomCardParagraph({children}:PropsWithChildren){
    return(
        <Text fontWeight='medium' fontSize='16px' lineHeight='25px' textAlign='right' >{children}</Text>
    )
}
export default CustomCardParagraph