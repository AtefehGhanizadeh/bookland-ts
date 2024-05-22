import CustomCardContainer from "@/src/components/ui/login-submit/CustomCard/CustomCardContainer";
import CustomCardHeader from "@/src/components/ui/login-submit/CustomCard/CustomCardHeader";
import CustomCardParagraph from "@/src/components/ui/login-submit/CustomCard/CustomCardParagraph";
import CustomCardLink from "@/src/components/ui/login-submit/CustomCard/CustomCardLink";
import GetEmailForm from "@/src/components/signup/GetEmailForm";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

interface Props{
  setStep:Dispatch<SetStateAction<number>>,
  emailValue:string|null,
  setEmailValue:Dispatch<SetStateAction<string|null>>
}

function GetPublisherEmail(props:Props) {
  return (
    <CustomCardContainer roundedTop="0">
      <CustomCardHeader>
        <p>ناشر عزیز،</p>
        <p> به بوکلند خوش اومدی :)</p>
      </CustomCardHeader>
      <CustomCardParagraph>
        برای ساخت <span className="text-primaryBlue">حساب شخصی</span> ،اطلاعات خود
        را وارد کنید.
      </CustomCardParagraph>
      <GetEmailForm
        setStep={props.setStep}
        emailValue={props.emailValue}
        setEmailValue={props.setEmailValue}
        endpoint="send-signup-email"
      />
      <p className="font-medium text-[12px] leading-[18.75px] text-black text-right">
        {" "}
        ثبت نام در بوکلند به معنی موافقت با{" "}
        <Link
          href="/rules"
          className="text-primaryBlue underline underline-offset-4"
        >
          شرایط استفاده از بوکلند{" "}
        </Link>{" "}
        است.
      </p>
      <CustomCardLink href={"/login"}>
        قبلا در بوکلند حساب کاربری داشتم
      </CustomCardLink>
    </CustomCardContainer>
  );
}

export default GetPublisherEmail;
