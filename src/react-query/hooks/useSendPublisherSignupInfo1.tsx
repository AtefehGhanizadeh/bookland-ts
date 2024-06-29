import { useMutation } from "@tanstack/react-query";
import Cookies from "js-cookie";
import { Dispatch, SetStateAction } from "react";
import axios, { AxiosError } from "axios";
import { Response } from "@/src/helpers/Interfaces";


interface Values {
  publications_name: string;
  phone_number: string;
  card_number: string;
  address?: string;
}


function useSendPublisherSignupInfo1(
  setStepfunc: Dispatch<SetStateAction<number>>
) {
  const token: string | undefined = Cookies.get("token");

  return useMutation<Response<null>,AxiosError<Response<null>>,Values>({
    mutationFn: (values: Values) =>
      axios
        .put<Response<null>>(
          "http://Localhost:8000/api/auth/publisher/signup-1",
          values,
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        )
        .then((res) => res.data),
    onSuccess: () => {
      setStepfunc(3);
    },
  });
}

export default useSendPublisherSignupInfo1;
