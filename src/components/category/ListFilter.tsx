import React, { Dispatch, SetStateAction } from "react";
import { Box, Heading, Divider } from "@chakra-ui/react";

function ListFilter({
  language,
  list,
  header,
  setFilter,
 
}: {
  language: string | null;
  list: string[];
  header: string;
  setFilter: Dispatch<SetStateAction<string | null>>;
  
}) {
  return (
    <Box
      backgroundColor="white"
      borderRadius="16px"
      paddingX="14px"
      paddingY="24px"
    >
      <div>
        <Heading
          fontFamily="Vazirmatn"
          fontSize="16px"
          fontWeight="semibold"
          color="primary"
          marginBottom="20px"
        >
          {header}
        </Heading>
        <Divider marginBottom="20px" />
        <div>
          <ul className="grid grid-cols-2 lg:grid-cols-1 gap-[12px]">
            {list.map((item) => (
              <a className="cursor-pointer" key={Math.random()}>
                <li
                  onClick={() => setFilter(item)}
                  className={`${
                    language === item
                      ? "font-semibold text-primaryBlue before:content-['>']"
                      : "font-medium text-[16px] text-[#515457]"
                  }`}
                >
                  {item}
                </li>
              </a>
            ))}
          </ul>
        </div>
      </div>
    </Box>
  );
}

export default ListFilter;
