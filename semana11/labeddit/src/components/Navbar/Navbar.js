import React from "react";
import { WrapperNav, LogoImg, Links, Search } from "./style";
import Logo from "../../assets/short-logo.png";

const Navbar = () => {
	return (
		<WrapperNav>
			<LogoImg src={Logo} alt="Logo" />
			<Search placeholder="Search..."/>
			<Links> Login/Register </Links>
		</WrapperNav>
	);
};

export default Navbar;
