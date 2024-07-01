import { useQuery } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import Cookies from "js-cookie";
import {Publisher, Response} from '@/src/helpers/Interfaces'

const usePublisherProfile = () => {
	const token = Cookies.get("token");
	return useQuery<Publisher,AxiosError<Response<Publisher>>>({
		queryKey: ["publisherinfo"],
		queryFn: () =>
			axios
				.get<Response<Publisher>>(
					"http://Localhost:8000/api/publisher/profile",
					{
						headers: { Authorization: "Bearer " + token },
					}
				)
				.then((res) => res.data.data)
	});
};

export default usePublisherProfile;
