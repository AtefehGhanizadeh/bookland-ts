import { useQuery } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import Cookies from "js-cookie";
import { Book,Response } from "@/src/helpers/Interfaces";

const useGetMyBooks = () => {

  const token = Cookies.get("token");
  return useQuery<Book[],AxiosError<Response<Book[]>>>({
    queryKey: ["userbooks"],
    queryFn: () =>
      axios
        .get("http://Localhost:8000/api/user/books", {
          headers: { Authorization: "Bearer " + token },
        })
        .then((res) => res.data.data)
  });
};

export default useGetMyBooks;
