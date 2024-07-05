import { useMutation } from "@tanstack/react-query";
import Cookies from "js-cookie";
import axios from "axios";
import useShowToast from "@/src/components/ui/useShowToast";

interface Values {
	old_password: string;
	new_password: string;
  }

const useChangePublisherPass = () => {
	const showToast=useShowToast()
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
		onSuccess:()=>{
			showToast("رمز عبور با موفقیت تفییر کرد.","success")
		}
	});
};

export default useChangePublisherPass;
