import styled from "styled-components";

export const Container = styled.div`
	width: 500px;
	max-height: 500px;
	min-height: 300px;
	max-height: 500px;

	margin: 50px auto;

	background: var(--light-bg);

	color: var(--primary);
	font-size: 1.4rem;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;

	button {
		margin: 15px;
	}

	&:hover {
		border: 1px solid var(--primary);
	}
`;

export const TextArea = styled.textarea`
	width: 100%;
	height: 300px;
	margin-bottom: 15px;
	background: var(--lighter-bg);
	padding: 20px;

	color: var(--primary);
	font-size: 1rem;
`;
