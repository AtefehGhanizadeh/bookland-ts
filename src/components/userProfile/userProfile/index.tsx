import Layout from "@/src/components/userProfile/Layout";
import useGetUserInfo from "@/src/react-query/hooks/useGetUserInfo";
import {
  Box,
  Button,
  CardBody,
  Divider,
  Icon,
  Input,
  Text,
} from "@chakra-ui/react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useRouter } from "next/router";
import * as Yup from "yup";
import validatePass from "@/src/helpers/validatePass";
import useChangePass from "@/src/react-query/hooks/useChangePass";
import Navbar from "@/src/components/navbar/Navbar";
import useShowToast from "@/src/components/ui/useShowToast";
import Cookies from "js-cookie";

const headerStyle = {
  fontSize: "20px",
  fontStyle: "normal",
  fontWeight: "600",
};

const labelStyle = {
  collor: "#515457",
  fontSize: "16px",
  fontStyle: "normal",
  fontWeight: "500",
  lineHeight: "24px",
  letterSpacing: "-0.176px",
  marginBottom: "8px",
};

const inputStyle = {
  display: "flex",
  width: "100%",
  padding: "10px 20px",
  justifyContent: "flex-start",
  alignItems: "center",
  gap: "8px",
  border: "1px solid #C8C8C8",
  borderRadius: "16px",
  marginBottom: "16px",
  fontSize: "16px",
};

const ruleTitleStyle = {
  color: "#575DFB",
  fontSize: "20px",
  fontWeight: "500",
  lineHeight: "16px",
  marginBottom: "16px",
};

const buttonStyle = {
  width: "100%",
  marginTop: "24px",
  padding: "8px",
  borderRadius: "16px",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#575DFB",
  fontWeight: "400",
};

const liValid = "#575DFB";
const liInvalid = "gray";

interface FormValues {
  oldpass: string;
  newpassword: string;
  passwordConf: string;
}

