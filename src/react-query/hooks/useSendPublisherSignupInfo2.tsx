import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import axios from "axios";
import { Response } from "@/src/helpers/Interfaces";


function useSendPublisherSignupInfo() {
    let token=Cookies.get("token")
  const router = useRouter();

  return useMutation<string, Error, FormData>({
    mutationFn: (values: FormData) =>
      axios
        .put<Response<string>>("http://Localhost:8000/api/auth/publisher/signup-2", values, {
          headers: {
            Authorization: "Bearer " + token,
          },
        })
        .then((res) => res.data.data),
    onSuccess: () => {
      router.push("/Publisher");
    },
  });
}

export default useSendPublisherSignupInfo;
