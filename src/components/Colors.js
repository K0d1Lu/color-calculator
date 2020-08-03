import React from "react";

import Buttons from "./Buttons";

export default function Colors({ onClickHandler, onChangeHandler }) {
	return (
		<div className="buttons control">
			<div>
				<input
					type="radio"
					name="colorized"
					value="background"
					defaultChecked
					onClick={(e) => onChangeHandler(e.target.value)}
				/>
				<label>Background</label>
				<input
					type="radio"
					name="colorized"
					value="text"
					onClick={(e) => onChangeHandler(e.target.value)}
				/>
				<label>Text</label>
			</div>
			<div>
				<h3>Red</h3>
				<Buttons color={"red"} onClickHandler={onClickHandler} />
			</div>
			<div>
				<h3>Green</h3>
				<Buttons color={"green"} onClickHandler={onClickHandler} />
			</div>
			<div>
				<h3>Blue</h3>
				<Buttons color={"blue"} onClickHandler={onClickHandler} />
			</div>
			<div>
				<h3>Transparency</h3>
				<Buttons color={"transparency"} onClickHandler={onClickHandler} />
			</div>
		</div>
	);
}
