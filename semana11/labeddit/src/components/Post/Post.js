import React from "react";
import { BottomBar, PostContainer, PostContent, UserName } from "./style";
import Up from "../Icons/Up";
import Down from "../Icons/Down";

const Post = (props) => {
	return (
		<PostContainer>
			<UserName>
				<p> {props.userName} </p>
			</UserName>
			<PostContent>
				<h4> {props.title} </h4>
				<p>{props.content}</p>
			</PostContent>
			<BottomBar>
				<div>
					<Up onClick={props.onClickUp} />
					<p>{props.likeCounter}</p>
					<Down onClick={props.onClickDown} />
				</div>
				<div>
					<p>{props.comentsNumber} Comments</p>
				</div>
			</BottomBar>
		</PostContainer>
	);
};

export default Post;
