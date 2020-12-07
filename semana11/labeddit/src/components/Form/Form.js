import styled from "styled-components";

export const Input = styled.input`
	outline: none;
	border: 1px solid var(--primary);
	border-radius: 10px;

	color: var(--primary);
	font-size: 0.7rem;

	padding: 10px;

	min-width: 300px;
	max-width: 350px;

	background: var(--bg);
`;

export const SendBtn = styled.button`
	min-width: 100px;
	height: 40px;
	background-color: var(--red);

	color: var(--primary);
	font-size: 1rem;

	outline: none;
	border: none;
	border-radius: 10px;
	box-shadow: none;

	margin-top: 30px;

	padding: 5px 10px 10px 10px;

	&:hover {
		background-color: var(--primary);
		color: var(--red);
		transition: ease-in-out 0.2s;
	}
`;

export const FormContainer = styled.form`
	max-width: 600px;
	min-width: 350px;

	min-height: 500px;
	max-height: 600px;

	border: 1px solid var(--primary);

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	padding: 20px 20px 50px 20px;
`;

export const FormWrapper = styled.div`
	width: 100vw;
	height: 100vh;

	display: flex;
	align-items: center;
	justify-content: center;
`;

export const H4 = styled.h4`
	margin: 10px 0;
	font-size: 1rem;
	font-weight: bold;
	text-align: left;
	color: var(--primary);
`;

export const Title = styled.h1`
	font-size: 2rem;
	font-weight: bold;

	color: var(--primary);

	margin: 20px 0;
`;

export const Img = styled.img`
	width: 50px;
	height: 50px;

	&:hover {
		cursor: pointer;
	}
`;

export const A = styled.p`
	text-decoration: none;
	color: var(--primary);
	font-size: 0.7rem;
	font-weight: bold;
	margin-top: 10px;

	&:hover {
		color: var(--red);
		cursor: pointer;
	}
`;
