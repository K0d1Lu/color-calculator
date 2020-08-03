import React from "react";
import { Icon, Button } from "@material-ui/core";

let inter;

export default function Buttons({ color, onClickHandler }) {
	return (
		<div>
			<Button
				variant="outlined"
				onMouseDown={() => {
					onClickHandler["-"](color);
					inter = setInterval(() => {
						onClickHandler["-"](color);
					}, 100);
				}}
				onMouseUp={() => clearInterval(inter)}
			>
				<Icon className="fa fa-minus-circle" />
			</Button>

			<Button
				variant="outlined"
				onMouseDown={() => {
					onClickHandler["+"](color);
					inter = setInterval(() => {
						onClickHandler["+"](color);
					}, 100);
				}}
				onMouseUp={() => clearInterval(inter)}
			>
				<Icon className="fa fa-plus-circle" />
			</Button>
		</div>
	);
}
