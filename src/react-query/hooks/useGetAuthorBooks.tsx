import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Response,Book } from "@/src/helpers/Interfaces";

const useGetAuthorBooks = (authorName:string|undefined) => {
  return useQuery<Book[]>({
    queryKey: ["author-books"],
    queryFn: () =>
      axios
        .get<Response<Book[]>>(`http://localhost:7000/api/search/books?author=${authorName}`)
        .then((res) => res.data.data),

    enabled:authorName?true:false
  });
};

export default useGetAuthorBooks;
