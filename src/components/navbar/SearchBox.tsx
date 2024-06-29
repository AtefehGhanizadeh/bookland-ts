import useGetBooks from "@/src/react-query/hooks/useGetBooks";
import React, { ChangeEvent, useState } from "react";
import { Flex } from "@chakra-ui/react";
import Link from "next/link";
import { Book } from "@/src/helpers/Interfaces";

function SearchBox() {
  const { data, isSuccess, isLoading, isError } = useGetBooks('');
  const[filteredArray,setFilteredArray]=useState<Book[]>([])
  const[searchValue,setSearchValue]=useState<string>()

  function inputChangeHandler(e:ChangeEvent<HTMLInputElement>) {
    if(data){
      let filteredList = data.filter((data) =>
        data.name.includes(e.target.value)||data.author_name.includes(e.target.value)
      );
      setFilteredArray(filteredList)
      setSearchValue(e.target.value)
    }
  }
  return (
    <div className="flex-grow h-full relative">
      <form>
        <input
          className={`flex pr-[35px] md:pr-[50px] ${filteredArray.length>0 && searchValue?"rounded-b-none rounded-t-[10px]":"rounded-[10px]"} gap-[2px] items-center bg-[#e4e4e4] w-full md:h-[44px] placeholder:text-[10px] md:placeholder:text-[16px] focus:outline-none`}
          placeholder="جست‌وجو از بین صدها کتاب متنی..."
          onChange={(e) => inputChangeHandler(e)}
        />
      </form>
      <div className="absolute top-[0.25px] right-2 md:top-2.5 md:right-4">
        <svg
        className="w-[20px] md:w-[25px]"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M14.8848 15.446C13.537 16.5229 11.828 17.0429 10.1087 16.8991C8.3895 16.7552 6.79059 15.9586 5.64039 14.6727C4.49019 13.3869 3.87601 11.7094 3.924 9.9848C3.97199 8.26024 4.67849 6.6195 5.89842 5.39958C7.11834 4.17965 8.75908 3.47315 10.4836 3.42516C12.2082 3.37717 13.8857 3.99135 15.1716 5.14155C16.4574 6.29175 17.2541 7.89066 17.3979 9.60989C17.5417 11.3291 17.0218 13.0382 15.9448 14.386L21.1008 19.541C21.1745 19.6097 21.2336 19.6925 21.2746 19.7845C21.3156 19.8765 21.3377 19.9758 21.3394 20.0765C21.3412 20.1772 21.3227 20.2772 21.285 20.3706C21.2472 20.464 21.1911 20.5488 21.1199 20.62C21.0487 20.6913 20.9638 20.7474 20.8704 20.7851C20.7771 20.8228 20.677 20.8414 20.5763 20.8396C20.4756 20.8378 20.3763 20.8158 20.2843 20.7748C20.1923 20.7338 20.1095 20.6747 20.0408 20.601L14.8848 15.446ZM6.95884 13.884C6.22488 13.15 5.725 12.2148 5.52236 11.1968C5.31972 10.1787 5.42342 9.12344 5.82036 8.1643C6.21729 7.20517 6.88965 6.38523 7.75246 5.8081C8.61526 5.23098 9.62979 4.92258 10.6678 4.92189C11.7058 4.92119 12.7208 5.22822 13.5844 5.80418C14.4479 6.38014 15.1214 7.19917 15.5196 8.15778C15.9179 9.11638 16.023 10.1715 15.8217 11.1898C15.6204 12.2082 15.1218 13.144 14.3888 13.879L14.3838 13.884L14.3788 13.888C13.3939 14.8706 12.0593 15.4221 10.668 15.4214C9.27676 15.4206 7.94269 14.8677 6.95884 13.884Z"
            fill="#515457"
          />
        </svg>
      </div>
      {filteredArray.length > 0 && searchValue && (
        <Flex width="full" position="absolute" flexDir="column" bg="#f2f2f2" borderBottomRadius="10px">
          {filteredArray.map((item) => (
            <Link className="py-[20px] px-[25px] rtl" href={`/books/${item.id}`} key={item.id}>{`${item.name}(${item.author_name})`}</Link>
          ))}
        </Flex>
      )}
    </div>
  );
}

export default SearchBox;
