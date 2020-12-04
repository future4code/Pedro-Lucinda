import React from "react";
import { Container, Text, User, Votes } from "./style";

const Comment = (props) => {
	return (
		<Container style={{display: props.display}}>
			<User> {props.userName} </User>
			<Text> {props.text} </Text>
			<Votes>
				<p>{props.votesCount}</p>
			</Votes>
		</Container>
	);
};

export default Comment;
