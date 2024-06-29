import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Response } from "@/src/helpers/Interfaces";
import { AxiosError } from "axios";

const useGetLanguage = () => {

	return useQuery<{id:number,name:string}[],AxiosError<Response<{id:number,name:string}[]>>>({
		queryKey: ["booklanguages"],
		queryFn: () =>
			axios
				.get<Response<{id:number,name:string}[]>>(`http://Localhost:8000/api/books/languages`)
				.then((res) => res.data.data)
	});
};

export default useGetLanguage;
