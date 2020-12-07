import React from "react";
import Down from "../Icons/Down";
import Up from "../Icons/Up";
import { BottomBar } from "../Post/style";
import { Container, Text, User, Votes } from "./style";

const Comment = (props) => {
	return (
		<Container>
			<User> {props.userName} </User>
			<Text> {props.text} </Text>
			<BottomBar>
				<Votes>
					<Up onClickUp={props.onClickUp} />
					<p>{props.votesCount}</p>
					<Down onClickDown={props.onClickDown} />
				</Votes>
			</BottomBar>
		</Container>
	);
};

export default Comment;
