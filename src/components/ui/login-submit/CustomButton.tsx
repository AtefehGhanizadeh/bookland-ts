import { ComponentPropsWithoutRef, ReactNode } from "react";
import { Button } from "@chakra-ui/react";

interface Props extends ComponentPropsWithoutRef<"button">{
    type?:"button" | "submit" | "reset",
    children:ReactNode
    className?:string,

}


function CustomButton({type,children,className,...rest}:Props) {
  return (
    <button
    {...rest}
      type={type}
      className={`text-center px-[8px] py-[12px] rounded-[16px] text-white h-[49px] font-normal text-[16px] leading-[24px] overflow-hidden ${className} bg-primaryBlue`}
    >
      {children}
    </button>
  );
}

export default CustomButton;
