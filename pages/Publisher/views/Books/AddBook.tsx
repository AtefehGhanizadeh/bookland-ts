import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Checkbox,
  Flex,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Radio,
  RadioGroup,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import Link from "next/link";
import Sidebar from "../../components/Sidebar";
import React, {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
  MouseEvent,
} from "react";
import { useRouter } from "next/router";
import useEditBook from "@/src/react-query/hooks/useEditBook";

const AddBook = () => {
  const router = useRouter();
  const { id, bookname } = router.query;
  const { mutate, error } = useEditBook(+id!);

  const [coverImg, setCoverImg] = useState("");
  const [coverImageFile, setCoverImageFile] = useState<File>();
  const [orginalFile, setOrginalFile] = useState<File>();
  const [demoFile, setDemoFile] = useState<File>();
  const [isValidCoverImage, setIsValidCoverImage] = useState(true);
  const [isValidOrginalFile, setIsValidOrginalFile] = useState(true);
  const [isValidDemoFile, setIsValidDemoFile] = useState(true);
  //
  const [bookName, setBookName] = useState("");
  const [author, setAuthor] = useState("");
  const [releasedDate, setReleasedDate] = useState("1401");
  const [price, setPrice] = useState("15000");
  const [description, setDescription] = useState("");
  const [pageNumber, setPageNumber] = useState("10");
  const [language, setLanguage] = useState("");
  const [genre, setGenre] = useState("");
  const [translator, setTranslator] = useState("");

  const format = (val: string) => val + ` تومان`;
  const parse = (val: string) => val.replace(/^ تومان/, "");

  // Cover
  function validatePic(file: File) {
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
      setFunc(reader.result!.toString());
    };

    reader.readAsDataURL(file);
  };

  const onUploadLogoImage = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files!.length > 0) {
      convert2base64(e.target.files![0], setCoverImg);
    }
  };

  // File
  function validateFile(file: File) {
    const SUPPORTED_FORMATS = ["pdf"];
    const FILE_SIZE = 40000000;

    // Get the file extension from the file name
    const fileNameParts = file.name.split(".");
    const fileExtension = fileNameParts[fileNameParts.length - 1].toLowerCase();

    return (
      file &&
      file.size <= FILE_SIZE &&
      SUPPORTED_FORMATS.includes(fileExtension)
    );
  }

  const submitHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (
      coverImageFile &&
      isValidCoverImage &&
      bookName &&
      author &&
      isValidOrginalFile &&
      releasedDate &&
      price &&
      pageNumber &&
      language &&
      genre &&
      orginalFile &&
      demoFile &&
      isValidCoverImage &&
      isValidDemoFile
    ) {
      const formData = new FormData();

      formData.append("name", bookName);
      formData.append("author_name", author);
      formData.append("translator", translator);
      formData.append("released_date", releasedDate);
      formData.append("genre", genre);
      formData.append("price", price);
      formData.append("number_of_pages", pageNumber);
      formData.append("language_id", language);
      formData.append("category_id", language);
      formData.append("description", description);

      formData.append("book_cover_image", coverImageFile);
      formData.append("demo_file", demoFile);
      formData.append("original_file", orginalFile);

      mutate(formData);
      if (!error) {
        router.push("./");
      }
    }
  };

  return (
    <>
      <Sidebar pageName={"Books"}>
        <div className="flex justify-center">
          <Flex w="1000px" direction="column" mt="70px">
            <Flex justifyContent="center" alignItems="center">
              <Card width="900px" minHeight="430px">
                <CardHeader>
                  <Flex mr="20px">
                    <Link href="./">
                      <Text _hover={{ color: "blue.500" }}>کتاب‌ها</Text>
                    </Link>
                    <Text> ‌ › ‌ </Text>

                    <Link href="">
                      <Text _hover={{ color: "blue.500" }}>
                        ویرایش کتاب {bookname}
                      </Text>
                    </Link>
                  </Flex>
                </CardHeader>
                <CardBody>
                  <Flex flexDir="column" gap="5">
                    <form className="flex gap-y-[30px] ">
                      <Flex flexDir="column" gap="10px">
                        <Flex
                          mr="28px" //book name
                        >
                          <Text width="300px">نام کتاب</Text>
                          <Input
                            onChange={(e) => {
                              setBookName(e.target.value);
                            }}
                            id="bookName"
                            name="bookName"
                            type="text"
                            value={bookName}
                          />
                        </Flex>
                        <Flex
                          mr="28px" //author name
                        >
                          <Text width="300px">نام نویسنده</Text>
                          <Input
                            onChange={(e) => {
                              setAuthor(e.target.value);
                            }}
                            id="author"
                            name="author"
                            type="text"
                            value={author}
                          />
                        </Flex>
                        <Flex
                          mr="28px" //book translator
                        >
                          <Text width="300px">نام مترجم (در صورت وجود)</Text>
                          <Input
                            onChange={(e) => {
                              setTranslator(e.target.value);
                            }}
                            id="translator"
                            name="translator"
                            type="text"
                            value={translator}
                          />
                        </Flex>

                        <Flex
                          mr="28px" // book released date
                        >
                          <Text width="220px">تاریخ انتشار</Text>
                          <NumberInput
                            step={1}
                            onChange={(valueString) =>
                              setReleasedDate(parse(valueString))
                            }
                            value={releasedDate}
                            min={1350}
                            max={1402}
                          >
                            <NumberInputField pr="40px" />
                            <NumberInputStepper>
                              <NumberIncrementStepper
                                bg="green.200"
                                _active={{
                                  bg: "green.300",
                                }}
                                // children="+"
                              />
                              <NumberDecrementStepper
                                bg="red.400"
                                _active={{
                                  bg: "red.800",
                                }}
                                // children="-"
                              />
                            </NumberInputStepper>
                          </NumberInput>
                        </Flex>

                        <Flex //book genre
                          mr="28px"
                        >
                          <Text width="230px">ژانر کتاب</Text>
                          <RadioGroup onChange={setGenre} value={genre}>
                            <Stack direction="row">
                              <Radio colorScheme="green" value="1">
                                درسی
                              </Radio>
                              <Radio colorScheme="green" value="2">
                                آشپزی
                              </Radio>
                              <Radio colorScheme="green" value="3">
                                علمی-تخیلی
                              </Radio>
                            </Stack>
                          </RadioGroup>
                        </Flex>
                        <Flex
                          mr="28px" // book price
                        >
                          <Text width="220px">قیمت</Text>
                          <NumberInput
                            step={1000}
                            onChange={(valueString) =>
                              setPrice(parse(valueString))
                            }
                            value={format(price)}
                            min={5000}
                            max={200000}
                          >
                            <NumberInputField pr="40px" />
                            <NumberInputStepper>
                              <NumberIncrementStepper
                                bg="green.200"
                                _active={{
                                  bg: "green.300",
                                }}
                                // children="+"
                              />
                              <NumberDecrementStepper
                                bg="red.400"
                                _active={{
                                  bg: "red.800",
                                }}
                                // children="-"
                              />
                            </NumberInputStepper>
                          </NumberInput>
                        </Flex>
                        <Flex
                          mr="28px" // book pages number
                        >
                          <Text width="220px">تعداد صفحات</Text>
                          <NumberInput
                            step={1}
                            onChange={(valueString) =>
                              setPageNumber(parse(valueString))
                            }
                            value={pageNumber}
                            min={10}
                            max={500}
                          >
                            <NumberInputField pr="40px" />
                            <NumberInputStepper>
                              <NumberIncrementStepper
                                bg="green.200"
                                _active={{
                                  bg: "green.300",
                                }}
                                // children="+"
                              />
                              <NumberDecrementStepper
                                bg="red.400"
                                _active={{
                                  bg: "red.800",
                                }}
                                // children="-"
                              />
                            </NumberInputStepper>
                          </NumberInput>
                        </Flex>
                        <Flex //   book language
                          mr="28px"
                          alignItems="center"
                        >
                          <Text width="310px">زبان</Text>
                          <RadioGroup onChange={setLanguage} value={language}>
                            <Stack spacing={5} direction="row" wrap="wrap">
                              <Radio colorScheme="green" value="1">
                                فارسی
                              </Radio>
                              <Radio colorScheme="green" value="2">
                                انگلیسی
                              </Radio>
                              <Radio colorScheme="green" value="3">
                                عربی
                              </Radio>
                              <Radio colorScheme="green" value="4">
                                اسپانیایی
                              </Radio>
                              <Radio colorScheme="green" value="5">
                                چینی
                              </Radio>
                              <Radio colorScheme="green" value="6">
                                آلمانی
                              </Radio>
                              <Radio colorScheme="green" value="7">
                                فرانسوی
                              </Radio>
                              <Radio colorScheme="green" value="8">
                                ایتالیایی
                              </Radio>
                              <Radio colorScheme="green" value="9">
                                ترکی استانبولی
                              </Radio>
                            </Stack>
                          </RadioGroup>
                        </Flex>
                        <Flex mr="28px">
                          <Text width="300px">درباره کتاب</Text>
                          <Textarea
                            onChange={(e) => {
                              setDescription(e.target.value);
                            }}
                            value={description}
                            placeholder="آنچه باید خواننده کتاب بداند ..."
                            height="250px"
                          />
                        </Flex>

                        <Flex //book file
                          flexDir="column"
                        >
                          <Flex // book original file
                            mr="28px"
                            justifyContent="flex-start"
                            alignItems="center"
                          >
                            <Text width="200px">
                              فایل اصلی کتاب را آپلود کنید.
                              <span className="text-[14px] font-medium leading-[24px]">
                                (حداکثر 40 مگابایت)
                              </span>
                            </Text>
                            <Flex flexDir="column" rowGap="10px" mr="23px">
                              <p className="text-[12px] font-light text-error">
                                {!isValidOrginalFile
                                  ? "فرمت یا سایز فایل نادرست است."
                                  : ""}
                              </p>
                              {orginalFile && isValidOrginalFile ? (
                                <div className="w-[346px] h-[346px]">
                                  File
                                  {/* <embed
																		src={
																			orginalFile
																		}
																		type="application/pdf"
																		width="100%"
																		height="100%"
																	/> */}
                                </div>
                              ) : (
                                <label
                                  className="cursor-pointer flex flex-col gap-y-[8px] justify-center items-center w-[342px] h-[342px] bg-[#C8C8C878] outline-[4px] outline-dashed outline-[#C8C8C8]  text-black text-center"
                                  htmlFor="originalFile"
                                >
                                  <p className="text-[17px] font-semibold leading-[24px]">
                                    برای آپلود کلیک کنید.
                                  </p>
                                </label>
                              )}
                              <input
                                onChange={(e) => {
                                  if (validateFile(e.target.files![0])) {
                                    // onUploadFile(
                                    // 	e,
                                    // 	setOrgFile
                                    // );
                                    setOrginalFile(e.target.files![0]);
                                    setIsValidOrginalFile(true);
                                  } else {
                                    setIsValidOrginalFile(false);
                                  }
                                }}
                                id="originalFile"
                                name="originalFile"
                                type="file"
                                className="hidden"
                                accept="application/pdf"
                              />
                            </Flex>
                          </Flex>
                          <Flex // book demo file
                            mr="28px"
                            justifyContent="flex-start"
                            alignItems="center"
                          >
                            <Text width="200px">
                              فایل دموی کتاب را آپلود کنید.
                              <span className="text-[14px] font-medium leading-[24px]">
                                (حداکثر 40 مگابایت)
                              </span>
                            </Text>
                            <Flex flexDir="column" rowGap="10px" mr="23px">
                              <span className="text-[12px] font-light text-error">
                                {!isValidDemoFile
                                  ? "فرمت یا سایز فایل نادرست است."
                                  : ""}
                              </span>
                              {demoFile && isValidDemoFile ? (
                                <div className="w-[346px] h-[346px]">
                                  DemoFile
                                  {/* <embed
																		src={
																			demFile
																		}
																		type="application/pdf"
																		width="100%"
																		height="100%"
																	/> */}
                                </div>
                              ) : (
                                <label
                                  className="cursor-pointer flex flex-col gap-y-[8px] justify-center items-center w-[342px] h-[342px] bg-[#C8C8C878] outline-[4px] outline-dashed outline-[#C8C8C8]  text-black text-center"
                                  htmlFor="demoFile"
                                >
                                  <p className="text-[17px] font-semibold leading-[24px]">
                                    برای آپلود کلیک کنید.
                                  </p>
                                </label>
                              )}
                              <input
                                onChange={(e) => {
                                  if (validateFile(e.target.files![0])) {
                                    // onUploadFile(
                                    // 	e,
                                    // 	setDemFile
                                    // );
                                    setDemoFile(e.target.files![0]);
                                    setIsValidDemoFile(true);
                                  } else {
                                    setIsValidDemoFile(false);
                                  }
                                }}
                                id="demoFile"
                                name="demoFile"
                                type="file"
                                className="hidden"
                                accept="application/pdf"
                              />
                            </Flex>
                          </Flex>
                        </Flex>
                        <Flex // book cover
                          mr="28px"
                          justifyContent="flex-start"
                          alignItems="center"
                        >
                          <Text width="200px">
                            عکس روی جلد کتاب را آپلود کنید.
                          </Text>
                          <Flex flexDir="column" rowGap="10px" mr="23px">
                            <p className="text-[12px] font-light text-error">
                              {!isValidCoverImage
                                ? "فرمت یا سایز فایل نادرست است."
                                : ""}
                            </p>
                            {coverImg && isValidCoverImage ? (
                              <div className="w-[346px] h-[346px]">
                                <img
                                  className="w-[346px] h-[346px] object-fill"
                                  src={coverImg}
                                />
                              </div>
                            ) : (
                              <label
                                className="cursor-pointer flex flex-col gap-y-[8px] justify-center items-center w-[342px] h-[342px] bg-[#C8C8C878] outline-[4px] outline-dashed outline-[#C8C8C8]  text-black text-center"
                                htmlFor="coverImage"
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
                              onChange={(e) => {
                                if (validatePic(e.target.files![0])) {
                                  onUploadLogoImage(e);
                                  setCoverImageFile(e.target.files![0]);
                                  setIsValidCoverImage(true);
                                } else {
                                  setIsValidCoverImage(false);
                                }
                              }}
                              id="coverImage"
                              name="coverImage"
                              type="file"
                              className="hidden"
                              accept=".jpeg,.jpg,.png"
                            />
                          </Flex>
                        </Flex>
                      </Flex>
                    </form>
                  </Flex>
                </CardBody>
                <CardFooter justifyContent="center">
                  <Button
                    onClick={(e) => submitHandler(e)}
                    type="submit"
                    colorScheme="blue"
                  >
                    ثبت کتاب
                  </Button>
                </CardFooter>
              </Card>
            </Flex>
          </Flex>
        </div>
      </Sidebar>
    </>
  );
};

export default AddBook;
