import { useState } from 'react';
import {
	CardContainer,
	FormContainer,
	FormInput,
	FormLabel,
	StyledFormField,
	Info,
	ArrowButton
} from './styles';

const Card = () => {
	const [month, setMonth] = useState();
	const [year, setYear] = useState();
	const [day, setDay] = useState();
	const [print, setPrint] = useState(false);
	const [date, setDate] = useState({
		month: 0,
		day: 0,
		year: 0
	});

	return (
		<CardContainer>
			<FormContainer>
				<StyledFormField>
					<FormLabel>DAY</FormLabel>
					<FormInput onChange={inputValue}></FormInput>
				</StyledFormField>
				<StyledFormField>
					<FormLabel>MONTH</FormLabel>
					<FormInput onChange={ev => setMonth(ev.target.value)}></FormInput>
				</StyledFormField>
				<StyledFormField>
					<FormLabel>YEAR</FormLabel>
					<FormInput onChange={ev => setYear(ev.target.value)}></FormInput>
				</StyledFormField>
			</FormContainer>
			<ArrowButton
				onClick={() => {
					dateToPrint(month, setMonth, day, setDay, year, setYear);
					setPrint(!print);
				}}
			>
				<img src='/public/icon-arrow.svg' alt='' />
			</ArrowButton>
			<Info>{print ? year : '0'} YEARS</Info>
			<Info>{print ? month : '0'} MONTHS</Info>
			<Info>{print ? day : '0'} DAYS</Info>
		</CardContainer>
	);
};

const convertDays = days => {
	const years = Math.floor(days / 365);
	days = days % 365;
	let months = Math.floor(days / 30);
	days = days % 30;

	const dateTemp = new Date();
	dateTemp.setDate(dateTemp.getDate() + days);
	const lastDayOfMonth = new Date(
		dateTemp.getFullYear(),
		dateTemp.getMonth() + 1,
		0
	).getDate();
	if (days > lastDayOfMonth) {
		days -= lastDayOfMonth;
		months++;
	}

	return { years, months, days };
};

const diferenceBetweenDates = (now, birthday) => {
	const milisecondsPerDay = 86400000;
	const milisecondsBetweenDays = now - birthday;
	const diferenceInDays = Math.floor(
		milisecondsBetweenDays / milisecondsPerDay
	);

	return diferenceInDays;
};

const dateToPrint = (month, setMonth, day, setDay, year, setYear) => {
	const birthday = new Date(`${month}/${day}/${year}`);
	const now = new Date();
	const totalDays = diferenceBetweenDates(now, birthday);
	const totalTime = convertDays(totalDays);
	setDay(totalTime.days);
	setMonth(totalTime.months);
	setYear(totalTime.years);
};

const inputValue = (typeOfDate, value) => {
	setDate(`{${typeOfDate}: ${value}}`);
};
export default Card;
