import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import api from "../../services/api";
import { useRouteMatch } from "react-router-dom";
import Comment from "../../components/Comment/Comment";

const Posts = () => {
	const [comments, setComments] = useState([]);
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
				setComments(response.data.post.comments);
			})
			.catch((error) => console.log(error));
	}, []);

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
		<div>
			<Navbar />
			{comments?.map((comment) => (
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
	);
};

export default Posts;
