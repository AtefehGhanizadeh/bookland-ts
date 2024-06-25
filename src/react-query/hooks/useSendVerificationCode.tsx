import { Result } from "@/src/helpers/Interfaces";
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { Dispatch,SetStateAction } from "react";

interface Values{
    email: string|null,
    activation_code: string,
}


const useSendVerificationCode=(setStepfunc:Dispatch<SetStateAction<number>>)=> {
  return useMutation<Values,AxiosError<Result>,Values>({
    mutationFn: (values:Values)=>axios.post("http://Localhost:8000/api/auth/verify-email-code",values).then(res=>res.data),
    onSuccess: () => {
      setStepfunc(3);
    },

  });
}

export default useSendVerificationCode