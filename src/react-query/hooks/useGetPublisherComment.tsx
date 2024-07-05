import { useQuery } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { Response,Comments, CommentItem } from "@/src/helpers/Interfaces";

const useGetPublisherComments = (id:number) => {
	return useQuery<CommentItem[],AxiosError<Response<CommentItem[]>>>({
		queryKey: ["bookComment"],
		queryFn: () =>
			axios
				.get<Response<CommentItem[]>>(`http://Localhost:6002/api/book/comments/publisher/${id}`)
				.then((res) => res.data.data)
	});
};

export default useGetPublisherComments;
