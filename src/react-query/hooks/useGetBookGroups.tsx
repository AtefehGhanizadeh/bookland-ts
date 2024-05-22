import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Book } from "@/src/helpers/Interfaces";
export interface Response {
  data: Book[];
  result: {
    error_code: string;
    error_message: string;
    errors: string;
  };
}
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
