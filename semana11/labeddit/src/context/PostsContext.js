import React, { createContext, useEffect, useState } from "react";
import api from "../services/api";

export const PostsContext = createContext();

export const PostsContextProvider = (props) => {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
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
	}, []);

	return (
		<PostsContext.Provider value={{ posts, setPosts }}>
			{props.children}
		</PostsContext.Provider>
	);
};
