import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/router";
import { Result } from "@/src/helpers/Interfaces";

interface FormValues{
    email: string|null,
    activation_code: string|undefined,
    password: string,
    password2: string,
}

interface Response{
  data:null,
  result:Result
}


function useSendResetPasswordInfo() {
  const router=useRouter()

  return useMutation<Response,Error,FormValues>({
    mutationFn: (values)=>axios.post<Response>("http://Localhost:8000/api/auth/reset-password",values).then(res=>res.data),
    onSuccess: (data) => {
      console.log(data)
      router.push('/login')
    },
  });
}

export default useSendResetPasswordInfo