import React from "react";
import { Container } from "../Comment/style";
import { TextArea } from "../CreatePost/style";
import { SendBtn } from "../Form/Form";

const CreateComment = (props) => {
	return (
		<Container style={{ margin: "50px auto" }}>
			<TextArea
				placeholder="Write your comment here..."
				onChange={props.onChangeComment}
				value={props.value}
				required
			/>
			<div
				style={{
					display: "flex",
					alignItems: "center",
				}}
			>
				<SendBtn onClick={props.onClick}> Comment </SendBtn>
			</div>
		</Container>
	);
};

export default CreateComment;
