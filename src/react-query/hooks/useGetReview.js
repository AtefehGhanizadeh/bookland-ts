import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useShowToast from "@/components/ui/useShowToast";

const useGetReview = (id) => {
	const showToast = useShowToast();
	return useQuery({
		queryKey: ["bookReview"],
		queryFn: () =>
			axios
				.get(`http://Localhost:6002/api/book/reviews/${id}`)
				.then((res) => res.data)
				.catch((err) => {
					showToast(err.response.data.result.error_message);
				}),
	});
};

export default useGetReview;
