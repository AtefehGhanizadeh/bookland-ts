import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import Cookies from "js-cookie";

const useDelete = (book_id:number) => {
	const token = Cookies.get("token");
	return useMutation({
		mutationFn: () =>
			axios
				.delete(
					`http://Localhost:8000/api/publisher/books/${book_id}`,
					{
						headers: { Authorization: "Bearer " + token },
					}
				)
				.then((response) => {
					console.log("Deleted successfully", response.data);
					window.location.reload();
				})
				.catch((error) => {
					console.error("Error deleting resource", error);
				}),
	});
};

export default useDelete;
