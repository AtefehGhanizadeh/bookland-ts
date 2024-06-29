import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import Cookies from "js-cookie";
import useGetBookReviews from "./useGetBookReviews";
import useShowToast from "@/src/components/ui/useShowToast";
import { Response } from "@/src/helpers/Interfaces";

interface Values {
  id: number;
  value: number;
}

function useSendReview(bookId: number) {
  const { refetch } = useGetBookReviews(bookId);
  const token = Cookies.get("token");
  const showToast = useShowToast();
  return useMutation<Response<''>,AxiosError<Response<''>>,Values>({
    mutationFn: (obj: Values) =>
      axios
        .post<Response<''>>(
          `http://Localhost:6002/api/book/reviews`,
          { bookId: obj.id, rating: obj.value },
          {
            headers: { Authorization: "Bearer " + token },
          }
        )
        .then((res) => {
          refetch();
          showToast("نظر شما یا موفقیت ثبت شد.", "success");
          return res.data;
        }),
      onError:(err)=>{
        if(err.response?.data.result.error_message)
          showToast(err.response.data.result.error_message)
      }
  });
}

export default useSendReview;
