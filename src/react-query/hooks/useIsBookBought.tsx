import { useQuery } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import Cookies from "js-cookie";
import { Response } from "@/src/helpers/Interfaces";

const useIsBookBought = (bookId: number) => {
  const token = Cookies.get("token");
  return useQuery<boolean,AxiosError<Response<boolean>>>({
    queryKey: ["book-is-bought"],
    queryFn: () =>
      axios
        .get<Response<boolean>>(`http://Localhost:5001/api/user/check-book/${bookId}`, {
          headers: { Authorization: "Bearer " + token },
        })
        .then((res) => res.data.data),
    enabled: token ? true : false,
  });
};

export default useIsBookBought;
