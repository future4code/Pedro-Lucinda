import React from "react";
import { Switch, Route } from "react-router-dom";
//pages
import Login from "../pages/Login/Login";
import Post from "../pages/Post/Post";
import Register from "../pages/Register/Register";
import Timeline from "../pages/Timeline/Timeline";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
//context
import { PostsContextProvider } from "../context/PostsContext";

const Routes = () => {
	return (
		<>
			<Switch>
				<Route path="/" exact component={Login} />
				<Route path="/register" exact component={Register} />
				<PostsContextProvider>
					<Route path="/timeline" exact component={Timeline} />
					<Route path="/post" exact component={Post} />
				</PostsContextProvider>
				<Route component={ErrorPage} />
			</Switch>
		</>
	);
};

export default Routes;
