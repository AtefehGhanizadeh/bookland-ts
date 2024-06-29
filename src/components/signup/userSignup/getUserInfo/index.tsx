import CustomCardContainer from "@/src/components/ui/login-submit/CustomCard/CustomCardContainer";
import CustomCardHeader from "@/src/components/ui/login-submit/CustomCard/CustomCardHeader";
import CustomCardParagraph from "@/src/components/ui/login-submit/CustomCard/CustomCardParagraph";
import GetUserInfoForm from "./GetUserInForm";

function GetUserInfo({email}:{email:string|null}){
    return (
        <CustomCardContainer roundedTop="20px">
          <CustomCardHeader>
            <p>اطلاعات کاربر</p>
          </CustomCardHeader>
          <CustomCardParagraph>
            اطلاعات زیر را می‌توانید پس از ساخت حساب، در پنل کاربری{" "}
            <span className="text-primaryBlue">ویرایش</span> کنید.
          </CustomCardParagraph>
          <GetUserInfoForm email={email}/>
        </CustomCardContainer>
      );
}

export default GetUserInfo