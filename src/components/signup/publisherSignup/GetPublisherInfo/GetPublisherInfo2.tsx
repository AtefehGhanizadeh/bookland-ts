import CustomCardContainer from "@/src/components/ui/login-submit/CustomCard/CustomCardContainer";
import CustomCardHeader from "@/src/components/ui/login-submit/CustomCard/CustomCardHeader";
import CustomCardParagraph from "@/src/components/ui/login-submit/CustomCard/CustomCardParagraph";
import GetPublisherInfoForm2 from "@/src/components/signup/publisherSignup/GetPublisherInfo/GetPublisherInfoForm2";
import { Dispatch, SetStateAction } from "react";


function GetPublisherInfo2({setStep}:{setStep:Dispatch<SetStateAction<number>>}) {

  return (

        <CustomCardContainer roundedTop="20px" marginTop="50px" marginBottom="50px">
          <CustomCardHeader>
            <p>مشخصات انتشارات</p>
          </CustomCardHeader>
          <CustomCardParagraph>
            اطلاعات زیر را می‌توانید پس از ساخت حساب، در پنل کاربری{" "}
            <span className="text-primaryBlue">ویرایش</span> کنید.
          </CustomCardParagraph>
          <GetPublisherInfoForm2
            setStep={setStep}
          />
        </CustomCardContainer>
  );
}

export default GetPublisherInfo2