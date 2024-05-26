import { Formik, Form } from "formik";
import * as Yup from "yup";
import CustomButton from "@/src/components/ui/login-submit/CustomButton";
import CustomInputLabel from "@/src/components/ui/login-submit/CustomInputLabel";
import useLogin from "@/src/react-query/hooks/useLogin";
import CustomInput from "@/src/components/ui/login-submit/CustomInput";

interface FormValues{
  emailOrUsername: string,
        password: string,
}

function LoginForm() {
  const initialValues:FormValues={
    emailOrUsername:'',
    password:''
  }
  const { mutate, error } = useLogin();
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={Yup.object({
        emailOrUsername: Yup.string().required("وارد کردن ایمیل اجباری است."),
        password: Yup.string().required("وارد کردن رمز عبور اجباری است."),
      })}
      onSubmit={(values, { setSubmitting }) => {
        mutate({
          email_or_username: values.emailOrUsername,
          password: values.password,
        }
        );
        setSubmitting(false);
      }}
    >
      {(formik) => (
        <Form className="flex flex-col gap-y-[16px]">
          <div className="flex flex-col gap-y-[8px]">
            <CustomInputLabel htmlFor="emailOrUsername">
              ایمیل یا نام کاربری
            </CustomInputLabel>
            <CustomInput name="emailOrUsername" type="text" validation={true} error={formik.errors.emailOrUsername} touched={formik.touched.emailOrUsername} />
            <CustomInputLabel htmlFor="password">رمز عبور</CustomInputLabel>
            <CustomInput name="password" type="password" validation={true} error={formik.errors.password} touched={formik.touched.password} />
          </div>
          <CustomButton type="submit" className="bg-primaryBlue">
            {/* {isLoading ? "Adding..." : "تایید"} */}
            تایید
          </CustomButton>
        </Form>
      )}
    </Formik>
  );
}

export default LoginForm;
