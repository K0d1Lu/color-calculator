import React, { useState } from "react";
import Radio from "@material-ui/core/Radio";

import Buttons from "./Buttons";

export default function Colors({ onClickHandler, onChangeHandler }) {
	const [selectedValue, setSelectedValue] = useState("background");

	const handleChange = (event) => {
		const { value } = event.target;
		setSelectedValue(value);
		onChangeHandler(value);
	};

	return (
		<div className="colors panel">
			<div className="radios">
				<Radio
					checked={selectedValue === "background"}
					name="colorized"
					value="background"
					onClick={handleChange}
				/>
				<label>Background</label>
				<Radio
					checked={selectedValue === "text"}
					name="colorized"
					value="text"
					onClick={handleChange}
				/>
				<label>Text</label>
			</div>
			<div className="buttons">
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
		</div>
	);
}
