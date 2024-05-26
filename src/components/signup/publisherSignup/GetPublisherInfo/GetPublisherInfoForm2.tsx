import { Formik, Form } from "formik";
import * as Yup from "yup";

import CustomButton from "@/src/components/ui/login-submit/CustomButton";
import CustomInput from "@/src/components/ui/login-submit/CustomInput";
import CustomCardHeader from "@/src/components/ui/login-submit/CustomCard/CustomCardHeader";
import CustomInputLabel from "@/src/components/ui/login-submit/CustomInputLabel";
import useSendPublisherSignupInfo1 from "@/src/react-query/hooks/useSendPublisherSignupInfo1";
import { Dispatch, SetStateAction } from "react";

interface FormValues {
  commericalName: string;
  phoneNumber: string;
  cardNumber: string;
  city: string;
  street: string;
  moreAddressInfo: string;
}

function GetPublisherInfoForm2({
  setStep,
}: {
  setStep: Dispatch<SetStateAction<number>>;
}) {
  const initialValues: FormValues = {
    commericalName: "",
    phoneNumber: "",
    cardNumber: "",
    city: "",
    street: "",
    moreAddressInfo: "",
  };
  const { mutate } = useSendPublisherSignupInfo1(setStep);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={Yup.object({
        commericalName: Yup.string()
          .required("وارد کردن نام تجاری اجباری است.")
          .min(3, "نام تجاری باید حداقل 3 کاراکتر داشته باشد."),
        phoneNumber: Yup.string()
          .required("وارد کردن شماره تلفن اجباری است.")
          .matches(
            /^09\d{9}$/,
            "شماره تلفن باید با 09 شروع شده و دارای 11 رقم باشد."
          ),
        cardNumber: Yup.string()
          .required("وارد کردن شماره کارت اجباری است.")
          .min(16, "شماره کارت 16 رقمی است."),
      })}
      onSubmit={(values, { setSubmitting }) => {
        mutate({
          publications_name: values.commericalName,
          phone_number: values.phoneNumber,
          card_number: values.cardNumber,
          address:values.city+values.street+values.moreAddressInfo
        });
        setSubmitting(false);
      }}
    >
      {(formik) => (
        <Form className="flex flex-col gap-y-[10px]">
          <CustomInputLabel htmlFor="commericalName">
            نام تجاری
          </CustomInputLabel>
          <CustomInput
            name="commericalName"
            type="text"
            validation={true}
            error={formik.errors.commericalName}
            touched={formik.touched.commericalName}
          />

          <CustomInputLabel htmlFor="phoneNumber">شماره تلفن</CustomInputLabel>
          <CustomInput
            name="phoneNumber"
            type="tel"
            validation={true}
            error={formik.errors.phoneNumber}
            touched={formik.touched.phoneNumber}
          />
          <CustomInputLabel htmlFor="cardNumber">شماره حساب</CustomInputLabel>
          <CustomInput
            name="cardNumber"
            type="string"
            validation={true}
            error={formik.errors.cardNumber}
            touched={formik.touched.cardNumber}
            propClassName="ltr"
          />
          <CustomCardHeader>آدرس</CustomCardHeader>

          <CustomInputLabel htmlFor="city">
            شهر <span className="text-gray-400"> (اختیاری)</span>
          </CustomInputLabel>
          <CustomInput name="city" type="text" />
          <CustomInputLabel htmlFor="street">
            خیابان<span className="text-gray-400"> (اختیاری)</span>
          </CustomInputLabel>
          <CustomInput name="street" type="text" />
          <CustomInputLabel htmlFor=" moreAddressInfo">
            کوچه/ساختمان/پلاک<span className="text-gray-400"> (اختیاری)</span>
          </CustomInputLabel>
          <CustomInput name="moreAddressInfo" type="text" />
          <CustomButton type="submit">ادامه</CustomButton>
        </Form>
      )}
    </Formik>
  );
}

export default GetPublisherInfoForm2;
