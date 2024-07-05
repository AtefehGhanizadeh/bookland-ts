import { useQuery } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import Cookies from "js-cookie";
import { Response } from "@/src/helpers/Interfaces";



const useGetWalletInfo = () => {
	const token = Cookies.get("token");
	return useQuery<number,AxiosError<Response<number>>>({
		queryKey: ["walletinfo"],
		queryFn: () =>
			axios
				.get<Response<number>>("http://Localhost:8000/api/user/wallet-balance", {
					headers: { Authorization: "Bearer " + token },
				})
				.then((res) =>{
					console.log(res.data.data)
					return res.data.data}),

		enabled:token?true:false
	});
};

export default useGetWalletInfo;
