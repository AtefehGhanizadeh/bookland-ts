import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import useShowToast from "@/src/components/ui/useShowToast";
import Cookies from "js-cookie";
import { Dispatch, SetStateAction } from "react";
const useGetDiscount = (setNewPrice:Dispatch<SetStateAction<number>>,setDiscountId,setDisountPercent:Dispatch<SetStateAction<number>>) => {
const showToast = useShowToast();
  const token = Cookies.get("token");
  return useMutation({
    mutationFn: (obj) =>
      axios
        .get(`http://localhost:5001/api/user/adjust-discount?code=${obj.code}&amount=${obj.amount}`,{headers: { Authorization: "Bearer " + token },}),

    onSuccess:(data)=>{
        if(data.data.result.http_status_code===400){
            showToast(data.data.result.error_message);
        }else{
            setNewPrice(data.data.data.new_price)
            setDisountPercent(data.data.data.percent)
            setDiscountId(data.data.data.discount_id)
        }
    },
  });
};

export default useGetDiscount;