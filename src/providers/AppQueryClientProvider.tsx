import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import useShowToast from "@/src/components/ui/useShowToast";
import { PropsWithChildren } from "react";
import { AxiosError } from "axios";


const AppQueryClientProvider = ({ children }:PropsWithChildren) => {
  
  const showToast=useShowToast();
  const { push } = useRouter();
  const token=Cookies.get("token")
  const queryClient = new QueryClient({
    defaultOptions: {

      mutations: {
        onError(err) {
          console.log(err)
          if(err instanceof AxiosError){
            showToast(err.response?.data.result.error_message)
            if (err.response?.status === 401 || err.response?.status === 403) {
              token ? Cookies.remove("token") : "";
              push("/login");
            }
          }
        },
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default AppQueryClientProvider;