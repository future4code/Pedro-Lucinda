import styled from "styled-components";

export const Search = styled.input`
	max-width: 700px;
	min-width: 300px;
	height: 30px;
	margin: 0 10px;

	border: 1px solid var(--light-bg);
	border-radius: 10px;

	color: var(--primary);
	font-size: 0.7rem;
	padding: 5px 15px;

	background: var(--light-bg);
`;

export const WrapperNav = styled.div`
	width: 100vw;
	height: 50px;

	margin-top: 10px;

	background: var(--lighter-bg);

	color: var(--primary);
	font-size: 1rem;
	font-weight: bold;
	padding: 10px 40px;

	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const LogoImg = styled.img`
	width: 40px;
	height: 40pxinks;
`;

export const Links = styled.p`
	font-size: 0.7rem;
	font-weight: 600;
	color: var(--primary);

	&:hover {
		cursor: pointer;
		color: var(--red);
	}
`;
