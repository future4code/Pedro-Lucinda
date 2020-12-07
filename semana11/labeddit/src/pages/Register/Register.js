import React from "react";
//styles
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
//hooks
import { useForm } from "../../hooks/useForm";
//routes
import { useHistory } from "react-router-dom";
//services
import api from "../../services/api";

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
				<Img
					src="https://logodownload.org/wp-content/uploads/2018/02/reddit-logo-16.png"
					alt="Logo"
				/>
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

				<SendBtn> Register </SendBtn>

				<A onClick={() => history.push("/")}>Or Login </A>
			</FormContainer>
		</FormWrapper>
	);
};

export default Register;
