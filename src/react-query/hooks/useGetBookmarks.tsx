import { useQuery } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import Cookies from "js-cookie";
import { Book, Response } from "@/src/helpers/Interfaces";
const useGetFavoriteBooks = () => {

  const token = Cookies.get("token");

  return useQuery<Book[],AxiosError<Response<Book[]>>>({
    queryKey: ["bookmarks"],
    queryFn: () =>
      axios
        .get<Response<Book[]>>("http://Localhost:8000/api/user/bookmarks", {
          headers: { Authorization: "Bearer " + token },
        })
        .then((res) => res.data.data)

  });
};

export default useGetFavoriteBooks;
