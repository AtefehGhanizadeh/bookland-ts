import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import axios from "axios";
import { Response } from "@/src/helpers/Interfaces";

interface Values {
    formData:FormData
}

var inhalfHours = new Date(new Date().getTime() + 30 * 60 * 1000);

function useSendPublisherSignupInfo() {
    let token=Cookies.get("token")
  const router = useRouter();

  return useMutation<string, Error, Values>({
    mutationFn: (values: Values) =>
      axios
        .put<Response<string>>("http://Localhost:8000/api/auth/publisher/signup-2", values, {
          headers: {
            Authorization: "Bearer " + token,
          },
        })
        .then((res) => res.data.data),
    onSuccess: (data) => {
      const token = data;
      Cookies.set("token", token, { expires: inhalfHours });
      router.push("/publisher");
    },
  });
}

export default useSendPublisherSignupInfo;
