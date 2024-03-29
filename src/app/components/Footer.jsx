import React from "react";
import Logo from "./Logo";

const Footer = () => {
	return (
		<footer className="footer z-10 border-t border-t-gray-800">
			<div className="container p-12 flex justify-between mx-auto">
				<span>
					<Logo />
				</span>
				<p className="text-slate-600">All rights reserved.</p>
			</div>
		</footer>
	);
};
export default Footer;
