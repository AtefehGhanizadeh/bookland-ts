import React, { useEffect, useState } from "react";
import { Input, FormLabel, Flex, Box, Button } from "@chakra-ui/react";
import { Select } from "@chakra-ui/react";

const TimeSelectionTable = ({
	startDate,
	endDate,
	setStartDate,
	setEndDate,
	setTimeCondition,
	data,
}) => {
	useEffect(() => {
		validateDate();
	}, []);

	function findMinDate(dates) {
		if (!Array.isArray(dates) || dates.length === 0) {
			return null;
		}

		let minDate = dates[0];

		for (let i = 1; i < dates.length; i++) {
			if (dates[i] < minDate) {
				minDate = dates[i];
			}
		}

		return minDate;
	}

	function findMaxDate(dates) {
		if (!Array.isArray(dates) || dates.length === 0) {
			return null;
		}

		let minDate = dates[0];

		for (let i = 1; i < dates.length; i++) {
			if (dates[i] > minDate) {
				minDate = dates[i];
			}
		}

		return minDate;
	}

	const prestartYear = new Date(
		findMinDate(data.data.map((row) => new Date(row.createddate)))
	).toLocaleDateString("fa-IR", {
		year: "numeric",
		numberingSystem: "latn",
	});
	const preendyear = new Date(
		findMaxDate(data.data.map((row) => new Date(row.createddate)))
	).toLocaleDateString("fa-IR", {
		year: "numeric",
		numberingSystem: "latn",
	});
	const minYear = String(prestartYear);
	const maxYear = String(preendyear);

	const [startYear, setStartYear] = useState(minYear);
	const [startMonth, setStartMonth] = useState("1");
	const [startDay, setStartDay] = useState("1");
	const [endYear, setEndYear] = useState(maxYear);
	const [endMonth, setEndMonth] = useState("1");
	const [endDay, setEndDay] = useState("1");

	const handleStartYearChange = (event) => {
		setStartYear(event.target.value);
	};

	const handleStartMonthChange = (event) => {
		setStartMonth(event.target.value);
	};

	const handleStartDayChange = (event) => {
		setStartDay(event.target.value);
	};
	const handleEndYearChange = (event) => {
		setEndYear(event.target.value);
	};

	const handleEndMonthChange = (event) => {
		setEndMonth(event.target.value);
	};

	const handleEndDayChange = (event) => {
		setEndDay(event.target.value);
	};

	const validateDate = () => {
		const newStartDate = `${startYear}-${startMonth.padStart(
			2,
			"0"
		)}-${startDay.padStart(2, "0")}`;
		setStartDate(newStartDate);
		const newEndDate = `${endYear}-${endMonth.padStart(
			2,
			"0"
		)}-${endDay.padStart(2, "0")}`;
		setEndDate(newEndDate);

		console.log(startDate);
		console.log(endDate);

		if (startDate > endDate) {
			alert("Start date must be before end date");
			return false;
		} else {
			return true;
		}
	};

	const months = [
		"فروردین",
		"اردیبهشت",
		"خرداد",
		"تیر",
		"مرداد",
		"شهریور",
		"مهر",
		"آبان",
		"آذر",
		"دی",
		"بهمن",
		"اسفند",
	];

	const getDaysInMonth = (monthIndex, startYear) => {
		if (monthIndex === 11) {
			if ((parseInt(startYear, 10) - 1403) % 4 == 0) {
				return Array.from({ length: 30 }, (_, i) => i + 1);
			} else {
				return Array.from({ length: 29 }, (_, i) => i + 1);
			}
		} else if (monthIndex >= 0 && monthIndex <= 6) {
			return Array.from({ length: 31 }, (_, i) => i + 1);
		} else if (monthIndex >= 7 && monthIndex <= 10) {
			return Array.from({ length: 30 }, (_, i) => i + 1);
		} else {
			return [];
		}
	};

	const generateYearOptions = (start, end) => {
		const startYearNum = parseInt(start, 10);
		const endYearNum = parseInt(end, 10);
		const years = [];

		for (let i = startYearNum; i <= endYearNum; i++) {
			years.push(i.toString());
		}

		return years;
	};

	return (
		<>
			<div>
				<Flex direction="column" gap="1">
					<Flex direction="row-reverse">
						<FormLabel
							marginLeft="15px"
							htmlFor="startDate"
							fontSize="md"
							width="100px"
						>
							شروع
						</FormLabel>
						<Flex flexDir="row-reverse" gap="3">
							<Select
								width="100px"
								value={startYear}
								onChange={handleStartYearChange}
							>
								{generateYearOptions(minYear, maxYear).map(
									(year) => (
										<option key={year} value={year}>
											{year}
										</option>
									)
								)}
							</Select>

							<Select
								width="100px"
								value={startMonth}
								onChange={handleStartMonthChange}
							>
								{months.map((month, index) => (
									<option
										key={index}
										value={(index + 1).toString()}
									>
										{month}
									</option>
								))}
							</Select>

							<Select
								width="100px"
								value={startDay}
								onChange={handleStartDayChange}
							>
								{getDaysInMonth(
									parseInt(startMonth, 10) - 1,
									startYear
								).map((day) => (
									<option key={day} value={day.toString()}>
										{day}
									</option>
								))}
							</Select>
						</Flex>
					</Flex>
					<Flex direction="row-reverse">
						<FormLabel
							marginLeft="15px"
							htmlFor="EndDate"
							fontSize="md"
							width="100px"
						>
							پایان
						</FormLabel>
						<Flex flexDir="row-reverse" gap="3">
							<Select
								width="100px"
								value={endYear}
								onChange={handleEndYearChange}
							>
								{generateYearOptions(minYear, maxYear).map(
									(year) => (
										<option key={year} value={year}>
											{year}
										</option>
									)
								)}
							</Select>

							<Select
								width="100px"
								value={endMonth}
								onChange={handleEndMonthChange}
							>
								{months.map((month, index) => (
									<option
										key={index}
										value={(index + 1).toString()}
									>
										{month}
									</option>
								))}
							</Select>

							<Select
								width="100px"
								value={endDay}
								onChange={handleEndDayChange}
							>
								{getDaysInMonth(
									parseInt(endMonth, 10) - 1,
									endYear
								).map((day) => (
									<option key={day} value={day.toString()}>
										{day}
									</option>
								))}
							</Select>
						</Flex>
					</Flex>
					<Flex gap="4%">
						<Button
							colorScheme="blue"
							width="34%"
							onClick={() => {
								validateDate();
								setTimeCondition(true);
							}}
						>
							فیلتر
						</Button>
						<Button
							width="34%"
							onClick={() => {
								setTimeCondition(false);
							}}
						>
							پاک کردن
						</Button>
					</Flex>
				</Flex>
			</div>
		</>
	);
};

export default TimeSelectionTable;
