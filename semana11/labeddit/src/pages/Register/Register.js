import React from "react";
import {
	FormContainer,
	FormWrapper,
	Img,
	Input,
	SendBtn,
	Title,
	H4,
} from "../../components/Form/Form";
import Logo from "../../assets/logo.png";

const Register = () => {
	return (
		<FormWrapper>
			<FormContainer>
				<Img src={Logo} alt="Logo" />
				<Title> Register </Title>
				<H4> Name </H4>
				<Input value onChange name type />
				<H4> Email </H4>
				<Input value onChange name type />
				<H4> Password </H4>
				<Input value onChange name type />
				<SendBtn> Register </SendBtn>
			</FormContainer>
		</FormWrapper>
	);
};

export default Register;
