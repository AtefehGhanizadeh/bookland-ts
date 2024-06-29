import { useMutation } from "@tanstack/react-query";
import { API_ENDPOINTS } from "@/utils/api/endpoints";
import axios from "axios";
import Cookies from "js-cookie";

const useEditBook = (book_id) => {
	const token = Cookies.get("token");
	return useMutation({
		mutationFn: () =>
			axios.put(
				`http://Localhost:8000/api/publisher/books/${book_id}`,

				{
					headers: { Authorization: "Bearer " + token },
				}
			),
		onSuccess: (data) => {
			console.log(data);
		},
	});
};

export default useEditBook;
