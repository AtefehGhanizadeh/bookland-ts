import { PublisherBook, Response } from "@/src/helpers/Interfaces";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import Cookies from "js-cookie";




const useGetPublisherBooks = () => {
  const token = Cookies.get("token");
  return useQuery<PublisherBook[], AxiosError<Response<PublisherBook[]>>>({
    queryKey: ["publisherbooks"],
    queryFn: () =>
      axios
        .get<Response<PublisherBook[]>>("http://Localhost:8000/api/publisher/books", {
          headers: { Authorization: "Bearer " + token },
        })
        .then((res) => res.data.data),
  });
};

export default useGetPublisherBooks;
