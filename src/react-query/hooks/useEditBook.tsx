import useShowToast from "@/src/components/ui/useShowToast";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

const useEditBook = (book_id:number) => {
	const token = Cookies.get("token");
	const showToast=useShowToast()
	const router=useRouter()
	return useMutation({
		mutationFn: (values:FormData) =>
			axios.post(
				`http://Localhost:8000/api/publisher/books/${book_id}`,values,

				{
					headers: { Authorization: "Bearer " + token },
				}
			),
		onSuccess: (data) => {
			showToast("ناشر گرامی کتاب شما با موفقیت ثبت گردید.","success");
			router.push("/Publisher/views/Books");
		},
	});
};

export default useEditBook;
