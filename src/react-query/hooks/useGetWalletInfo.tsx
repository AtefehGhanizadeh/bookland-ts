import { useQuery } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import Cookies from "js-cookie";
import { Response } from "@/src/helpers/Interfaces";

interface Values{
	data:number
}

const useGetWalletInfo = () => {
	const token = Cookies.get("token");
	return useQuery<Values,AxiosError<Response<Values>>>({
		queryKey: ["walletinfo"],
		queryFn: () =>
			axios
				.get<Response<Values>>("http://Localhost:8000/api/user/wallet-balance", {
					headers: { Authorization: "Bearer " + token },
				})
				.then((res) => res.data.data),

		enabled:token?true:false
	});
};

export default useGetWalletInfo;
