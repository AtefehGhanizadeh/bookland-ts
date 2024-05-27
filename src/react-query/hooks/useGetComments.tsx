import { Response,Comments } from "@/src/helpers/Interfaces";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useGetComments = (bookId: number, page: number) => {
  return useQuery<Comments>({
    queryKey: ["book-comments", page],
    queryFn: () =>
      axios
        .get<Response<Comments>>(`http://localhost:6002/api/book/comments/${bookId}?page=${page} `)
        .then((res) => {
          return res.data.data;
        }),
  });
};

export default useGetComments;
