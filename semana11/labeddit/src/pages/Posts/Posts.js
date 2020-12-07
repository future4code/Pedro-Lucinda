import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import api from "../../services/api";
import { useRouteMatch } from "react-router-dom";
import Comment from "../../components/Comment/Comment";
import Post from "../../components/Post/Post";
import Loading from "../../components/Loading/Loading";
import CreateComment from "../../components/CreateComment/CreateComment";

const Posts = () => {
	const [comments, setComments] = useState([]);
	const [comment, setComment] = useState("");
	const [count, setCount] = useState(0);
	const { params } = useRouteMatch();

	useEffect(() => {
		api
			.get(`/posts/${params.id}`, {
				headers: {
					Authorization: localStorage.getItem("token"),
				},
			})
			.then((response) => {
				setComments(response.data.post);
			})
			.catch((error) => console.log(error));
	}, []);

	function handleCreateComment() {
		const body = {
			text: comment,
		};
		api
			.post(`/posts/${params.id}/comment`, body, {
				headers: {
					Authorization: localStorage.getItem("token"),
				},
			})
			.then((response) => alert("Posted!"))
			.catch((error) => console.log(error));
	}

	function handleVoteUp(id) {
		const body = {
			direction: 1,
		};
		setCount(count + 1);

		api
			.put(`/posts/${params.id}/comment/${id}/vote`, body, {
				headers: {
					Authorization: localStorage.getItem("token"),
				},
			})
			.then((response) => alert("voted Up"))
			.catch((error) => console.log(error));
	}

	function handleVoteDown(id) {
		const body = {
			direction: -1,
		};
		setCount(count - 1);

		api
			.put(`/posts/${params.id}/comment/${id}/vote`, body, {
				headers: {
					Authorization: localStorage.getItem("token"),
				},
			})
			.then((response) => alert("vote down"))
			.catch((error) => console.log(error));
	}

	return (
		<>
			<Navbar />
			{comments.length < 1 && <Loading />}

			{comments.comments?.length > 0 && (
				<CreateComment
					onChangeComment={(e) => setComment(e.target.value)}
					value={comment}
					required
					onClick={handleCreateComment}
				/>
			)}

			{comments.comments?.length > 0 && (
				<Post
					userName={comments.username}
					title={comments.title}
					content={comments.text}
					likeCounter={comments.votesCount}
					commentsNumber={comments.commentsCount}
				/>
			)}

			<div
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}
			>
				{comments.comments?.map((comment) => (
					<>
						<Comment
							key={comment.id}
							userName={comment.username}
							text={comment.text}
							votesCount={count}
							onClickUp={() => handleVoteUp(comment.id)}
							onClickDown={() => handleVoteDown(comment.id)}
						/>
						<br />
					</>
				))}
			</div>
		</>
	);
};

export default Posts;
