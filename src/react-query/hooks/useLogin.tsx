import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import { Response } from "@/src/helpers/Interfaces";

var inhalfHours = new Date(new Date().getTime() + 30 * 60 * 1000);

interface LoginFormValues {
  email_or_username: string;
  password: string;
}


interface DecodeObj {
  role_id: number;
  user_ud: number;
  exp: number;
}

const useLogin = () => {
  const router = useRouter();

  return useMutation<string, Error, LoginFormValues>({
    mutationFn: (values: LoginFormValues) =>
      axios
        .post<Response<string>>("http://Localhost:8000/api/auth/login", values)
        .then((res) => res.data.data),
    onSuccess: (data) => {
      const token = data;
      Cookies.set("token", token, { expires: inhalfHours });
      const decoded: DecodeObj = jwtDecode(token);
        if(decoded.role_id===2){
        	router.push("/");
        };
        if(decoded.role_id===1){
        	router.push("/Publisher");
        };
    },
  });
};

export default useLogin;
