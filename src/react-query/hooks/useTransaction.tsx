import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useShowToast from "@/src/components/ui/useShowToast";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { Response, TransactionInformation } from "@/src/helpers/Interfaces";

const useTransaction = (page:number) => {
	const showToast = useShowToast();
	const token = Cookies.get("token");
	const{push}=useRouter()
	return useQuery<TransactionInformation>({
		queryKey: ["transactionHistory", page],
		queryFn: () =>
			axios
				.get<Response<TransactionInformation>>(
					`http://Localhost:8000/api/user/wallet-history?page=${page}`,
					{
						headers: { Authorization: "Bearer " + token },
					}
				)
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

export default useTransaction;
