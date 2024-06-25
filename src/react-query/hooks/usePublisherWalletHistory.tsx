import { useRouter } from "next/router";
import axios from "axios";
import Cookies from "js-cookie";
import useShowToast from "@/src/components/ui/useShowToast";
import { useQuery } from "@tanstack/react-query";

const usePublisherWalletHistory = () => {
	const showToast = useShowToast();
	const token = Cookies.get("token");
	const { push } = useRouter();
	return useQuery({
		queryKey: ["PublisherWallet"],
		queryFn: () =>
			axios
				.get(
					`http://Localhost:8000/api/publisher/wallet-history`,
					{
						headers: { Authorization: "Bearer " + token },
					}
				)
				.then((res) => res.data)
				.catch((err) => {
					showToast(err.response.data.result.error_message);
					if (
						err.response.status === 401 ||
						err.response.status === 403
					) {
						token ? Cookies.remove("token") : "";
						push("/login");
					}
				}),
	});
};

export default usePublisherWalletHistory;
