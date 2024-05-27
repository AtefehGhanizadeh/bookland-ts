import { Response,Book } from "@/src/helpers/Interfaces";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useGetCategoryBooks = (category:string|undefined) => {
  return useQuery<Book[]>({
    queryKey: ["category-books",category],
    queryFn: () =>
      axios
        .get<Response<Book[]>>(`http://localhost:7000/api/search/books?category=${category}`)
        .then((res) => res.data.data),
        
    enabled:category?true:false
  });
};

export default useGetCategoryBooks;
