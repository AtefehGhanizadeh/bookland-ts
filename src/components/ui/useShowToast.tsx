import { useToast } from "@chakra-ui/react";


function useShowToast() {
    const toast = useToast({
        isClosable: true,
          position: 'top-right',
          duration:5000,

      });
      const toastId = "toast-id";
      const showToast=(text:string,status:"error" | "info" | "warning" | "success" | "loading"="error")=>{
        if (!toast.isActive(toastId)) {
          toast({description: text,id:toastId,status})
          
        }
      }
      
  return showToast
}

export default useShowToast
