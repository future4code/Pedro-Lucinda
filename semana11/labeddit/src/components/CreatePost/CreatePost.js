import React from "react";
import { SendBtn } from "../Form/Form";
import { Container, TextArea, Title } from "./style";

const CreatePost = (props) => {
	return (
		<Container>
			<Title
				placeholder="Post`s title"
				value={props.titleValue}
				onChange={props.onChangeTitle}
			/>
			<TextArea
				placeholder="Write your post here..."
				onChange={props.onChangeBody}
				value={props.value}
				required
			/>
			<SendBtn onClick={props.onClick}> Post </SendBtn>
		</Container>
	);
};

export default CreatePost;
