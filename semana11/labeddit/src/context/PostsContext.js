import React, { createContext, useEffect, useState } from "react";
import api from "../services/api";

export const PostsContext = createContext();

export const PostsContextProvider = () => {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		api
			.get("/posts", {
				headers: {
					Authorization: localStorage.getItem("Token"),
				},
			})
			.then((response) => {
				setPosts(response.posts);
			})
			.catch((error) => {
				console.log(error);
				alert(error.message);
			});
	}, []);

	return;
};
