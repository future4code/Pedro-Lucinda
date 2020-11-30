import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import {
	Input,
	H4,
	FormContainer,
	Title,
	Img,
	FormWrapper,
	SendBtn,
	A,
} from "../../components/Form/Form";

const Login = () => {
	return (
		<FormWrapper>
			<FormContainer>
				<Img src={Logo} alt="Logo" />
				<Title> Login </Title>
				<H4> Email </H4>
				<Input value onChange name type />
				<H4> Password </H4>
				<Input value onChange name type />
				<SendBtn> Login </SendBtn>
				<Link path="/register">
					<A> Or register </A>
				</Link>
			</FormContainer>
		</FormWrapper>
	);
};

export default Login;
