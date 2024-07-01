import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

const useDelete = () => {
  const token = Cookies.get("token");
  const { reload } = useRouter();
  return useMutation({
    mutationFn: (book_id: number) =>
      axios
        .delete(`http://Localhost:8000/api/publisher/books/${book_id}`, {
          headers: { Authorization: "Bearer " + token },
        })
        .then((res) => res.data),
    onSuccess: () => {
      reload();
    },
  });
};

export default useDelete;
