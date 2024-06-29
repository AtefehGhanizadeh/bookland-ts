import { useState } from "react";
import { Flex } from "@chakra-ui/react";
import GetUserEmail from "@/src/components/signup/userSignup/getUserEmail/GetUserEmail";
import GetPublisherEmail from "@/src/components/signup/publisherSignup/GetPublisherEmail/GetPublisherEmail";
import EmailConfirmation from "@/src/components/signup/emailConfirmation";
import GetUserInfo from "@/src/components/signup/userSignup/getUserInfo";
import GetPublisherInfo from "@/src/components/signup/publisherSignup/GetPublisherInfo";

function Signup() {
  const [role, setRole] = useState("user");
  const [step, setStep] = useState(1);
  const [emailValue, setEmailValue] = useState<string|null>(null);
  const [verifyCode, setVerifyCode] = useState<string>();

  return (
    <main className={`flex min-h-screen flex-col items-center justify-center`}>
      {step === 1 && (
        <div>
          <Flex alignItems="flex-end">
            <button
              onClick={() => setRole("user")}
              className={`flex-grow-[1] rounded-t-[16px] text-[24px] font-medium leading-[37.5px] px-[52px] ${
                role === "user"
                  ? "bg-white text-primaryBlue py-[16px]"
                  : "bg-primaryBlue text-white  py-[10px]"
              }`}
            >
              کاربر
            </button>
            <button
              onClick={() => setRole("publisher")}
              className={`flex-grow-[1] rounded-t-[16px] text-[24px] font-medium leading-[37.5px] px-[52px] ${
                role === "publisher"
                  ? "bg-white text-primaryBlue py-[16px]"
                  : "bg-primaryBlue text-white py-[10px]"
              }`}
            >
              ناشر
            </button>
          </Flex>
          {role === "user" && (
            <GetUserEmail
              emailValue={emailValue}
              setEmailValue={setEmailValue}
              setStep={setStep}
            />
          )}
          {role === "publisher" && (
            <GetPublisherEmail
              emailValue={emailValue}
              setEmailValue={setEmailValue}
              setStep={setStep}
            />
          )}
        </div>
      )}
      {step === 2 && (
        <EmailConfirmation
          email={emailValue}
          setVerifyCode={setVerifyCode}
          emailEditHandler={() => setStep(1)}
          setStep={() => setStep(3)}
        />
      )}
      {step === 3 && role === "user" && <GetUserInfo email={emailValue} />}
      {step === 3 && role === "publisher" && (
        <GetPublisherInfo email={emailValue} />
      )}
    </main>
  );
}

export default Signup;
