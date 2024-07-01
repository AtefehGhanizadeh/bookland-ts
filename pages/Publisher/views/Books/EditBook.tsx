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
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import useEditBook from "@/src/react-query/hooks/useEditBook";

const AddBook = () => {
	const router = useRouter();
	const { id, bookname } = router.query;
	const { mutate, isLoading, error } = useEditBook();

	const [coverImg, setCoverImg] = useState("");
	const [orgFile, setOrgFile] = useState("");
	const [demFile, setDemFile] = useState("");
	const [coverImage, setCoverImage] = useState(null);
	const [orginalFile, setOrginalFile] = useState(null);
	const [demoFile, setDemoFile] = useState(null);
	const [isValidCoverImage, setIsValidCoverImage] = useState(true);
	const [isValidOrginalFile, setIsValidOrginalFile] = useState(true);
	const [isValidDemoFile, setIsValidDemoFile] = useState(true);
	const [coverValue, setCoverValue] = useState("");
	const [orgFileValue, setOrgFileValue] = useState("");
	const [demoFileValue, setDemoFileValue] = useState("");

	const format = (val) => val + ` تومان`;
	const parse = (val) => val.replace(/^ تومان/, "");

	const [bookName, setBookName] = React.useState("");
	const [author, setAuthor] = React.useState("");
	const [releasedDate, setReleasedDate] = React.useState("1401");
	const [price, setPrice] = React.useState("15000");
	const [description, setDescription] = React.useState("");
	const [pageNumber, setPageNumber] = React.useState("10");
	const [language, setLanguage] = React.useState("");
	const [genre, setGenre] = React.useState("");
	const [translator, setTranslator] = React.useState("");

	useEffect(() => {
		setCoverImg("");
		setOrgFile("");
		setDemFile("");
		setCoverImage(null);
		setOrginalFile(null);
		setDemoFile(null);
		setIsValidCoverImage(true);
		setIsValidOrginalFile(true);
		setIsValidDemoFile(true);
		setCoverValue("");
		setOrgFileValue("");
		setDemoFileValue("");
	}, []);

	// Cover
	function validatePic(file) {
		const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/png"];
		const FILE_SIZE = 8000000;
		return (
			file &&
			file.size <= FILE_SIZE &&
			SUPPORTED_FORMATS.includes(file.type)
		);
	}

	const convert2base64 = (file, setFunc) => {
		const reader = new FileReader();

		reader.onloadend = () => {
			setFunc(reader.result.toString());
		};

		reader.readAsDataURL(file);
	};

	const onUploadLogoImage = (e) => {
		if (e.target.files.length > 0) {
			convert2base64(e.target.files[0], setCoverImg);
		}
	};

	// File
	function validateFile(file) {
		const SUPPORTED_FORMATS = ["pdf"];
		const FILE_SIZE = 40000000;

		// Get the file extension from the file name
		const fileNameParts = file.name.split(".");
		const fileExtension =
			fileNameParts[fileNameParts.length - 1].toLowerCase();

		return (
			file &&
			file.size <= FILE_SIZE &&
			SUPPORTED_FORMATS.includes(fileExtension)
		);
	}

	const onUploadFile = (e, setFileFunc) => {
		if (e.target.files.length > 0) {
			convert2base64(e.target.files[0], setFileFunc);

			setFileFunc(e.target.files[0]);
		}
	};

	const submitHandler = (e) => {
		e.preventDefault();
		if (
			coverImage &&
			isValidCoverImage &&
			bookName &&
			author &&
			isValidOrginalFile &&
			releasedDate &&
			price &&
			description &&
			pageNumber &&
			language &&
			genre &&
			orginalFile &&
			demoFile &&
			isValidCoverImage &&
			isValidDemoFile &&
			coverValue &&
			orgFileValue &&
			demoFileValue
		) {
			const formData = new FormData();

			formData.append("bookName", bookName);
			formData.append("author", author);
			formData.append("translator", translator);
			formData.append("releasedDate", releasedDate);
			formData.append("genre", genre);
			formData.append("price", price);
			formData.append("pageNumber", pageNumber);
			formData.append("language", language);
			formData.append("description", description);

			formData.append("publications_image", coverImage);
			formData.append("book_original_file", demoFile);
			formData.append("book_demo_file", orginalFile);

			for (const pair of formData.entries()) {
				console.log(pair[0], pair[1]);
			}

			console.log(formData.values);
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
											<Text
												_hover={{ color: "blue.500" }}
											>
												کتاب‌ها
											</Text>
										</Link>
										<Text> ‌ › ‌ </Text>

										<Link href="">
											<Text
												_hover={{ color: "blue.500" }}
											>
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
													<Text width="300px">
														نام کتاب
													</Text>
													<Input
														onChange={(e) => {
															setBookName(
																e.target.value
															);
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
													<Text width="300px">
														نام نویسنده
													</Text>
													<Input
														onChange={(e) => {
															setAuthor(
																e.target.value
															);
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
													<Text width="300px">
														نام مترجم (در صورت وجود)
													</Text>
													<Input
														onChange={(e) => {
															setTranslator(
																e.target.value
															);
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
													<Text width="220px">
														تاریخ انتشار
													</Text>
													<NumberInput
														step={1}
														onChange={(
															valueString
														) =>
															setReleasedDate(
																parse(
																	valueString
																)
															)
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
																children="+"
															/>
															<NumberDecrementStepper
																bg="red.400"
																_active={{
																	bg: "red.800",
																}}
																children="-"
															/>
														</NumberInputStepper>
													</NumberInput>
												</Flex>

												<Flex //book genre
													mr="28px"
												>
													<Text width="230px">
														ژانر کتاب
													</Text>
													<RadioGroup
														onChange={setGenre}
														value={genre}
													>
														<Stack direction="row">
															<Radio
																colorScheme="green"
																value="1"
															>
																درسی
															</Radio>
															<Radio
																colorScheme="green"
																value="2"
															>
																آشپزی
															</Radio>
															<Radio
																colorScheme="green"
																value="3"
															>
																علمی-تخیلی
															</Radio>
														</Stack>
													</RadioGroup>
												</Flex>
												<Flex
													mr="28px" // book price
												>
													<Text width="220px">
														قیمت
													</Text>
													<NumberInput
														step={1000}
														onChange={(
															valueString
														) =>
															setPrice(
																parse(
																	valueString
																)
															)
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
																children="+"
															/>
															<NumberDecrementStepper
																bg="red.400"
																_active={{
																	bg: "red.800",
																}}
																children="-"
															/>
														</NumberInputStepper>
													</NumberInput>
												</Flex>
												<Flex
													mr="28px" // book pages number
												>
													<Text width="220px">
														تعداد صفحات
													</Text>
													<NumberInput
														step={1}
														onChange={(
															valueString
														) =>
															setPageNumber(
																parse(
																	valueString
																)
															)
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
																children="+"
															/>
															<NumberDecrementStepper
																bg="red.400"
																_active={{
																	bg: "red.800",
																}}
																children="-"
															/>
														</NumberInputStepper>
													</NumberInput>
												</Flex>
												<Flex //   book language
													mr="28px"
													alignItems="center"
												>
													<Text width="310px">
														زبان
													</Text>
													<RadioGroup
														onChange={setLanguage}
														value={language}
													>
														<Stack
															spacing={5}
															direction="row"
															wrap="wrap"
														>
															<Radio
																colorScheme="green"
																value="1"
															>
																فارسی
															</Radio>
															<Radio
																colorScheme="green"
																value="2"
															>
																انگلیسی
															</Radio>
															<Radio
																colorScheme="green"
																value="3"
															>
																عربی
															</Radio>
															<Radio
																colorScheme="green"
																value="4"
															>
																اسپانیایی
															</Radio>
															<Radio
																colorScheme="green"
																value="5"
															>
																چینی
															</Radio>
															<Radio
																colorScheme="green"
																value="6"
															>
																آلمانی
															</Radio>
															<Radio
																colorScheme="green"
																value="7"
															>
																فرانسوی
															</Radio>
															<Radio
																colorScheme="green"
																value="8"
															>
																ایتالیایی
															</Radio>
															<Radio
																colorScheme="green"
																value="9"
															>
																ترکی استانبولی
															</Radio>
														</Stack>
													</RadioGroup>
												</Flex>
												<Flex mr="28px">
													<Text width="300px">
														درباره کتاب
													</Text>
													<Textarea
														onChange={(e) => {
															setDescription(
																e.target.value
															);
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
															فایل اصلی کتاب را
															آپلود کنید.
															<span className="text-[14px] font-medium leading-[24px]">
																(حداکثر 40
																مگابایت)
															</span>
														</Text>
														<Flex
															flexDir="column"
															rowGap="10px"
															mr="23px"
														>
															<p className="text-[12px] font-light text-error">
																{!isValidOrginalFile
																	? "فرمت یا سایز فایل نادرست است."
																	: ""}
															</p>
															{orgFile &&
															isValidOrginalFile ? (
																<div className="w-[346px] h-[346px]">
																	<embed
																		src={
																			orgFile
																		}
																		type="application/pdf"
																		width="100%"
																		height="100%"
																	/>
																</div>
															) : (
																<label
																	className="cursor-pointer flex flex-col gap-y-[8px] justify-center items-center w-[342px] h-[342px] bg-[#C8C8C878] outline-[4px] outline-dashed outline-[#C8C8C8]  text-black text-center"
																	htmlFor="originalFile"
																>
																	<p className="text-[17px] font-semibold leading-[24px]">
																		برای
																		آپلود
																		کلیک
																		کنید.
																	</p>
																</label>
															)}
															<input
																onChange={(
																	e
																) => {
																	if (
																		validateFile(
																			e
																				.target
																				.files[0]
																		)
																	) {
																		onUploadFile(
																			e,
																			setOrgFile
																		);
																		setOrginalFile(
																			e
																				.target
																				.files[0]
																		);
																		setIsValidOrginalFile(
																			true
																		);
																	} else {
																		setIsValidOrginalFile(
																			false
																		);
																	}
																	setOrgFileValue(
																		e.target
																			.value
																	);
																}}
																id="originalFile"
																name="originalFile"
																type="file"
																className="hidden"
																accept="application/pdf"
																value={
																	orgFileValue
																}
															/>
														</Flex>
													</Flex>
													<Flex // book demo file
														mr="28px"
														justifyContent="flex-start"
														alignItems="center"
													>
														<Text width="200px">
															فایل دموی کتاب را
															آپلود کنید.
															<span className="text-[14px] font-medium leading-[24px]">
																(حداکثر 40
																مگابایت)
															</span>
														</Text>
														<Flex
															flexDir="column"
															rowGap="10px"
															mr="23px"
														>
															<span className="text-[12px] font-light text-error">
																{!isValidDemoFile
																	? "فرمت یا سایز فایل نادرست است."
																	: ""}
															</span>
															{demFile &&
															isValidDemoFile ? (
																<div className="w-[346px] h-[346px]">
																	<embed
																		src={
																			demFile
																		}
																		type="application/pdf"
																		width="100%"
																		height="100%"
																	/>
																</div>
															) : (
																<label
																	className="cursor-pointer flex flex-col gap-y-[8px] justify-center items-center w-[342px] h-[342px] bg-[#C8C8C878] outline-[4px] outline-dashed outline-[#C8C8C8]  text-black text-center"
																	htmlFor="demoFile"
																>
																	<p className="text-[17px] font-semibold leading-[24px]">
																		برای
																		آپلود
																		کلیک
																		کنید.
																	</p>
																</label>
															)}
															<input
																onChange={(
																	e
																) => {
																	if (
																		validateFile(
																			e
																				.target
																				.files[0]
																		)
																	) {
																		onUploadFile(
																			e,
																			setDemFile
																		);
																		setDemoFile(
																			e
																				.target
																				.files[0]
																		);
																		setIsValidDemoFile(
																			true
																		);
																	} else {
																		setIsValidDemoFile(
																			false
																		);
																	}
																	setDemoFileValue(
																		e.target
																			.value
																	);
																}}
																id="demoFile"
																name="demoFile"
																type="file"
																className="hidden"
																accept="application/pdf"
																value={
																	demoFileValue
																}
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
														عکس روی جلد کتاب را
														آپلود کنید.
													</Text>
													<Flex
														flexDir="column"
														rowGap="10px"
														mr="23px"
													>
														<p className="text-[12px] font-light text-error">
															{!isValidCoverImage
																? "فرمت یا سایز فایل نادرست است."
																: ""}
														</p>
														{coverImg &&
														isValidCoverImage ? (
															<div className="w-[346px] h-[346px]">
																<img
																	className="w-[346px] h-[346px] object-fill"
																	src={
																		coverImg
																	}
																/>
															</div>
														) : (
															<label
																className="cursor-pointer flex flex-col gap-y-[8px] justify-center items-center w-[342px] h-[342px] bg-[#C8C8C878] outline-[4px] outline-dashed outline-[#C8C8C8]  text-black text-center"
																htmlFor="coverImage"
															>
																<p className="text-[20px] font-semibold leading-[24px]">
																	برای آپلود
																	کلیک کنید.
																</p>
																<p className="text-[14px] font-medium leading-[24px]">
																	(حداکثر 8
																	مگابایت)
																</p>
															</label>
														)}
														<input
															onChange={(e) => {
																if (
																	validatePic(
																		e.target
																			.files[0]
																	)
																) {
																	onUploadLogoImage(
																		e
																	);
																	setCoverImage(
																		e.target
																			.files[0]
																	);
																	setIsValidCoverImage(
																		true
																	);
																} else {
																	setIsValidCoverImage(
																		false
																	);
																}
																setCoverValue(
																	e.target
																		.value
																);
															}}
															id="coverImage"
															name="coverImage"
															type="file"
															className="hidden"
															accept=".jpeg,.jpg,.png"
															value={coverValue}
														/>
													</Flex>
												</Flex>
											</Flex>
										</form>
									</Flex>
								</CardBody>
								<CardFooter justifyContent="center">
									<Button
										onClick={submitHandler}
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
