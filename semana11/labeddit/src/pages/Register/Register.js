import React from "react";
import api from "../../services/api";
import {
	FormContainer,
	FormWrapper,
	Img,
	Input,
	SendBtn,
	Title,
	H4,
	A,
} from "../../components/Form/Form";
import Logo from "../../assets/logo.png";
import { useForm } from "../../hooks/useForm";
import { useHistory } from "react-router-dom";

const Register = () => {
	const [form, onChangeInput] = useForm({
		name: "",
		email: "",
		password: "",
	});

	const history = useHistory();

	function handleRegister(e) {
		e.preventDefault();

		const body = {
			username: form.name,
			email: form.email,
			password: form.password,
		};

		api
			.post(`/signup`, body)
			.then((response) => {
				localStorage.setItem("token", response.data.token);
				localStorage.setItem("user", response.data.user);
				history.push("/");
			})
			.catch((error) => {
				alert("Please verify our info and try again.");
				console.log(error);
			});
	}

	return (
		<FormWrapper>
			<FormContainer onSubmit={handleRegister}>
				<Img src={Logo} alt="Logo" />
				<Title> Register </Title>

				<H4> Name </H4>
				<Input
					value={form["name"]}
					onChange={onChangeInput}
					name={"name"}
					type={"text"}
					label={"Name"}
				/>

				<H4> Email </H4>
				<Input
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

				<SendBtn> Register </SendBtn>

				<A onClick={() => history.push("/")}>Or Login </A>
			</FormContainer>
		</FormWrapper>
	);
};

export default Register;
