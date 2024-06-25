import CustomButton from "@/src/components/ui/login-submit/CustomButton";
import { Flex } from "@chakra-ui/react";
import { Dispatch, SetStateAction, useState } from "react";
import useSendPublisherSignupInfo2 from "@/src/react-query/hooks/useSendPublisherSignupInfo2";
import { ChangeEvent, MouseEvent } from "react";
import Image from "next/image";

//ToDo:image validation

function PublisherDocumentsForm() {
  const { mutate } = useSendPublisherSignupInfo2();

  const [idCardImg, setIdCardImg] = useState("");
  const [logoImg, setLogoImg] = useState("");
  const [idCardImage, setIdCardImag] = useState<File | null>(null);
  const [logoImage, setLogoImage] = useState<File | null>(null);
  const [isValidIdImage, setIsValidIdImage] = useState(true);
  const [isValidLogoImage, setIsValidLogoImage] = useState(true);

  function validateFile(file: File) {
    const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/png"];
    const FILE_SIZE = 8000000;
    return (
      file && file.size <= FILE_SIZE && SUPPORTED_FORMATS.includes(file.type)
    );
  }

  const convert2base64 = (
    file: File,
    setFunc: Dispatch<SetStateAction<string>>
  ) => {
    const reader = new FileReader();

    reader.onloadend = () => {
      setFunc(reader.result!.toString()); //?
    };

    reader.readAsDataURL(file);
  };

  const onUploadIdCardImage = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files!.length > 0) {
      convert2base64(e.target.files![0], setIdCardImg);
    }
  };
  const onUploadLogoImage = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files!.length > 0) {
      convert2base64(e.target.files![0], setLogoImg);
    }
  };

  function submitHandler(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    if (idCardImage && isValidIdImage && isValidLogoImage) {
      const formData = new FormData();
      if(logoImage instanceof File && idCardImage instanceof File){
        formData.append("publications_image", logoImage);
        formData.append("identity_image", idCardImage);
      }
      mutate({ formData });
    }
  }

  return (
    <form className="flex flex-col gap-y-[30px]">
      <Flex justifyContent="space-between" columnGap="20px">
        <Flex flexDir="column" justifyContent="space-between" columnGap="20px">
          <Flex alignItems="center" columnGap="8px">
            <p className="text-[20px] font-semibold">عکس کارت ملی</p>{" "}
            <p className="text-[12px] font-light text-error">
              {!isValidIdImage ? "فرمت یا سایز فایل نادرست است." : ""}
            </p>
          </Flex>
          {idCardImg && isValidIdImage ? (
            <div className="w-[346px] h-[346px]">
              <Image
              alt=""
                className="w-[346px] h-[346px] object-fill"
                src={idCardImg}
              />
            </div>
          ) : (
            <label
              htmlFor="idCardImage"
              className={`cursor-pointer flex flex-col gap-y-[8px] justify-center items-center w-[342px] h-[342px] bg-[#C8C8C878] outline-[4px] outline-dashed  text-black text-center ${"outline-[#C8C8C8]"}`}
            >
              <p className="text-[20px] font-semibold leading-[24px]">
                برای آپلود کلیک کنید.
              </p>
              <p className="text-[14px] font-medium leading-[24px]">
                (حداکثر 8 مگابایت)
              </p>
            </label>
          )}
          <input
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              if (validateFile(e.target.files![0])) {
                onUploadIdCardImage(e);
                setIdCardImag(e.target.files![0]);
                setIsValidIdImage(true);
              } else {
                setIsValidIdImage(false);
              }
            }}
            id="idCardImage"
            name="idCardImage"
            type="file"
            className="hidden"
            accept=".jpeg,.jpg,.png"
          />
        </Flex>
        <Flex flexDir="column" rowGap="8px">
          <p className="text-[20px] font-semibold">
            عکس لوگو
            <span className="text-[#C8C8C8]"> (اختیاری)</span>
          </p>
          <p className="text-[12px] font-light text-error">
            {!isValidLogoImage ? "فرمت یا سایز فایل نادرست است." : ""}
          </p>
          {logoImg && isValidLogoImage ? (
            <div className="w-[346px] h-[346px]">
              <Image alt="" width={346} className="w-[346px] h-[346px] object-fill" src={logoImg} />
            </div>
          ) : (
            <label
              htmlFor="logoImage"
              className="cursor-pointer flex flex-col gap-y-[8px] justify-center items-center w-[342px] h-[342px] bg-[#C8C8C878] outline-[4px] outline-dashed outline-[#C8C8C8]  text-black text-center"
            >
              <p className="text-[20px] font-semibold leading-[24px]">
                برای آپلود کلیک کنید.
              </p>
              <p className="text-[14px] font-medium leading-[24px]">
                (حداکثر 8 مگابایت)
              </p>
            </label>
          )}
          <input
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              if (validateFile(e.target.files![0])) {
                onUploadLogoImage(e);
                setLogoImage(e.target.files![0]);
                setIsValidLogoImage(true);
              } else {
                setIsValidLogoImage(false);
              }
            }}
            id="logoImage"
            name="logoImage"
            type="file"
            className="hidden"
            accept=".jpeg,.jpg,.png"
          />
        </Flex>
      </Flex>
      <CustomButton
        type="submit"
        disabled={idCardImage === null}
        onClick={submitHandler}
      >
        ادامه
      </CustomButton>
    </form>
  );
}

export default PublisherDocumentsForm;
