import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import Cookies from "js-cookie";


function useRemoveBookmark(book_id:number) {
    const token=Cookies.get("token")
  return useMutation({
    mutationFn: ()=>axios.delete(
      `http://Localhost:8000/api/user/bookmarks/${book_id}`,
      {
        headers: { Authorization: "Bearer " + token },
        
      }
    ),
    onSuccess: (data) => {
      console.log(data);
    },
  });
}

export default useRemoveBookmark;
