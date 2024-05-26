import { useQuery } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import useShowToast from "@/src/components/ui/useShowToast";
import { ParsedUrlQuery } from "querystring";
import { Book, Response } from "@/src/helpers/Interfaces";

const useGetBookInformation = (params: ParsedUrlQuery) => {
  const showToast = useShowToast();
  return useQuery<Book, Error,Book, (string | string[] | undefined)[]>({
    queryKey: ["book", params.bookId],
    queryFn: () =>
      axios
        .get<Response<Book[]>>(`http://Localhost:8000/api/books/${params.bookId}`)
        .then((res) => res.data.data[0])
        .catch((err) => {
          showToast(err.response.data.result.error_message);
        }),
    enabled: !!params.bookId,
  });
};

export default useGetBookInformation;
