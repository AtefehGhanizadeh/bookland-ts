import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import CustomButton from "@/src/components/ui/login-submit/CustomButton";
import CustomInputLabel from "@/src/components/ui/login-submit/CustomInputLabel";
import useSendEmail from "@/src/react-query/hooks/useSendEmail";
import { Dispatch, SetStateAction,ChangeEvent } from "react";

interface Props{
  endpoint:string,
  setStep:Dispatch<SetStateAction<number>>,
  emailValue:string|null,
  setEmailValue:Dispatch<SetStateAction<string|null>>

}

interface FormValues{
  email:string|null
}

function GetEmailForm(props:Props) {
  const initialValues:FormValues={
    email: props.emailValue,
  }
  const{mutate}=useSendEmail(props.endpoint,props.setStep)

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={Yup.object({
        email: Yup.string()
          .email("لطفا آدرس ایمیل معتبر وارد کنید.")
          .matches(
            /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
            "لطفا آدرس ایمیل معتبر وارد کنید. "
          )
          .required("وارد کردن ایمیل اجباری است."),
      })}
      onSubmit={(values, { setSubmitting }) => {
          mutate({
            email:values.email 
          })
          setSubmitting(false);
      }}
    >
      {(formik) => (
        <Form className="flex flex-col gap-y-[16px]">
          <div className="flex flex-col gap-y-[8px]">
            <CustomInputLabel htmlFor="email">ایمیل</CustomInputLabel>
            <Field
              onChange={(e:ChangeEvent<HTMLInputElement>) => {
                props.setEmailValue(e.target.value);
                formik.handleChange(e);
              }}
              name="email"
              type="email"
              placeholder="مثال: abc@example.com"
              className={`h-[51px] border-[2px] border-primaryBlue rounded-2xl px-[20px] py-[16px] focus:outline-none ${
                formik.errors.email && formik.touched.email
                  ? "border-red-500"
                  : ""
              }`}
            />
            <p
              className={`text-[12px] font-light ${
                formik.errors.email && formik.touched.email ? "text-error" : ""
              }`}
            >
              <ErrorMessage name="email" />
            </p>
          </div>
          <CustomButton type="submit">
            {/* {isLoading?"Adding...":"ادامه"} */}
              ادامه
            </CustomButton>
        </Form>
      )}
    </Formik>
  );
}

export default GetEmailForm;
