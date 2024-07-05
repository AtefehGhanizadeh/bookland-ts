import { useMutation } from "@tanstack/react-query";
import useShowToast from "@/src/components/ui/useShowToast";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import axios from "axios";

interface Values{
	address?:string
	phone_number?:string
	phone_number2?:string
}


const useChangePublisherProfile = () => {
	const showToast = useShowToast();
	const token = Cookies.get("token");
	const { push } = useRouter();
	return useMutation({
		mutationFn: (value:Values|FormData)=>axios.put('http://Localhost:8000/api/publisher/profile',value,{
			headers: {
				Authorization: "Bearer " + token,
			},
		}),
		onSuccess: (data) => {
			// window.location.reload();
		},
	});
};

export default useChangePublisherProfile;
