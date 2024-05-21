import { ReactNode } from "react";

interface Props{
    type?:"button" | "submit" | "reset",
    children:ReactNode
    className:string
}


function CustomButton({type,children,className}:Props) {
  return (
    <button
      type={type}
      className={`text-center px-[8px] py-[12px] rounded-[16px] text-white h-[49px] font-normal text-[16px] leading-[24px] overflow-hidden ${className}`}
    >
      {children}
    </button>
  );
}

export default CustomButton;
