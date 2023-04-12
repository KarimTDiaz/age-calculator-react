import { useState } from 'react';
import {
	CardContainer,
	FormContainer,
	FormInput,
	FormLabel,
	StyledFormField,
	Info,
	ArrowButton,
	InfoNumber
} from './styles';
import { useDate } from '../../hooks/useDate';

const Card = () => {
	const [print, setPrint] = useState(false);
	const { inputDay, inputMonth, inputYear, dateToPrint, date } = useDate();

	return (
		<CardContainer>
			<FormContainer>
				<StyledFormField>
					<FormLabel>DAY</FormLabel>
					<FormInput onChange={ev => inputDay(ev.target.value)}></FormInput>
				</StyledFormField>
				<StyledFormField>
					<FormLabel>MONTH</FormLabel>
					<FormInput onChange={ev => inputMonth(ev.target.value)}></FormInput>
				</StyledFormField>
				<StyledFormField>
					<FormLabel>YEAR</FormLabel>
					<FormInput onChange={ev => inputYear(ev.target.value)}></FormInput>
				</StyledFormField>
			</FormContainer>
			<ArrowButton
				onClick={() => {
					dateToPrint();
					setPrint(!print);
				}}
			>
				<img src='/public/icon-arrow.svg' alt='' />
			</ArrowButton>
			<Info>
				<InfoNumber>{print ? date.year : '--'}</InfoNumber>
				YEARS
			</Info>
			<Info>
				<InfoNumber>{print ? date.month : '--'}</InfoNumber> MONTHS
			</Info>
			<Info>
				<InfoNumber>{print ? date.day : '--'}</InfoNumber> DAYS
			</Info>
		</CardContainer>
	);
};

// const inputDate = (key, value, date, setDate) => {
// 	setDate({ ...date, [key]: value });
// };

export default Card;
