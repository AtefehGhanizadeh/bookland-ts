import { Response } from "@/src/helpers/Interfaces";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import Cookies from "js-cookie";
import { Dispatch, SetStateAction } from "react";
const useGetIsBookmark = (
  bookId: number,
  setLike: Dispatch<SetStateAction<boolean|undefined>>
) => {
  const token = Cookies.get("token");

  return useQuery<boolean,AxiosError<Response<boolean>>>({
    queryKey: ["is-bookmark", bookId],
    queryFn: () =>
      axios
        .get<Response<boolean>>(`http://Localhost:5001/api/user/check-bookmark/${bookId}`, {
          headers: { Authorization: "Bearer " + token },
        })
        .then((res) => {
          setLike(res.data.data);
          return res.data.data;
        })
  });
};

export default useGetIsBookmark;
