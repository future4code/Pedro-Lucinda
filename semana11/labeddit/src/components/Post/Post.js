import React from "react";
import { BottomBar, PostContainer, PostContent, UserName } from "./style";

const Post = (props) => {
	return (
		<PostContainer>
			<UserName>
				<p> User Name {props.userName} </p>
			</UserName>
			<PostContent>
				<p>udsaudhsah dsauihduhsa sadhuhdsa  hdsau

				</p>
			</PostContent>
			<BottomBar>
				<div>
					<img alt="Up" />
					<p> 0 {props.likeCounter}</p>
					<img alt="Down" />
				</div>
				<div>
					<p>
						0 Comments
						{props.comentsNumber}
					</p>
				</div>
			</BottomBar>
		</PostContainer>
	);
};

export default Post;
