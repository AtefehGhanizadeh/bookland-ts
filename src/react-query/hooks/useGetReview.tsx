import { useQuery } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import useShowToast from "@/src/components/ui/useShowToast";
import { Response } from "@/src/helpers/Interfaces";

interface Review{
	review_average: number, 
	review_count: number
  }
  

const useGetReview = (id:number) => {
	// const showToast = useShowToast();
	return useQuery<Review, AxiosError>({
		queryKey: ["bookReview",id],
		queryFn: () =>
			axios
				.get<Response<Review>>(`http://Localhost:6002/api/book/reviews/${id}`)
				.then((res) => res.data.data)
				// .catch((err) => {
				// 	showToast(err.response.data.result.error_message);
				// }),
	});
};

export default useGetReview;
