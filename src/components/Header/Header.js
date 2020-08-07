import React from "react";
import { Icon } from "@material-ui/core";

import logo from "./logo.png";

export default function Header({ download }) {
	return (
		<div className="header">
			<div>
				<img src={logo} className="logo" alt="logo" />
			</div>
			<div className="badges">
				<Icon className="fas fa-download badge" onClick={download} />
				<Icon className="fas fa-code badge" />
				<Icon className="fas fa-share badge" />
				<a
					href="https://github.com/K0d1Lu/color-calculator"
					target="_blank"
					rel="noopener noreferrer"
				>
					<Icon className="fab fa-github" />
				</a>
			</div>
		</div>
	);
}
