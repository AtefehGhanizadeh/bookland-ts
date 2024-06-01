import { useQuery } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import useShowToast from "@/src/components/ui/useShowToast";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { Response } from "@/src/helpers/Interfaces";

 interface Values{
	email:string,
	username:string
 }

const useUserProfile = () => {
	const showToast = useShowToast();
	const token = Cookies.get("token");
	const{push}=useRouter()
	return useQuery<Values,AxiosError<Response<Values>>>({
		queryKey: ["userinfo"],
		queryFn: () =>
			axios
				.get<Response<Values>>("http://Localhost:8000/api/user/profile", {
					headers: { Authorization: "Bearer " + token },
				})
				.then((res) => res.data.data)
				// .catch((err) => {
				// 	showToast(err.response.data.result.error_message);
				// 	if (
				// 		err.response.status === 401 ||
				// 		err.response.status === 403
				// 	) {
				// 		token ? Cookies.remove("token") : "";
				// 		push("/login");
				// 	}
				// }),
	});
};

export default useUserProfile;
