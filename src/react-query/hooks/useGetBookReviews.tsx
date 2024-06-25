import { useQuery } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import useShowToast from "@/src/components/ui/useShowToast";
import { Response } from "@/src/helpers/Interfaces";

interface Review{
  review_average: number, 
  review_count: number
}

const useGetBookReviews = (bookId:number) => {
  const showToast = useShowToast();
  return useQuery<Review, AxiosError>({
    queryKey: ["book-review"],
    queryFn: () =>
      axios
        .get<Response<Review>>(`http://Localhost:8000/api/books/${bookId}/reviews`)
        .then((res) => res.data.data),
        // .catch((err) => {
        //   showToast(err.response.data.result.error_message);
        // }),
    enabled:!!bookId
  });
};

export default useGetBookReviews;
