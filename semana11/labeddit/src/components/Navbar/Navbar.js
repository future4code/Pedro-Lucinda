import React from "react";
import { WrapperNav, LogoImg, Links, Search } from "./style";
import Logo from "../../assets/short-logo.png";
import { useHistory } from "react-router-dom";

const Navbar = () => {
	const history = useHistory();
	return (
		<WrapperNav>
			<LogoImg src={Logo} alt="Logo" />
			<Search placeholder="Search..." />
			<Links onClick={() => history.push("/")}> Login/Register </Links>
		</WrapperNav>
	);
};

export default Navbar;
