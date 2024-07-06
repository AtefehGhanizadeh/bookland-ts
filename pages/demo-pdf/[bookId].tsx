import PDFViewer from "@/src/components/bookdetail/PDFViewer"
import useGetBookInformation from "@/src/react-query/hooks/useGetBookInformation"
import { useParams } from "next/navigation"
import { useRouter } from "next/router"

function DemoPDf() {
    const params=useParams()
    const router=useRouter()
    console.log(router.query.book_id)
    const{data,isSuccess}=useGetBookInformation(params)
  return (
    <>
    {isSuccess&&<PDFViewer url={data.demo_file}/>}
    </>
  )
}

export default DemoPDf