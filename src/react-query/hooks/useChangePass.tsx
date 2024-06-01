import { useMutation } from "@tanstack/react-query";

import useShowToast from "@/src/components/ui/useShowToast";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import axios from "axios";

interface Values {
  old_password: string;
  new_password: string;
}

const useChangePass = () => {
  const showToast = useShowToast();
  const token = Cookies.get("token");
  const { push } = useRouter();
  return useMutation({
    mutationFn: (values: Values) =>
      axios.post("http://Localhost:8000/api/user/change-password", values,{headers: { Authorization: "Bearer " + token }}).then(res=>res.data),
    onSuccess: () => {
      token ? Cookies.remove("token") : "";
      push("/login");
      showToast("کاربر عزیز لطفا دوباره وارد شوید.");
    },
  });
};

export default useChangePass;
