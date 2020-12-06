import React, { useContext, useEffect, useState } from "react";
//components
import Navbar from "../../components/Navbar/Navbar";
import Post from "../../components/Post/Post";
import CreatePost from "../../components/CreatePost/CreatePost";
//context
import { PostsContext } from "../../context/PostsContext";
//api
import api from "../../services/api";
import { useHistory } from "react-router-dom";

const Timeline = () => {
	const { posts, setPosts } = useContext(PostsContext);
	const [title, setTitle] = useState("");
	const [bodyPost, setBody] = useState("");
	const [count, setCount] = useState(0);
	const history = useHistory();

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
		history.push(`/posts/${id}`);
	}

	function handleVoteUp(id) {
		const body = {
			direction: 1,
		};

		setCount(count + 1);

		api
			.put(`/posts/${id}/vote`, body, {
				headers: {
					Authorization: localStorage.getItem("token"),
				},
			})
			.then((response) => alert("Voted up"))
			.catch((error) => console.log(error));

		getPosts();
	}
	function handleVoteDown(id) {
		const body = {
			direction: -1,
		};

		setCount(count - 1);
		api
			.put(`/posts/${id}/vote`, body, {
				headers: {
					Authorization: localStorage.getItem("token"),
				},
			})
			.then((response) => alert("Voted Down"))
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
		<>
			<Navbar />
			<CreatePost
				titleValue={title}
				onChangeTitle={onChangeTitle}
				onChangeBody={onChangeBody}
				value={bodyPost}
				onClick={handleCreatePost}
			/>
			{posts.length < 1 && (
				<h3 style={{ color: "white", fontSize: "20px"}}>
					Loading...
				</h3>
			)}

			{posts &&
				posts.map((post) => (
					<Post
						key={post.id}
						userName={post.username}
						title={post.title}
						content={post.text}
						likeCounter={count}
						comentsNumber={post.commentsCount}
						onClickUp={() => handleVoteUp(post.id)}
						onClickDown={() => handleVoteDown(post.id)}
						onClickComments={() => handleSeeComments(post.id)}
					/>
				))}
		</>
	);
};

export default Timeline;
