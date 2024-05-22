import CustomCardContainer from "@/src/components/ui/login-submit/CustomCard/CustomCardContainer";
import CustomCardHeader from "@/src/components/ui/login-submit/CustomCard/CustomCardHeader";
import ResetPasswordForm from '@/src/components/login/forgetPassword/ResetPasswordForm'

function ResetPassword({email,verifyCode}:{email:string|null,verifyCode:string|undefined}){
    return (
        <CustomCardContainer roundedTop="20px">
          <CustomCardHeader>
            <p>تغییر رمز عبور</p>
          </CustomCardHeader>
          <ResetPasswordForm email={email} verifyCode={verifyCode}/>
        </CustomCardContainer>
      );
}

export default ResetPassword