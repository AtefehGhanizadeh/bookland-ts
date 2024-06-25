import { useQuery } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import useShowToast from "@/src/components/ui/useShowToast";
import { Response } from "@/src/helpers/Interfaces";

const useGetBookCategory = (bookId:number) => {
  const showToast = useShowToast();
  return useQuery<{id:number,name:string}[],AxiosError>({
    queryKey: ["book-category"],
    queryFn: () =>
      axios
        .get<Response<{id:number,name:string}[]>>(`http://Localhost:8000/api/books/${bookId}/categories`)
        .then((res) => res.data.data)
        // .catch((err) => {
        //   showToast(err.response.data.result.error_message);
        // }),
  });
};

export default useGetBookCategory;