import { useQuery } from "@tanstack/react-query";
import { API_ENDPOINTS } from "@/utils/api/endpoints";
import axios from "axios";
import useShowToast from "@/components/ui/useShowToast";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

const useGetWalletInfo = () => {
	const showToast = useShowToast();
	const token = Cookies.get("token");
	const { push } = useRouter();
	return useQuery({
		queryKey: ["walletinfo"],
		queryFn: () =>
			axios
				.get("http://Localhost:8000" + API_ENDPOINTS.BALANCE, {
					headers: { Authorization: "Bearer " + token },
				})
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
		enabled:token?true:false
	});
};

export default useGetWalletInfo;
