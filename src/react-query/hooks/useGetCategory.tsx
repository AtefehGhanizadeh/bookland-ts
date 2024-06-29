import { useQuery } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { Response } from "@/src/helpers/Interfaces";

const useGetCategory = () => {
	return useQuery<{id:number,name:string}[],AxiosError<Response<{id:number,name:string}[]>>>({
		queryKey: ["bookcategory"],
		queryFn: () =>
			axios
				.get<Response<{id:number,name:string}[]>>(`http://Localhost:8000/api/books/categories`)
				.then((res) => res.data.data)
	});
};

export default useGetCategory;
