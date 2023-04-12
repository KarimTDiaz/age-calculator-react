import styled from 'styled-components';

const CardContainer = styled.div`
	width: 400px;
	padding: 48px 24px;
	margin-left: auto;
	margin-right: auto;
	background-color: #ffffff;
	border-radius: 24px 24px 100px 24px;
`;
const FormContainer = styled.div`
	display: flex;
	gap: 1rem;
	position: relative;
	margin-bottom: 2rem;
	&::after {
		content: '';
		position: absolute;
		bottom: -70px;
		height: 1px;
		width: 100%;
		background-color: grey;
	}
`;
const StyledFormField = styled.div``;

const FormLabel = styled.label``;

const FormInput = styled.input`
	height: 3.375rem;
	width: 5.625rem;
`;

const Info = styled.p`
	font-size: 3.5rem;
	font-weight: 800;
	font-style: italic;
`;

const InfoNumber = styled.span`
	display: inline-block;
	width: 75px;
	font-size: 3.5rem;
	font-weight: 800;
	font-style: italic;
	color: #854dff;
`;
const ArrowButton = styled.div`
	display: flex;
	position: relative;
	margin-left: auto;
	margin-right: auto;
	width: 80px;
	height: 80px;
	padding: 1rem;
	border-radius: 50%;
	background-color: #854dff;
`;
export {
	StyledFormField,
	FormLabel,
	FormInput,
	FormContainer,
	CardContainer,
	Info,
	ArrowButton,
	InfoNumber
};
