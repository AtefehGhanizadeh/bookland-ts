import { useMutation } from "@tanstack/react-query";
import { Dispatch, SetStateAction } from "react";
import axios from "axios";
import { Result } from "@/src/helpers/Interfaces";

interface Email{
  email:string|null
}

interface Response{
  data:null,
  result:Result
}

const useSendEmail=(endpoint?:string,setStepfunc?:Dispatch<SetStateAction<number>>)=> {

  const urlEndpoint=endpoint==="send-signup-email"?"/api/auth/send-signup-email":"/api/auth/send-resetpassword-code"
    return useMutation<Response,Error,Email>({
        mutationFn: (value:Email)=>axios.post<Response>("http://Localhost:8000"+urlEndpoint,value).then(res=>res.data),
        onSuccess: () => {
          if(setStepfunc)
          setStepfunc(2)
        },
      });
}

export default useSendEmail