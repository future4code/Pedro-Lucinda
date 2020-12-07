import React from "react";
import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "./styles/global";
import Routes from "./routes/Routes";

const App = () => {
	return (
		<>
			<BrowserRouter>

					<Routes />

			</BrowserRouter>
			<GlobalStyle />
		</>
	);
};

export default App;
