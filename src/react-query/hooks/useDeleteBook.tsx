import useShowToast from "@/src/components/ui/useShowToast";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

const useDelete = () => {
  const token = Cookies.get("token");
  const { reload } = useRouter();
  const showToast = useShowToast();
  return useMutation({
    mutationFn: (book_id: number) =>
      axios
        .delete(`http://Localhost:8000/api/publisher/books/${book_id}`, {
          headers: { Authorization: "Bearer " + token },
        })
        .then((res) => res.data),
    onSuccess: () => {
      showToast("ناشر گرامی کتاب  با موفقیت حذف گردید.", "success");
      reload();
    },
  });
};

export default useDelete;
