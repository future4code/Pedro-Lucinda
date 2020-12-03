import React from "react";
import { SendBtn } from "../Form/Form";
import { Container, TextArea } from "./style";

const CreatePost = (props) => {
	return (
		<Container>
			<TextArea name={props.name} value={props.value} required />
			<SendBtn onClick={props.onClick}> Post </SendBtn>
		</Container>
	);
};

export default CreatePost;
