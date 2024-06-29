import { Card, CardProps } from "@chakra-ui/react";
import { ReactNode,ComponentPropsWithoutRef } from "react";

interface Props extends CardProps{
    children:ReactNode
}

function CustomCardContainer({children,...rest}:Props) {
  return (
    <Card 
    width="100%"
    rowGap="16px"
    roundedBottom="16px"
    roundedTop="16px"
    bgColor="white"
    {...rest}
    // minH={props.minH?props.minH:""}
    // height={props.height?props.height:""}
    //   marginTop={props.marginTop}
    //   marginBottom={props.marginBottom}
    //   paddingTop={props.pt}
    //   paddingBottom={props.pb}
    //   paddingRight={props.pr}
    //   paddingLeft={props.pl}
    //   position={props.position}
    //   top={props.top}
    >
      {children}
    </Card>
  );
}

export default CustomCardContainer;
