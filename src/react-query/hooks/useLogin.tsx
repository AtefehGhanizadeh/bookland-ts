import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import axios from "axios";

var inhalfHours = new Date(new Date().getTime() + 30 * 60 * 1000);

const useLogin = () => {
	const router = useRouter();

	return useMutation({
		mutationFn: (email_or_username:string,password:string)=>axios.post("http://Localhost:8000/api/auth/login",{email_or_username,password}).then(res=>res.data.data),
		onSuccess: (data) => {
			const token = data;
            console.log(data)
			Cookies.set("token", token, { expires: inhalfHours });
			const decoded = jwtDecode(token);
      		// if(decoded.role_id===2){
			// 	router.push("/");
			// };
			// if(decoded.role_id===1){
			// 	router.push("/Publisher");
			// };
		},
	});
};

export default useLogin;
