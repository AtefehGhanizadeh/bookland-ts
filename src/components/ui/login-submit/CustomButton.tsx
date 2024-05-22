import { ComponentPropsWithoutRef, ReactNode } from "react";
import { Button } from "@chakra-ui/react";

interface Props extends ComponentPropsWithoutRef<"button">{
    type?:"button" | "submit" | "reset",
    children:ReactNode
    className?:string,
    _before?:{
      content: string,
      position: string,
      right: string,
      top: string,
      h: string,
      w: string,
      backgroundColor: string,
    }
}


function CustomButton({type,children,className,_before,...rest}:Props) {
  return (
    <Button
    _before={_before}
    {...rest}
      type={type}
      className={`text-center px-[8px] py-[12px] rounded-[16px] text-white h-[49px] font-normal text-[16px] leading-[24px] overflow-hidden ${className} bg-primaryBlue`}
    >
      {children}
    </Button>
  );
}

export default CustomButton;
