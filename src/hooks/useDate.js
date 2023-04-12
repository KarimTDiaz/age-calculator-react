import { useState } from 'react';

export const useDate = () => {
	const [date, setDate] = useState({
		month: 0,
		day: 0,
		year: 0
	});

	const inputDay = ev => {
		setDate({ ...date, day: ev });
	};
	const inputMonth = ev => {
		setDate({ ...date, month: ev });
	};
	const inputYear = ev => {
		setDate({ ...date, year: ev });
	};
	const dateToPrint = () => {
		const birthday = new Date(`${date.month}/${date.day}/${date.year}`);
		const now = new Date();
		const totalDays = diferenceBetweenDates(now, birthday);
		const totalTime = convertDays(totalDays);
		setDate({
			day: totalTime.days,
			month: totalTime.months,
			year: totalTime.years
		});
	};
	return { inputDay, inputMonth, inputYear, dateToPrint, date };
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
