import styled from 'styled-components';

const CardContainer = styled.div`
	width: 350px;

	padding: 48px 24px;
	margin-left: auto;
	margin-right: auto;
	background-color: #ffffff;
	border-radius: 24px 24px 100px 24px;
`;
const FormContainer = styled.div`
	display: flex;
	gap: 1rem;
	margin-bottom: 1rem;
`;
const StyledFormField = styled.div``;

const FormLabel = styled.label``;

const FormInput = styled.input`
	height: 3.375rem;
	width: 5.625rem;
`;

const Info = styled.p`
	font-size: 3.5rem;
`;
const ArrowButton = styled.div`
	display: flex;
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
	ArrowButton
};
