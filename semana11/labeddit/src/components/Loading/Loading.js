import React from "react";
import ReactLoading from "react-loading";

const Loading = () => (
	<div
		style={{
			width: "100vw",
			display: "flex",
			flexDirection: "column",
			alignItems: "center",
		}}
	>
		<ReactLoading
			type={"bubbles"}
			color={"#F23005"}
			height={"80px"}
			width={"80px"}
		/>
	</div>
);

export default Loading;
