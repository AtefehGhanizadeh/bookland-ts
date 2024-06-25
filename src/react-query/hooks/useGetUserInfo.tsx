import { useQuery } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import Cookies from "js-cookie";
import { Response } from "@/src/helpers/Interfaces";

 interface Values{
	email:string,
	username:string
 }

const useUserProfile = () => {
	const token = Cookies.get("token");
	return useQuery<Values,AxiosError<Response<Values>>>({
		queryKey: ["userinfo"],
		queryFn: () =>
			axios
				.get<Response<Values>>("http://Localhost:8000/api/user/profile", {
					headers: { Authorization: "Bearer " + token },
				})
				.then((res) => res.data.data)
	});
};

export default useUserProfile;
