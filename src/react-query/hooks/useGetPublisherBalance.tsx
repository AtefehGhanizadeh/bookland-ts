import { useQuery } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import Cookies from "js-cookie";
import { Response } from "@/src/helpers/Interfaces";
interface Values{
	deposit: number,
    withdraw: number
}

const useGetPublisherBalance = () => {
	const token = Cookies.get("token");
	return useQuery<Values,AxiosError<Response<Values>>>({
		queryKey: ["publisherwalletinfo"],
		queryFn: () =>
			axios
				.get<Response<Values>>(
					"http://Localhost:8000/api/publisher/wallet-balance",
					{
						headers: { Authorization: "Bearer " + token },
					}
				)
				.then((res) => res.data.data)
	});
};

export default useGetPublisherBalance;
