import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useShowToast from "@/src/components/ui/useShowToast";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { Response } from "@/src/helpers/Interfaces";
interface Values{
	deposit: number|null,
    withdraw: number|null
}

const useGetPublisherBalance = () => {
	const showToast = useShowToast();
	const token = Cookies.get("token");
	const { push } = useRouter();
	return useQuery<Values>({
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

export default useGetPublisherBalance;
