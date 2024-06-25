import { useMutation } from "@tanstack/react-query";
import Cookies from "js-cookie";
import axios from "axios";

interface Values {
	old_password: string;
	new_password: string;
  }

const useChangePublisherPass = () => {
	const token = Cookies.get("token");
	return useMutation({
		mutationFn: (values: Values) =>
			axios
			  .post(
				`http://Localhost:8000/api/publisher/change-password`,
				values,
				{
				  headers: { Authorization: "Bearer " + token },
				}
			  )
			  .then((res) => res.data),
	});
};

export default useChangePublisherPass;
