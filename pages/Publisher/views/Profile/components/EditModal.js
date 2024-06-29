import {
	Box,
	Button,
	Card,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
} from "@chakra-ui/react";
import CustomInput from "@/src/components/ui/login-submit/CustomInput";
import CustomCardHeader from "@/src/components/ui/login-submit/CustomCard/CustomCardHeader";
import CustomInputLabel from "@/src/components/ui/login-submit/CustomInputLabel";
import { Formik, Form} from "formik";
import * as Yup from "yup";
import { Flex } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import ChangePass from "./changepass";
// import useChangePublisherProfile from "@/src/react-query/hooks/useChangePublisherProfile";

const EditModal = ({ edit, isOpen, onClose }) => {
	// const { mutate, isLoading, error } = useChangePublisherProfile();

	const [logoImg, setLogoImg] = useState("");
	const [logoImage, setLogoImage] = useState(null);
	const [isValidLogoImage, setIsValidLogoImage] = useState(true);
	const [inputValue, setInputValue] = useState("");

	useEffect(() => {
		if (!isOpen) {
			setLogoImg("");
			setLogoImage(null);
			setIsValidLogoImage(true);
			setInputValue("");
		}
	}, [isOpen]);

	function validateFile(file) {
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
			convert2base64(e.target.files[0], setLogoImg);
		}
	};

	function submitHandler(e) {
		console.log("function ok");
		e.preventDefault();
		if (logoImage && isValidLogoImage) {
			const formData = new FormData();
			formData.append("publications_image", logoImage);
			for (const pair of formData.entries()) {
				console.log(pair[0], pair[1]);
			}
			console.log(formData.values);
			mutate(formData, {
				onSuccess: () => {
					window.location.reload();
				},
			});
			console.log("mutate ok");
			onClose();
		}
	}

	return (
		<>
			{edit == "Pass" && (
				<Modal size="full" isOpen={isOpen} onClose={onClose}>
					<ModalOverlay />
					<ModalContent width="900px">
						<ModalHeader
							style={{
								marginRight: "40px",
								marginTop: "50px",
							}}
						>
							تغییر رمز عبور
						</ModalHeader>
						<ModalCloseButton
							style={{
								marginTop: "60px",
							}}
						/>
						<ModalBody maxHeight="400px">
							<ChangePass />
						</ModalBody>

						<ModalFooter
							mt="50px"
							onClick={() => {
								onClose();
							}}
						>
							<Button colorScheme="blue" mr={3} onClick={onClose}>
								بستن
							</Button>
						</ModalFooter>
					</ModalContent>
				</Modal>
			)}
			{edit == "Address" && (
				<Modal isOpen={isOpen} onClose={onClose}>
					<ModalOverlay />
					<ModalContent>
						<ModalHeader
							style={{
								marginRight: "40px",
							}}
						>
							تغییر آدرس
						</ModalHeader>
						<ModalCloseButton />
						<ModalBody>
							<Formik
								initialValues={{
									city: "",
									street: "",
									moreAddressInfo: "",
								}}
								onSubmit={(values) => {
									mutate({
										address:
											values.city +
											values.street +
											values.moreAddressInfo,
									});
								}}
							>
								{(formik) => (
									<Form className="flex flex-col ">
										<Card>
											<CustomCardHeader>
												آدرس
											</CustomCardHeader>

											<CustomInputLabel htmlFor="city">
												شهر{" "}
												<span className="text-gray-400">
													{" "}
													(اختیاری)
												</span>
											</CustomInputLabel>
											<CustomInput
												name="city"
												type="text"
											/>
											<CustomInputLabel htmlFor="street">
												خیابان
												<span className="text-gray-400">
													{" "}
													(اختیاری)
												</span>
											</CustomInputLabel>
											<CustomInput
												name="street"
												type="text"
											/>
											<CustomInputLabel htmlFor=" moreAddressInfo">
												کوچه/ساختمان/پلاک
												<span className="text-gray-400">
													{" "}
													(اختیاری)
												</span>
											</CustomInputLabel>
											<CustomInput
												name="moreAddressInfo"
												type="text"
											/>
										</Card>
										<Button
											variant="ghost"
											onClick={() => {
												onClose();
												formik.handleSubmit();
											}}
										>
											تغییر
										</Button>
										<Button
											colorScheme="blue"
											mr={3}
											onClick={onClose}
										>
											بستن
										</Button>
									</Form>
								)}
							</Formik>
						</ModalBody>
					</ModalContent>
				</Modal>
			)}
			{edit == "PhoneNo2" && (
				<Modal isOpen={isOpen} onClose={onClose}>
					<ModalOverlay />
					<ModalContent>
						<ModalHeader
							style={{
								marginRight: "40px",
							}}
						>
							تغییر شماره تلفن 2
						</ModalHeader>
						<ModalCloseButton />
						<ModalBody>
							<Formik
								initialValues={{
									phoneNumber2: "",
								}}
								validationSchema={Yup.object({
									phoneNumber: Yup.string().matches(
										/^09\d{9}$/,
										"شماره تلفن باید با 09 شروع شده و دارای 11 رقم باشد."
									),
								})}
								onSubmit={(values) => {
									mutate({
										phone_number2: values.phoneNumber2,
									});
								}}
							>
								{(formik) => (
									<Form className="flex flex-col ">
										<Card>
											<CustomInputLabel htmlFor="phoneNumber2">
												شماره تلفن
											</CustomInputLabel>
											<CustomInput
												name="phoneNumber2"
												type="tel"
												validation={true}
												error={
													formik.errors.phoneNumber2
												}
												touched={
													formik.touched.phoneNumber2
												}
											/>
										</Card>
										<Button
											variant="ghost"
											onClick={() => {
												onClose();
												formik.handleSubmit();
											}}
										>
											تغییر
										</Button>
										<Button
											colorScheme="blue"
											mr={3}
											onClick={onClose}
										>
											بستن
										</Button>
									</Form>
								)}
							</Formik>
						</ModalBody>
					</ModalContent>
				</Modal>
			)}
			{edit == "Logo" && (
				<Modal isOpen={isOpen} onClose={onClose}>
					<ModalOverlay />
					<ModalContent>
						<ModalHeader
							style={{
								marginRight: "40px",
							}}
						>
							تغییر لوگو
						</ModalHeader>
						<ModalCloseButton />
						<ModalBody>
							<form className="flex gap-y-[30px]">
								<Flex
									mr="28px"
									justifyContent="center"
									alignItems="center"
								>
									<Flex flexDir="column" rowGap="10px">
										<p className="text-[12px] font-light text-error">
											{!isValidLogoImage
												? "فرمت یا سایز فایل نادرست است."
												: ""}
										</p>
										{logoImg && isValidLogoImage ? (
											<div className="w-[346px] h-[346px]">
												<img
													className="w-[346px] h-[346px] object-fill"
													src={logoImg}
												/>
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
											onChange={(e) => {
												if (
													validateFile(
														e.target.files[0]
													)
												) {
													onUploadLogoImage(e);
													setLogoImage(
														e.target.files[0]
													);
													setIsValidLogoImage(true);
												} else {
													setIsValidLogoImage(false);
												}
												setInputValue(e.target.value);
											}}
											id="logoImage"
											name="logoImage"
											type="file"
											className="hidden"
											accept=".jpeg,.jpg,.png"
											value={inputValue}
										/>
									</Flex>
								</Flex>
							</form>
						</ModalBody>

						<ModalFooter>
							<Button variant="ghost" onClick={submitHandler}>
								تغییر
							</Button>
							<Button colorScheme="blue" mr={3} onClick={onClose}>
								بستن
							</Button>
						</ModalFooter>
					</ModalContent>
				</Modal>
			)}
		</>
	);
};

export default EditModal;
