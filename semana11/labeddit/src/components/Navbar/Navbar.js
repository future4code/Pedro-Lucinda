import React from "react";
import { WrapperNav, LogoImg, Links, Search } from "./style";
import Logo from "../../assets/short-logo.png";
import { useHistory } from "react-router-dom";

const Navbar = () => {
	const history = useHistory();
	return (
		<WrapperNav>
			<LogoImg
				src={Logo}
				alt="Logo"
				onClick={() => history.push("/timeline")}
			/>
			<Search placeholder="Search..." />
			<Links onClick={() => history.push("/")}> Login </Links>
		</WrapperNav>
	);
};

export default Navbar;
