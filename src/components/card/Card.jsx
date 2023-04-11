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

const date = new Date();
const getMonth = date.getMonth();
const getFullYear = date.getFullYear();
const getDay = date.getDate();

const Card = () => {
	const [month, setMonth] = useState(getMonth);
	const [year, setYear] = useState(getFullYear);
	const [day, setDay] = useState(getDay);

	return (
		<CardContainer>
			<FormContainer>
				<StyledFormField>
					<FormLabel>DAY</FormLabel>
					<FormInput onChange={ev => setDay(ev.target.value)}></FormInput>
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
			<ArrowButton onClick={() => setDate(day, month, year)}>
				<img src='/public/icon-arrow.svg' alt='' />
			</ArrowButton>
			<Info>{year} YEARS</Info>
			<Info>{month} MONTHS</Info>
			<Info>{day} DAYS</Info>
		</CardContainer>
	);
};

const setDate = (day, month, year) => {
	const customDate = new Date(day, month, year);
	console.log(customDate);
};

export default Card;
