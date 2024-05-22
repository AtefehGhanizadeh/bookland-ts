import CustomCardContainer from "@/src/components/ui/login-submit/CustomCard/CustomCardContainer";
import CustomCardHeader from "@/src/components/ui/login-submit/CustomCard/CustomCardHeader";
import CustomCardParagraph from "@/src/components/ui/login-submit/CustomCard/CustomCardParagraph";
import GetEmailForm from "@/src/components/signup/GetEmailForm";
import{Dispatch, SetStateAction} from 'react'

interface Props{
  setStep: Dispatch<SetStateAction<number>>,
  emailValue:string|null,
  setEmailValue:Dispatch<SetStateAction<string|null>>,
}
function GetEmail(props:Props){
    return(
        <CustomCardContainer roundedTop='20px'>
          <CustomCardHeader>
            <p>فراموشی رمز عبور</p>
          </CustomCardHeader>
          <CustomCardParagraph>
            ایمیل حساب کاربری خود را وارد کنید.
          </CustomCardParagraph>
          <GetEmailForm setStep={props.setStep} emailValue={props.emailValue} setEmailValue={props.setEmailValue} endpoint="send-resetpassword-code"/>
        </CustomCardContainer>
    )
}

export default GetEmail