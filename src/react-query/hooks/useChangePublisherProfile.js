import { useMutation } from "@tanstack/react-query";
import APIClientToken from "../services/apiClient-token";
import { API_ENDPOINTS } from "@/utils/api/endpoints";
import useShowToast from "@/components/ui/useShowToast";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

const apiClient = new APIClientToken(API_ENDPOINTS.PUBLISHER_PROFILE);

const useChangePublisherProfile = () => {
	const showToast = useShowToast();
	const token = Cookies.get("token");
	const { push } = useRouter();
	return useMutation({
		mutationFn: apiClient.put,
		onSuccess: (data) => {
			window.location.reload();
		},
	});
};

export default useChangePublisherProfile;
