import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/router";
import { Response } from "@/src/helpers/Interfaces";
import useShowToast from "@/src/components/ui/useShowToast";
interface FormValues{
    email: string|null,
    activation_code: string|undefined,
    password: string,
    password2: string,
}


function useSendResetPasswordInfo() {
  const router=useRouter()
  const showToast=useShowToast()

  return useMutation<Response<null>,Error,FormValues>({
    mutationFn: (values)=>axios.post<Response<null>>("http://Localhost:8000/api/auth/reset-password",values).then(res=>res.data),
    onSuccess: (data) => {
      console.log(data)
      showToast("رمز عبور شما با موفقیت تغییر کرد.","success")
      router.push('/login')
    },
  });
}

export default useSendResetPasswordInfo