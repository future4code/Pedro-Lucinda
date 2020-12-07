import React from "react";
//routes
import { useHistory } from "react-router-dom";
//styles
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
//services
import api from "../../services/api";
//hooks
import { useForm } from "../../hooks/useForm";

const Login = () => {
	const [form, onChangeInput] = useForm({
		email: "",
		password: "",
	});

	const history = useHistory();

	function handleLogin(e) {
		e.preventDefault();

		const body = {
			email: form.email,
			password: form.password,
		};

		api
			.post(`/login`, body)
			.then((response) => {
				localStorage.setItem("token", response.data.token);
				history.push("/timeline");
			})
			.catch((error) => {
				alert("Please verify our info and try again.");
				console.log(error);
			});
	}
	return (
		<FormWrapper>
			<FormContainer onSubmit={handleLogin}>
				<Img
					src="https://logodownload.org/wp-content/uploads/2018/02/reddit-logo-16.png"
					alt="Logo"
				/>
				<Title> Login </Title>
				<H4> Email </H4>
				<Input
					type={"email"}
					label={"E-mail"}
					name={"email"}
					value={form["email"]}
					onChange={onChangeInput}
				/>
				<H4> Password </H4>
				<Input
					label={"Password"}
					type={"password"}
					onChange={onChangeInput}
					value={form["password"]}
					name={"password"}
				/>
				<SendBtn> Login </SendBtn>
				<A onClick={() => history.push("/register")}>Or Register</A>
			</FormContainer>
		</FormWrapper>
	);
};

export default Login;
