import { useQuery } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import useShowToast from "@/src/components/ui/useShowToast";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { Response, TransactionInformation } from "@/src/helpers/Interfaces";

const useTransaction = (page:number) => {
	const token = Cookies.get("token");
	return useQuery<TransactionInformation,AxiosError<Response<TransactionInformation>>>({
		queryKey: ["transactionHistory", page],
		queryFn: () =>
			axios
				.get<Response<TransactionInformation>>(
					`http://Localhost:8000/api/user/wallet-history?page=${page}`,
					{
						headers: { Authorization: "Bearer " + token },
					}
				)
				.then((res) => res.data.data),
	});
};

export default useTransaction;
