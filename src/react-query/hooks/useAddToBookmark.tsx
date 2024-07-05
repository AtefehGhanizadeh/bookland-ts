import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import Cookies from "js-cookie";
import { Dispatch, SetStateAction } from "react";


function useAddToBookmark(book_id:number,setLike:Dispatch<SetStateAction<boolean|undefined>>) {
    const token=Cookies.get("token")
  return useMutation({
    mutationFn: ()=>axios.post(
      "http://Localhost:8000/api/user/bookmarks",{book_id},
      {
        headers: { Authorization: "Bearer " + token },
        
      }
    ),
    onSuccess: () => {
      setLike(true)
    },
  });
}

export default useAddToBookmark;
