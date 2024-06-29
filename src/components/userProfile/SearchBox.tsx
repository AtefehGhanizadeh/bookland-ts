import { Card, Input } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { Dispatch, SetStateAction } from "react";

const SearchBox = ({
  setInput,
}: {
  setInput: Dispatch<SetStateAction<string>>;
}) => {
  const router = useRouter();
  const pageName = router.pathname;
  return (
    <>
      {!(pageName === "/userProfile") &&
        !(pageName === "/transactionHistory") &&
        !(pageName === "/wallet") && (
          <Card
            padding="40px 20px"
            borderRadius="20px"
            background="#FAFAFA"
            flexDir="row"
            justifyContent="flex-end"
          >
            <Input
              onChange={(e) => setInput(e.target.value)}
              placeholder="جست‌و‌جو در خواسته‌ها..."
              padding="8px 12px 8px 100px"
              width="277px"
              borderColor="#C8C8C8"
              _placeholder={{
                color: "#C8C8C8",
                fontSize: "12px",
                fontWeight: "500",
              }}
              _focus={{
                borderColor: "#C8C8C8",
                boxShadow: "none",
              }}
            />
          </Card>
        )}
    </>
  );
};

export default SearchBox;
