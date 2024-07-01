import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import Cookies from "js-cookie";

const useEditBook = () => {
	const token = Cookies.get("token");
	return useMutation({
		mutationFn: (book_id:number) =>
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
