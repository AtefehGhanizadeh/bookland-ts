// import CustomCardContainer from "@/components/ui/login-submit/CustomCard/CustomCardContainer";
// import CustomCardHeader from "@/components/ui/login-submit/CustomCard/CustomCardHeader";
// import CustomCardLink from "@/components/ui/login-submit/CustomCard/CustomCardLink";
import LoginForm from "@/src/components/login/LoginForm";

function Login() {
  return (
    <main className={`flex min-h-screen flex-col items-center justify-center`}>
      {/* <CustomCardContainer roundedTop="20px">
        <CustomCardHeader>
          <p> بوکلندی عزیز خوش اومدی :)</p>
        </CustomCardHeader> */}
        <LoginForm />
        {/* <CustomCardLink href={"/forgetPassword"}> */}
          {/* فراموشی رمز عبور
        </CustomCardLink>
        <CustomCardLink href={"/signup"}>
          حساب کاربری ندارم
        </CustomCardLink>
      </CustomCardContainer> */}
    </main>
  );
}

export default Login;
