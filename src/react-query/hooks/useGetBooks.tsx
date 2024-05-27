import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Response,Book } from "@/src/helpers/Interfaces";

const useGetBooks = (bookName:string|null) => {
  return useQuery({
    queryKey: ["bookname"],
    queryFn: () =>
      axios
        .get<Response<Book[]>>(`http://localhost:7000/api/search/books?bookName=${bookName}`)
        .then((res) => res.data.data)
        // .catch((err) => {
          
        // }),
  });
};

export default useGetBooks;