import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const useGetBookGroups = (key: string) => {
  return useQuery<Book[], Error>({
    queryKey: ["book-groups", key],
    queryFn: () =>
      axios
        .get<Response>(`http://localhost:7000/api/search/books/${key}`)
        .then((res) => res.data.data),
    enabled: key ? true : false,
  });
};

export default useGetBookGroups;
