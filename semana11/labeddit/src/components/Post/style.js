import styled from "styled-components";

export const PostContainer = styled.div`
	width: 350px;
	max-height: 400px;
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

	&:hover {
		border: 1px solid var(--primary);
	}
`;

export const UserName = styled.div`
	height: 50px;
	width: 100%;
	border: 1px solid var(--lighter-bg);

	margin-bottom: 30px;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	p {
		color: var(--primary);
		font-size: 1rem;
		font-weight: bold;
	}
`;

export const PostContent = styled.div`
	width: 100%;
	height: 250px;
	max-height: 400px;

	padding: 20px;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	overflow: scroll;

	text-align: center;

	h4 {
		height: 30%;
	}

	p {
		color: var(--primary);
		font-size: 1.2rem;
		font-weight: 500;
		height: 70%;
		text-align: center;

		margin-top: 20px;
	}
`;

export const BottomBar = styled.div`
	width: 100%;
	height: 50px;

	border: 1px solid var(--lighter-bg);
	padding: 20px;

	display: flex;
	align-items: center;
	justify-content: space-between;

	div {
		max-width: 100px;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	p {
		font-size: 0.7rem;
	}

	img {
		width: 30px;
		height: 30px;
		margin: 0 10px;

		&:hover {
			cursor: pointer;
		}
	}
`;

export const Comments = styled.div`
	width: 100%;
	height: 50px;
`;
