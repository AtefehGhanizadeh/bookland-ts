import { Book, Response } from "@/src/helpers/Interfaces";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import useShowToast from "@/src/components/ui/useShowToast";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

const useGetPublisherBooks = () => {
  const token = Cookies.get("token");
  return useQuery<Book[], AxiosError<Response<Book[]>>>({
    queryKey: ["publisherbooks"],
    queryFn: () =>
      axios
        .get<Response<Book[]>>("http://Localhost:8000/api/publisher/books", {
          headers: { Authorization: "Bearer " + token },
        })
        .then((res) => res.data.data),
  });
};

export default useGetPublisherBooks;
