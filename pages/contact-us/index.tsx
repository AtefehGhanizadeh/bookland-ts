import Image from "next/image";
import { Flex } from "@chakra-ui/react";
import image from "@/public/assets/images/Design.png";
import Link from "next/link";
import Navbar from "@/src/components/navbar/Navbar";
import { useParams } from "next/navigation";

function Rules() {
  const params=useParams()
  return (
    <>
    <Navbar/>
    <div className="bg-white rounded-[20px] py-[40px] px-[20px] md:px-[100px] w-[80%] mx-auto mt-[80px]">
      <Flex justifyContent="space-between" alignItems="center" className="flex-col flex-col-reverse gap-[50px] md:flex-row">
        <Flex flexDir="column" gap="20px" className="md:w-[50%]">
          <p className="text-[24px] whitespace-pre md:text-[30px] font-medium">مراحل همکاری با بوکلند</p>
          <Flex flexDir="column" gap="8px">
            <p>
              بوکلند یک فروشگاه اینترنتی برای فروش کتابهای نسخه دیجیتال شما
              می‌باشد.
            </p>
            <p>
              برای شروع همکاری، کافی است اقدام به ایجاد حساب ‌کاربری کرده و
              اطلاعات مربوط به کسب و کار خود را وارد نمایید.
            </p>
            <p>
              پس از احراز هویت، توسط مجموعه بوکلند با شما تماس گرفته میشود تا
              اطلاع رسانی های لازم جهت آغاز فعالیتتان به شما ابلاغ گردد.
            </p>
            <a href="#" className="text-primary">برای شروع همکاری، کلیک کنید.</a>
            <p>
              در صورت وجود سوالات و ابهامات، می‌توانید با ما{" "}
              <Link href="/call-us" className="text-primary">تماس</Link> حاصل فرمایید.
            </p>
          </Flex>
        </Flex>
        <div className="">
          <Image alt='' src={image} width="280" height="280" />
        </div>
      </Flex>
    </div>
    </>
  );
}

export default Rules;
