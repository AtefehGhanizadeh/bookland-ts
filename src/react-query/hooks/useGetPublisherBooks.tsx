import { Book, Response } from "@/src/helpers/Interfaces";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useShowToast from "@/src/components/ui/useShowToast";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

const useGetPublisherBooks = () => {
	const { push } = useRouter();
	const showToast = useShowToast();
	const token = Cookies.get("token");
	return useQuery<Book[]>({
		queryKey: ["publisherbooks"],
		queryFn: () =>
			axios
				.get<Response<Book[]>>("http://Localhost:8000/api/publisher/books", {
					headers: { Authorization: "Bearer " + token },
				})
				.then((res) => res.data.data)
				// .catch((err) => {
				// 	// showToast(err.response.data.result.error_message);
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

export default useGetPublisherBooks;
