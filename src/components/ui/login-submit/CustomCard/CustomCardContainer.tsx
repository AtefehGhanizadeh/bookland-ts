import { Card } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface Props{
    marginTop?:string,
    marginBottom?:string,
    roundedTop?:string,
    children:ReactNode
}
function CustomCardContainer(props:Props){
    return(
        <Card marginTop={props.marginTop} marginBottom={props.marginBottom}  display="flex" flexDirection="column" rowGap="16px" roundedBottom='20px' roundedTop={props.roundedTop?props.roundedTop:"20px"} bgColor='white' className='px-[48px] py-[20px]'>
            {props.children}
        </Card>
    )
}

export default CustomCardContainer