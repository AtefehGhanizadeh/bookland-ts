import { useQuery } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { Response,Comments } from "@/src/helpers/Interfaces";

const useGetPublisherComments = (id:number) => {
	return useQuery<Comments,AxiosError<Response<Comments>>>({
		queryKey: ["bookComment"],
		queryFn: () =>
			axios
				.get<Response<Comments>>(`http://Localhost:6002/api/book/comments/publisher/${id}`)
				.then((res) => res.data.data)
	});
};

export default useGetPublisherComments;
