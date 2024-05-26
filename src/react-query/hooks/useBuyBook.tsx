import useShowToast from "@/src/components/ui/useShowToast";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

function useBuyBook(onClose:()=>void) {
  const token = Cookies.get("token");
  const showToast = useShowToast();
  const router=useRouter()
  return useMutation({
    mutationFn: (obj:{book_Id:number,discount_Id:number}) => {
      axios
        .post(
          `http://Localhost:5001/api/user/purchase-book`,
          { book_Id: obj.book_Id, discount_Id: obj.discount_Id },
          {
            headers: { Authorization: "Bearer " + token },
          }
        )
        .then((res) => {
          if (res.data.result.http_status_code === 400) {
            showToast(res.data.result.error_message);
          }
          if (res.data.result.http_status_code === 200) {
            onClose()
            showToast("خرید شما با موفقیت انجام شد.", "success");
            router.reload()
          }
          return res.data;
        });
    },
  });
}

export default useBuyBook;
