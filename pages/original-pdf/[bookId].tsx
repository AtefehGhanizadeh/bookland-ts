import PDFViewer from "@/src/components/bookdetail/PDFViewer";
import { useParams } from "next/navigation";
import useGetBookOriginalFile from "@/src/react-query/hooks/useGetBookOriginalFile";
import useShowToast from "@/src/components/ui/useShowToast";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { Center, Spinner } from "@chakra-ui/react";

function OriginalPDf() {
  const params = useParams();
  const showToast = useShowToast();
  const token = Cookies.get("token");
  const router = useRouter();
  const { data, isSuccess, isError, isLoading, error } =
    useGetBookOriginalFile(params);
  if (isError) {
    if (error.response?.data.result?.error_message) {
      showToast(error.response!.data.result?.error_message);
      router.back();
      if (error.response?.status === 401 || error.response?.status === 403) {
        token ? Cookies.remove("token") : "";
        router.push("/login");
      }
    } else {
      showToast("مشکلی رخ داده است.");
      router.push(`/books/${params.bookId}`);
    }
  }
  if (isLoading) {
    showToast("در حال جستجوی فایل ...","loading");
  }

  return <>{isSuccess && <PDFViewer url={data} />}</>;
}

export default OriginalPDf;