const UserProfile = () => {
  const { data,error:userInfoError,isLoading, isSuccess,isError } = useGetUserInfo();
  const { mutate, error } = useChangePass();
  const showToast = useShowToast();
	const { push } = useRouter();
	const token = Cookies.get("token");
  
	if (isError) {
	  if (userInfoError.response?.data.result?.error_message) {
		showToast(userInfoError.response!.data.result?.error_message);
		if (userInfoError.response?.status === 401 || userInfoError.response?.status === 403) {
		  token ? Cookies.remove("token") : "";
		  push("/login");
		}
	  } else {
		showToast("مشکلی رخ داده است.");
	  }
	}
  const initialValues: FormValues = {
    oldpass: "",
    newpassword: "",
    passwordConf: "",
  };

  return (
    <div>
      <Navbar />
      <Layout>
        <CardBody>
          <Box
            display="flex"
            justifyContent="space-between"
            className="flex-col lg:flex-row gap-[40px]"
          >
            <div className="flex-1">
              <h2 style={labelStyle}>نام کاربری</h2>
              <Input
                height="45.6px"
                fontSize="16px"
                marginTop="8px"
                display="flex"
                padding="10px 20px"
                justifyContent="flex-start"
                alignItems="center"
                borderRadius="16px"
                placeholder={isLoading ? "در حال جستجو":isError?"یافت نشد" : isSuccess ? data.username : ""}
                disabled
                _disabled={{
                  border: "1px solid #C8C8C8",
                }}
              />
            </div>
            <div className="flex-1">
              <h2 style={labelStyle}>ایمیل</h2>
              <Input
                height="45.6px"
                fontSize="16px"
                marginTop="8px"
                display="flex"
                padding="10px 20px"
                justifyContent="flex-start"
                alignItems="center"
                borderRadius="16px"
                placeholder={isLoading ? "در حال جستجو":isError?"یافت نشد" : isSuccess ? data.email : ""}
                disabled
                _disabled={{
                  border: "1px solid #C8C8C8",
                }}
              />
            </div>
          </Box>
          <Divider margin="32px auto" />
          <Box display="flex" className="flex-col lg:flex-row">
            <Icon></Icon>&nbsp;&nbsp;
            <Text style={headerStyle}>تغییر رمز عبور</Text>
          </Box>

          <Box
            marginTop="24px"
            display="flex"
            className="flex-col lg:flex-row gap-[40px]"
            justifyContent="space-between"
          >
            <Formik
              initialValues={initialValues}
              validationSchema={Yup.object({
                oldpass: Yup.string().required(
                  "وارد کردن رمز عبور قبلی اجباری است."
                ),
                newpassword: Yup.string().required(
                  "وارد کردن رمز عبور جدید اجباری است."
                ),
                passwordConf: Yup.string()
                  .required("وارد کردن تکرار رمز عبور اجباری است.")
                  .oneOf(
                    [Yup.ref("newpassword")],
                    "رمز عبور و تکرار آن یکسان نیستند."
                  ),
              })}
              onSubmit={(values, { setSubmitting }) => {
                mutate({
                  old_password: values.oldpass,
                  new_password: values.newpassword,
                });
                setSubmitting(false);
              }}
            >
              {(formik) => (
                <>
                  <Form className="flex-1">
                    <h2 style={labelStyle}>رمز عبور فعلی</h2>
                    <Field
                      type="password"
                      name="oldpass"
                      style={{
                        ...inputStyle,
                        outline: `${
                          formik.errors.oldpass && formik.touched.oldpass
                            ? "none"
                            : ""
                        }`,
                        border: `1px solid ${
                          formik.errors.oldpass && formik.touched.oldpass
                            ? "red"
                            : "#C8C8C8"
                        }`,
                      }}
                      defaultValue={formik.values.oldpass}
                      isInvalid={
                        formik.errors.oldpass && formik.touched.oldpass
                      }
                      onChange={formik.handleChange}
                    />
                    <p
                      className={`text-[12px] mb-[10px] font-light ${
                        formik.errors.oldpass && formik.touched.oldpass
                          ? "text-error"
                          : ""
                      }`}
                    >
                      <ErrorMessage name="oldpass" />
                    </p>
                    <h2 style={labelStyle}>رمز عبور جدید</h2>
                    <Field
                      type="password"
                      name="newpassword"
                      style={{
                        ...inputStyle,
                        outline: `${
                          formik.errors.newpassword &&
                          formik.touched.newpassword
                            ? "none"
                            : ""
                        }`,
                        border: `1px solid ${
                          formik.errors.newpassword &&
                          formik.touched.newpassword
                            ? "red"
                            : "#C8C8C8"
                        }`,
                      }}
                      defaultValue={formik.values.newpassword}
                      isInvalid={
                        formik.errors.newpassword && formik.touched.newpassword
                      }
                      onChange={formik.handleChange}
                    />
                    <p
                      className={`text-[12px] mb-[10px] font-light ${
                        formik.errors.newpassword && formik.touched.newpassword
                          ? "text-error"
                          : ""
                      }`}
                    >
                      <ErrorMessage name="newpassword" />
                    </p>
                    <h2 style={labelStyle}>تکرار رمز عبور جدید</h2>
                    <Field
                      type="password"
                      name="passwordConf"
                      style={{
                        ...inputStyle,
                        outline: `${
                          formik.errors.passwordConf &&
                          formik.touched.passwordConf
                            ? "none"
                            : ""
                        }`,
                        border: `1px solid ${
                          formik.errors.passwordConf &&
                          formik.touched.passwordConf
                            ? "red"
                            : "#C8C8C8"
                        }`,
                      }}
                      defaultValue={formik.values.passwordConf}
                      isInvalid={
                        formik.errors.passwordConf &&
                        formik.touched.passwordConf
                      }
                      onChange={formik.handleChange}
                    />
                    <p
                      className={`text-[12px] mb-[10px] font-light ${
                        formik.errors.passwordConf &&
                        formik.touched.passwordConf
                          ? "text-error"
                          : ""
                      }`}
                    >
                      <ErrorMessage name="passwordConf" />
                    </p>
                    <Button
                      display="block"
                      type="submit"
                      color="white"
                      style={buttonStyle}
                      isDisabled={
                        (!validatePass(formik.values.newpassword).every(
                          (el) => el.value
                        ))||(formik.errors.passwordConf?.length!>0)
                      }
                    >
                       تغییر رمز 
                    </Button>
                  </Form>
                  <Box
                    display="flex"
                    className="flex-1"
                    padding="24px 10px"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="flex-start"
                    gap="16px"
                    borderRadius="16px"
                    backgroundColor="#575DFB1A"
                    height="248px"
                  >
                    <ul className="mr-[20px] whitespace-pre text-[10px] md:text-[16px] font-medium leading-[32px]">
                      <li style={ruleTitleStyle}>رمز عبور باید:</li>

                      <li
                        style={{
                          color: validatePass(formik.values.newpassword)[0]
                            .value
                            ? liValid
                            : liInvalid,
                        }}
                        className="list-disc"
                      >
                        حداقل 8 کاراکتر داشته باشد.
                      </li>

                      <li
                        style={{
                          color: validatePass(formik.values.newpassword)[3]
                            .value
                            ? liValid
                            : liInvalid,
                        }}
                        className="list-disc"
                      >
                        شامل حروف انگلیسی بزرگ و کوچک باشد.
                      </li>
                      <li
                        style={{
                          color: validatePass(formik.values.newpassword)[1]
                            .value
                            ? liValid
                            : liInvalid,
                        }}
                        className="list-disc"
                      >
                        حداقل شامل یک عدد باشد.
                      </li>
                      <li
                        style={{
                          color: validatePass(formik.values.newpassword)[2]
                            .value
                            ? liValid
                            : liInvalid,
                        }}
                        className="list-disc"
                      >
                        حداقل شامل یک کاراکتر باشد.
                      </li>
                      {!formik.errors.passwordConf &&
                      formik.values.newpassword &&
                      formik.values.passwordConf ? (
                        <li
                          style={{
                            color: liValid,
                          }}
                          className="list-disc"
                        >
                          با تکرار آن یکسان باشد.
                        </li>
                      ) : (
                        <li
                          style={{
                            color: liInvalid,
                          }}
                          className="list-disc"
                        >
                          با تکرار آن یکسان باشد.
                        </li>
                      )}
                    </ul>
                  </Box>
                </>
              )}
            </Formik>
          </Box>
        </CardBody>
      </Layout>
    </div>
  );
};

export default UserProfile;
