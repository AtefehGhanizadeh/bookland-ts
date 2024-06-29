import { useState } from "react";
import GetEmail from "@/src/components/login/forgetPassword/GetEmail"
import EmailConfirmation from "@/src/components/signup/emailConfirmation";
import ResetPassword from "@/src/components/login/forgetPassword/ResetPassword";

function ForgetPassword() {
  const [step, setStep] = useState(1);
  const [emailValue, setEmailValue] = useState<string|null>(null);
  const [verifyCode,setVerifyCode]=useState<string>()
  
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-center`}
    >
      {step === 1 && (
        <div>
            <GetEmail
              emailValue={emailValue}
              setEmailValue={setEmailValue}
              setStep={setStep}
            />
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
      {step === 3 && 
        <ResetPassword
          email={emailValue}
          verifyCode={verifyCode}
        />
      }
    </main>
  );
}

export default ForgetPassword;