import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import axios from "axios";
import Cookies from "js-cookie";

const useChargePublisherWallet = (data) => {
	const router = useRouter();
	const token = Cookies.get("token");
	return useMutation({
		mutationFn: () =>
			axios
				.post(
					`http://localhost:5000/api/publisher/wallet/ChargePublisherWallet?amount=${data}`,
					{},
					{
						headers: {
							Authorization: "Bearer " + token,
						},
					}
				)
				.then((res) => res.data),

		onSuccess: (data) => {
			const paymentUrl = data.data;
			const parsedUrl = new URL(paymentUrl);
			const id = parsedUrl.search;
			localStorage.setItem("id", id);
			router.push(paymentUrl);
		},
		onError: (error) => {
			console.error("Error charging publisher's wallet:", error);
			// You can add additional error handling logic or notifications here
		},
	});
};

export default useChargePublisherWallet;
