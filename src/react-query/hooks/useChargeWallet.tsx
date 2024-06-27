import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import axios from "axios";
import Cookies from "js-cookie";

const useChargeWallet = (amount:number) => {
	const router = useRouter();
	const token = Cookies.get("token");
	return useMutation({
		mutationFn: () =>
			axios
				.post(
					`http://localhost:5000/api/user/wallet/ChargeUserWallet?amount=${amount}`,
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
			const id=parsedUrl.search
			console.log(parsedUrl)
			localStorage.setItem("id",id)
			router.push(paymentUrl);
		},
	});
};

export default useChargeWallet;
