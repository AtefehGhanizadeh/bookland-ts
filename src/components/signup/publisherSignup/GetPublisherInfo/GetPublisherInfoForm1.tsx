import { Formik, Form } from "formik";
import * as Yup from "yup";

import CustomButton from "@/src/components/ui/login-submit/CustomButton";
import CustomInput from "@/src/components/ui/login-submit/CustomInput";
import CustomInputLabel from "@/src/components/ui/login-submit/CustomInputLabel";
import CustomPassInput from "@/src/components/ui/login-submit/CustomPassInput";
import validatePass from "@/src/helpers/validatePass";
import useSendPublisherSignupInfo from "@/src/react-query/hooks/useSendPublisherSignupInfo";
import { Dispatch, SetStateAction } from "react";

interface FormValues {
  username: string;
  password: string;
  passwordConf: string;
}

function GetPublisherInfoForm1({
  email,
  setStep,
}: {
  email: string | null;
  setStep: Dispatch<SetStateAction<number>>;
}) {
  const initialValues: FormValues = {
    username: "",
    password: "",
    passwordConf: "",
  };
  const { mutate } = useSendPublisherSignupInfo(setStep);
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={Yup.object({
        username: Yup.string()
          .required("وارد کردن نام کاربری اجباری است.")
          .min(3, "نام کاربری باید حداقل 3 کاراکتر داشته باشد.")
          .matches(/^((?!@).)*$/, "نام کاربری نباید شامل @ باشد."),
        password: Yup.string().required(),
        passwordConf: Yup.string()
          .required()
          .oneOf([Yup.ref("password")], "رمز عبور و تکرار آن یکسان نیستند."),
      })}
      onSubmit={(values, { setSubmitting }) => {
        mutate({
          username: values.username,
          email,
          password: values.password,
          password2: values.passwordConf,
        });
        setSubmitting(false);
      }}
    >
      {(formik) => (
        <Form className="flex flex-col gap-y-[10px]">
          <CustomInputLabel htmlFor="username">نام کاربری</CustomInputLabel>
          <CustomInput
            name="username"
            type="text"
            placeholder="مثال:Sara"
            validation={true}
            error={formik.errors.username}
            touched={formik.touched.username}
          />
          <CustomInputLabel htmlFor="password">رمز عبور</CustomInputLabel>
          <CustomPassInput
            value={formik.values.password}
            error={formik.errors.password}
            touched={formik.touched.password}
            name="password"
            type="password"
            validation={true}
          />
          <CustomInputLabel htmlFor="passwordConf">
            تکرار رمز عبور
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

export default GetPublisherInfoForm1;
