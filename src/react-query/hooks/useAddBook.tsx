import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import Cookies from "js-cookie";
import useShowToast from "@/src/components/ui/useShowToast";
import { useRouter } from "next/router";

const useAddBook = () => {
	const token = Cookies.get("token");
	const showToast=useShowToast()
	const router=useRouter()
	return useMutation({
		mutationFn: () =>
			axios.post(
				"http://Localhost:8000/api/publisher/books",

				{
					headers: { Authorization: "Bearer " + token },
				}
			),
		onSuccess: (data) => {
			showToast("ناشر گرامی کتاب شما با موفقیت ثبت گردید.");
			showToast(
				"ناشر عزیز مبلغ 5000 تومان به عنوان کمیسیون از کیف پول شما کسر گردید."
			);
			router.push("./");
		},
		onError: (err) => {
			// showToast(err.response.data.result.error_message);
		},
	});
};

export default useAddBook;
