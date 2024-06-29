import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import Cookies from "js-cookie";
import useGetComments from "@/src/react-query/hooks/useGetComments";
import useShowToast from "@/src/components/ui/useShowToast";
import { Response } from "@/src/helpers/Interfaces";

interface Values{
  id:number,
  value:string
}

function useSendComments(bookId:number,page:number) {
  const showToast=useShowToast()
    const token=Cookies.get("token")
    const{refetch}=useGetComments(bookId,page)
  return useMutation<Response<''>,AxiosError<Response<null>>,Values>({
    mutationFn:(obj:Values)=>axios.post<Response<''>>(`http://Localhost:6002/api/book/comments`,{bookId:obj.id,comment:obj.value},{headers: { Authorization: "Bearer " + token },}).then(res=>res.data),
      onSuccess:()=>{
        refetch()
      },
      onError:(err)=>{
        if(err.response?.data.result.error_message)
        showToast(err.response.data.result.error_message)
      }
    })
  }

export default useSendComments