import { Formik, Form } from "formik";
import * as Yup from "yup";

import CustomButton from "@/src/components/ui/login-submit/CustomButton";
import CustomInput from "@/src/components/ui/login-submit/CustomInput";
import CustomInputLabel from "@/src/components/ui/login-submit/CustomInputLabel";
import CustomPassInput from "@/src/components/ui/login-submit/CustomPassInput";
import validatePass from "@/src/helpers/validatePass";
import useSendResetPasswordInfo from "@/src/react-query/hooks/useSendResetPasswordInfo";

interface Props{
  email:string|null,
  verifyCode:string|undefined,
}

interface FormValues {
  password: string;
  passwordConf: string;
}

function ResetPasswordForm(props:Props) {
  const initialValues: FormValues = {
    password: "",
    passwordConf: "",
  };

  const { mutate} = useSendResetPasswordInfo();

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={Yup.object({
        password: Yup.string().required("وارد کردن رمز عبور اجباری است."),
        passwordConf: Yup.string()
          .required("وارد کردن تکرار رمز عبور اجباری است.")
          .oneOf(
            [Yup.ref("password")],
            "رمز عبور و تکرار آن یکسان نیستند."
          ),
      })}
      onSubmit={(values, { setSubmitting }) => {
        mutate({
          email: props.email,
          activation_code: props.verifyCode,
          password: values.password,
          password2: values.passwordConf,
        });
        setSubmitting(false);
      }}
    >
      {(formik) => (
        <Form className="flex flex-col gap-y-[10px]">
          <CustomInputLabel htmlFor="password">رمز عبور جدید</CustomInputLabel>
          <CustomPassInput
            value={formik.values.password}
            error={formik.errors.password}
            touched={formik.touched.password}
            name="password"
            type="password"
            validation={true}
          />
          <CustomInputLabel htmlFor="passwordConf">
            تکرار رمز عبور جدید
          </CustomInputLabel>
          <CustomInput
            name="passwordConf"
            type="password"
            validation={true}
            error={formik.errors.passwordConf}
            touched={formik.touched.passwordConf}
          />
          <CustomButton
            disabled={
              !validatePass(formik.values.password).every((el) => el.value)
            }
            type="submit"
          >
            ادامه
          </CustomButton>
        </Form>
      )}
    </Formik>
  );
}

export default ResetPasswordForm;
