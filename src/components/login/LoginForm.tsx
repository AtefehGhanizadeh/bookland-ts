import { Formik, Form } from "formik";
import * as Yup from "yup";
import CustomButton from "@/src/components/ui/login-submit/CustomButton";
import CustomInputLabel from "@/src/components/ui/login-submit/CustomInputLabel";
import useLogin from "@/src/react-query/hooks/useLogin";
import CustomInput from "@/src/components/ui/login-submit/CustomInput";

function LoginForm() {
  const { mutate, isLoading, error } = useLogin();
  return (
    <Formik
      initialValues={{
        emailOrUsername: "",
        password: "",
      }}
      validationSchema={Yup.object({
        emailOrUsername: Yup.string().required("وارد کردن ایمیل اجباری است."),
        password: Yup.string().required("وارد کردن رمز عبور اجباری است."),
      })}
      onSubmit={(values, { setSubmitting }) => {
        mutate({
          email_or_username: values.emailOrUsername,
          password: values.password,
        });
        setSubmitting(false);
      }}
    >
      {(formik) => (
        <Form className="flex flex-col gap-y-[16px]">
          <div className="flex flex-col gap-y-[8px]">
            <CustomInputLabel htmlFor="emailOrUsername">
              ایمیل یا نام کاربری
            </CustomInputLabel>
            <CustomInput name="emailOrUsername" type="text" />
            <CustomInputLabel htmlFor="password">رمز عبور</CustomInputLabel>
            <CustomInput name="password" type="password" />
          </div>
          <CustomButton type="submit" className="bg-primaryBlue">
            {isLoading ? "Adding..." : "تایید"}
          </CustomButton>
        </Form>
      )}
    </Formik>
  );
}

export default LoginForm;
