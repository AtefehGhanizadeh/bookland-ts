import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Cookies from "js-cookie";
const useIsBookBought = (bookId:number) => {
  const token = Cookies.get("token");
  return useQuery({
    queryKey: ["book-is-bought"],
    queryFn: () =>
      axios
        .get(`http://Localhost:5001/api/user/check-book/${bookId}`,{
            headers: { Authorization: "Bearer " + token },
          })
        .then((res) => {
          console.log(res.data)
          return res.data
        }
        )
        .catch((err) => {
        }),
    enabled:token?true:false
  });
};

export default useIsBookBought;
