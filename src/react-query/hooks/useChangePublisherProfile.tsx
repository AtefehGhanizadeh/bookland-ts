import { useMutation } from "@tanstack/react-query";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import axios from "axios";

interface Values{
	address?:string
	phone_number?:string
	phone_number2?:string
}


const useChangePublisherProfile = () => {
	const token = Cookies.get("token");
	const { reload } = useRouter();
	return useMutation({
		mutationFn: (value:Values|FormData)=>axios.put('http://Localhost:8000/api/publisher/profile',value,{
			headers: {
				Authorization: "Bearer " + token,
			},
		}),
		onSuccess: () => {
			reload()
		},
	});
};

export default useChangePublisherProfile;
