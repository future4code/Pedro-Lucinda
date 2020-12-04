import React from "react";
import { SendBtn } from "../Form/Form";
import { Container, TextArea, Title } from "./style";

const CreatePost = (props) => {
	return (
		<Container>
			<Title
				placeHolder="Title"
				value={props.titleValue}
				onChange={props.onChangeTitle}
			/>
			<TextArea
				placeHolder="Post"
				onChange={props.onChangeBody}
				value={props.value}
				required
			/>
			<SendBtn onClick={props.onClick}> Post </SendBtn>
		</Container>
	);
};

export default CreatePost;
