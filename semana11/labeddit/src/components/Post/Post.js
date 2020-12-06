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
					<Up onClickUp={props.onClickUp} />
					<p>{props.likeCounter}</p>
					<Down onClickDown={props.onClickDown} />
				</div>
				<div>
					<p onClick={props.onClickComments}>{props.comentsNumber} Comments</p>
				</div>
			</BottomBar>
		</PostContainer>
	);
};

export default Post;
