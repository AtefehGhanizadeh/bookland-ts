import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { Dispatch,SetStateAction } from "react";

interface Values{
    email: string|null,
    activation_code: string,
}

const useSendVerificationCode=(setStepfunc:Dispatch<SetStateAction<number>>)=> {
  return useMutation<Values,Error,Values>({
    mutationFn: (values:Values)=>axios.post("http://Localhost:8000/api/auth/verify-email-code",values).then(res=>res.data),
    onSuccess: (savedEmail) => {
      console.log(savedEmail);
      setStepfunc(3);
    },
    // onError:(e)=>{
    //   console.log(e.response.data.result.error_message
    //     )
    // }
  });
}

export default useSendVerificationCode