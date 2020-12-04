import styled from "styled-components";

export const Container = styled.div`
	width: 350px;
	min-height: 300px;
	max-height: 400px;

	overflow: auto;

	background: var(--light-bg);

	color: var(--primary);
	font-size: 1.2rem;

	display: flex;
	flex-direction: column;
	align-items: center;

	&:hover {
		border: 1px solid var(--primary);
	}
`;

export const User = styled.h1`
	font-size: 1.3rem;
	color: var(--primary);
	margin: 20px;
`;

export const Text = styled.p`
	font-size: 1rem;
	color: var(--primary);
	margin: 10px;
`;

export const Votes = styled.div`
	width: 100%;
	height: 50px;

	display: flex;
	align-items: center;
	border: var(--lighter-bg);
	padding: 20px;
`;
