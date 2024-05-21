import { ReactNode } from "react"

function CustomInputLabel({htmlFor,children}:{htmlFor:string,children:ReactNode}){
    return(
        <label
        htmlFor={htmlFor}
        className="text-[16px] font-bold leading-[25px] text-right"
      >
        {children}
      </label>
    )
}

export default CustomInputLabel