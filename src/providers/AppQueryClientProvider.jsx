import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import Cookies from "js-cookie";
import { useRouter } from "next/router";
// import useShowToast from "@/components/ui/useShowToast";

const AppQueryClientProvider = ({ children }) => {
  
//   const showToast=useShowToast();
  const { push } = useRouter();
//   const token=Cookies.get("token")
  const queryClient = new QueryClient({
    defaultOptions: {
      queries:{
        retry:1,
        retryDelay:1000,
      },

      mutations: {
        onError(err) {
          console.log(err)
        //   showToast(err.response.data.result.error_message)
          if (err.response.status === 401 || err.response.status === 403) {
					//   token ? Cookies.remove("token") : "";
					  push("/login");
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