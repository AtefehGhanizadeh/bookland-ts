import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import axios from "axios";
import { Result } from "@/src/helpers/Interfaces";

interface Values {
  username: string;
  email: string|null;
  password: string;
  password2: string;
}

interface Response{
    data:string,
    result:Result
}

var inhalfHours = new Date(new Date().getTime() + 30 * 60 * 1000);

const useSendUserSignupInfo = () => {
  const router = useRouter();

  return useMutation<string,Error,Values>({
    mutationFn: (values:Values) => axios.post<Response>("http://Localhost:8000/api/auth/user/signup",values).then(res=>res.data.data),
    onSuccess: (data) => {
      console.log(data);
      const token = data;
      Cookies.set("token", token, { expires: inhalfHours });
      router.push("/");
    },
  });
};

export default useSendUserSignupInfo;
