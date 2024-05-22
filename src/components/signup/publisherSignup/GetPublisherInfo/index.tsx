import CustomCardContainer from "@/src/components/ui/login-submit/CustomCard/CustomCardContainer";
import CustomCardHeader from "@/src/components/ui/login-submit/CustomCard/CustomCardHeader";
import CustomCardParagraph from "@/src/components/ui/login-submit/CustomCard/CustomCardParagraph";
import GetPublisherInfoForm1 from "@/src/components/signup/publisherSignup/GetPublisherInfo/GetPublisherInfoForm1";
import GetPublisherInfo2 from "@/src/components/signup/publisherSignup/GetPublisherInfo/GetPublisherInfo2";
// import PublisherDocuments from "@/src/components/signup/publisherSignup/GetPublisherInfo/PublisherDocuments";
import { useState } from "react";

function GetPublisherInfo({email}:{email:string|null}) {
  const [step, setStep] = useState(1);
  return (
    <>
      {step === 1 && (
        <CustomCardContainer roundedTop="20px">
          <CustomCardHeader>
            <p>اطلاعات ناشر</p>
          </CustomCardHeader>
          <CustomCardParagraph>
            اطلاعات زیر را می‌توانید پس از ساخت حساب، در پنل کاربری{" "}
            <span className="text-primaryBlue">ویرایش</span> کنید.
          </CustomCardParagraph>
          <GetPublisherInfoForm1
            email={email}
            setStep={setStep}
          />
        </CustomCardContainer>
      )}

      {step === 2 && (
        <GetPublisherInfo2
          setStep={setStep}
        />
      )}
      {/* {step === 3 && (
        <PublisherDocuments
        />
      )} */}
    </>
  );
}

export default GetPublisherInfo;
