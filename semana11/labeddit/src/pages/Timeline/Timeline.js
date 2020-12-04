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
	const { posts, setPosts } = useContext(PostsContext);

	const [title, setTitle] = useState("");
	const [bodyPost, setBody] = useState("");
	const [comments, setComments] = useState([]);
	const [displayComment, setDisplayComment] = useState(false);

	function onChangeTitle(e) {
		setTitle(e.target.value);
	}
	function onChangeBody(e) {
		setBody(e.target.value);
	}

	function handleCreatePost() {
		const body = {
			text: bodyPost,
			title: title,
		};
		api
			.post("/posts", body, {
				headers: {
					Authorization: localStorage.getItem("token"),
					"Content-Type": "application/json",
				},
			})
			.then((response) => {
				alert("Posted!");
				setTitle("");
				setBody("");
			})
			.catch((error) => console.log(error));

		getPosts();
	}

	function handleSeeComments(id) {
		api
			.get(`/posts/${id}`, {
				headers: {
					Authorization: localStorage.getItem("token"),
				},
			})
			.then((response) => {
				setComments(response.post.comments);
				setDisplayComment(!displayComment);
				console.log(comments);
			})
			.catch((error) => console.log(error));
	}

	function handleVoteUp(id) {
		console.log(id);
		const body = {
			direction: 1,
		};

		api
			.put(`/${id}/vote`, body, {
				headers: {
					Authorization: localStorage.getItem("token"),
				},
			})
			.then((response) => alert(response))
			.catch((error) => console.log(error));

		getPosts();
	}
	function handleVoteDown(id) {
		const body = {
			direction: -1,
		};
		api
			.put(`/${id}/vote`, body, {
				headers: {
					Authorization: localStorage.getItem("token"),
				},
			})
			.then((response) => console.log(response))
			.catch((error) => console.log(error));
		getPosts();
	}

	function getPosts() {
		api
			.get("/posts", {
				headers: {
					Authorization: localStorage.getItem("token"),
				},
			})
			.then((response) => {
				setPosts(response.data.posts);
			})
			.catch((error) => {
				console.log(error);
			});
	}

	return (
		<div>
			<Navbar />
			<CreatePost
				titleValue={title}
				onChangeTitle={onChangeTitle}
				onChangeBody={onChangeBody}
				value={bodyPost}
				onClick={handleCreatePost}
			/>
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
						onClickComments={() => handleSeeComments(post.id)}
						comments={comments && comments}
						displayComment={displayComment}
					/>
				))}
		</div>
	);
};

export default Timeline;
