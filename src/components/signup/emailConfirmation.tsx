import CustomButton from "@/src/components/ui/login-submit/CustomButton";
import CustomCardContainer from "@/src/components/ui/login-submit/CustomCard/CustomCardContainer";
import CustomCardHeader from "@/src/components/ui/login-submit/CustomCard/CustomCardHeader";
import CustomCardParagraph from "@/src/components/ui/login-submit/CustomCard/CustomCardParagraph";
import { PinInput, PinInputField, HStack } from "@chakra-ui/react";
import useSendVerificationCode from "@/src/react-query/hooks/useSendVerificationCode";
import useSendEmail from "@/src/react-query/hooks/useSendEmail";
import { useRouter } from "next/router";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

interface Props {
  setStep: Dispatch<SetStateAction<number>>;
  email: string | null;
  setVerifyCode: Dispatch<SetStateAction<string | undefined>>;
  emailEditHandler: () => void;
}
function EmailConfirmation(props: Props) {
  let width: number;
  const { pathname } = useRouter();
  const { mutate } = useSendVerificationCode(props.setStep);
  const { mutate: loginResendCodeMutation } = useSendEmail();
  const { mutate: signupResendCodeMutation } =
  useSendEmail("send-signup-email");
  
  const endSeconds = 120;
  const [currentTime, setCurrentTime] = useState(0);
  const isDisabled = currentTime < 120;
  width = (currentTime * 10) / 12;


  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (currentTime < endSeconds) {
      timer = setInterval(() => {
        setCurrentTime((prevTime) => prevTime + 1);
      }, 1000);
    }
    return () => {
      clearInterval(timer);
    };
  }, [currentTime, endSeconds]);

  return (
    <CustomCardContainer roundedTop="20px">
      <CustomCardHeader>تایید آدرس ایمیل</CustomCardHeader>
      <CustomCardParagraph>
        کد ارسال شده به ایمیل {props.email} را بنویسید:
      </CustomCardParagraph>
      <form>
        <HStack justifyContent="space-between" dir="ltr">
          <PinInput
            placeholder=""
            variant="flushed"
            autoFocus={true}
            focusBorderColor="primaryBlue"
            errorBorderColor="error"
            onComplete={(value) => {
              props.setVerifyCode(value);
              mutate({
                email: props.email,
                activation_code: value,
              });
            }}
          >
            <PinInputField
              w="50px"
              h="50px"
              border="2px"
              borderColor="#464748"
              borderRadius="8px"
            />
            <PinInputField
              w="50px"
              h="50px"
              border="2px"
              borderColor="#464748"
              borderRadius="8px"
            />
            <PinInputField
              w="50px"
              h="50px"
              border="2px"
              borderColor="#464748"
              borderRadius="8px"
            />
            <PinInputField
              w="50px"
              h="50px"
              border="2px"
              borderColor="#464748"
              borderRadius="8px"
            />
            <PinInputField
              w="50px"
              h="50px"
              border="2px"
              borderColor="#464748"
              borderRadius="8px"
            />
            <PinInputField
              w="50px"
              h="50px"
              border="2px"
              borderColor="#464748"
              borderRadius="8px"
            />
          </PinInput>
        </HStack>
      </form>
      <CustomButton
      _before={{
        content: "''",
        position: "absolute",
        right: "0",
        top: "0",
        h: "100%",
        w: width+'%',
        backgroundColor: "primaryBlue",
      }}
        className="relative bg-[#C0C0C0] hover:bg-[#C0C0C0]"
        disabled={isDisabled}
        onClick={() => {
          if (!isDisabled) {
            if (pathname === "/signup") {
              signupResendCodeMutation({
                email: props.email,
              });
            } else {
              loginResendCodeMutation({
                email: props.email,
              });
            }
          }
          setCurrentTime(0);
        }}
      >
        <span className="z-[1]">ارسال دوباره کد</span>
      </CustomButton>
      <div className="text-right">
        <button
          onClick={props.emailEditHandler}
          className="font-normal text-[16px] leading-[25px] text-primaryBlue text-right w-full"
        >
          ویرایش آدرس ایمیل &#8598;
        </button>
      </div>
    </CustomCardContainer>
  );
}

export default EmailConfirmation;
