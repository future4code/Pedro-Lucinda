import React, { useContext, useState } from "react";
//components
import Navbar from "../../components/Navbar/Navbar";
import Post from "../../components/Post/Post";
import CreatePost from "../../components/CreatePost/CreatePost";
//context
import { PostsContext } from "../../context/PostsContext";
//api
import api from "../../services/api";

const Timeline = () => {
	const { posts } = useContext(PostsContext);
	const [id, setId] = useState("");

	function handleVoteUp(id) {
		const body = {
			direction: 1,
		};

		api
			.put(`${id}/vote`, body, {
				headers: {
					Authorization: localStorage.getItem("token"),
				},
			})
			.then((response) => alert(response))
			.catch((error) => console.log(error));
	}
	function handleVoteDown(id) {
		const body = {
			direction: -1,
		};
		api
			.put(`${id}/vote`, body, {
				headers: {
					Authorization: localStorage.getItem("token"),
				},
			})
			.then((response) => console.log(response))
			.catch((error) => console.log(error));
	}

	return (
		<div>
			<Navbar />
			<CreatePost />
			{posts &&
				posts.map((post) => (
					<Post
						key={post.id}
						userName={post.username}
						title={post.title}
						content={post.text}
						likeCounter={post.votesCount}
						comentsNumber={post.commentsCount}
						onClickUp={() => handleVoteUp(post.id)}
						onClickDown={() => handleVoteDown(post.id)}
					/>
				))}
		</div>
	);
};

export default Timeline;
