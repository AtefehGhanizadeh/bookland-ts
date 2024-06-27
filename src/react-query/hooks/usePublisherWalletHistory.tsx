import { useRouter } from "next/router";
import axios, { AxiosError } from "axios";
import Cookies from "js-cookie";
import useShowToast from "@/src/components/ui/useShowToast";
import { useQuery } from "@tanstack/react-query";
import { TransactionItem ,Response} from "@/src/helpers/Interfaces";

const usePublisherWalletHistory = () => {
	const token = Cookies.get("token");
	return useQuery<TransactionItem[],AxiosError<Response<TransactionItem[]>>>({
		queryKey: ["PublisherWallet"],
		queryFn: () =>
			axios
				.get<Response<TransactionItem[]>>(
					`http://Localhost:8000/api/publisher/wallet-history`,
					{
						headers: { Authorization: "Bearer " + token },
					}
				)
				.then((res) => res.data.data)
	});
};

export default usePublisherWalletHistory;
