import { useQuery } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
// import useShowToast from "@/components/ui/useShowToast";
import Cookies from "js-cookie";
import { ParsedUrlQuery } from "querystring";
import { Response } from "@/src/helpers/Interfaces";
const useGetBookOriginalFile = (params: ParsedUrlQuery) => {
  // const showToast = useShowToast();
  const token = Cookies.get("token");
  return useQuery<string, AxiosError<Response<string>>>({
    queryKey: ["book-original-file"],
    queryFn: () =>
      axios
        .get<Response<string>>(
          `http://Localhost:8000/api/books/originalfilepath/${params.bookId}`,
          {
            headers: { Authorization: "Bearer " + token },
          }
        )
        .then((res) => res.data.data),
    // .catch((err) => {
    //   showToast(err.response.data.result.error_message);
    // }),
    enabled: !!params,
  });
};

export default useGetBookOriginalFile;
