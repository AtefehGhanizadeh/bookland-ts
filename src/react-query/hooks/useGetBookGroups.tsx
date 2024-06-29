import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Book,Response } from "@/src/helpers/Interfaces";


const useGetBookGroups = (key: string|undefined) => {
  return useQuery<Book[], Error>({
    queryKey: ["book-groups", key],
    queryFn: () =>
      axios
        .get<Response<Book[]>>(`http://localhost:7000/api/search/books/${key}`)
        .then((res) => res.data.data),
    enabled: key ? true : false,
  });
};

export default useGetBookGroups;
