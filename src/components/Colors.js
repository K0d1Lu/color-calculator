import React, { useState } from "react";
import { Radio, Slider } from "@material-ui/core";

export default function Colors({
	onClickHandler,
	onChangeHandler,
	onColorChange,
}) {
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
					<Slider
						min={0}
						max={255}
						defaultValue={0}
						onChange={(e, v) => onColorChange(v, "red")}
					/>
				</div>
				<div>
					<h3>Green</h3>
					<Slider
						min={0}
						max={255}
						defaultValue={0}
						onChange={(e, v) => onColorChange(v, "green")}
					/>
				</div>
				<div>
					<h3>Blue</h3>
					<Slider
						min={0}
						max={255}
						defaultValue={0}
						onChange={(e, v) => onColorChange(v, "blue")}
					/>
				</div>
				<div>
					<h3>Transparency</h3>
					<Slider
						min={0}
						max={1}
						step={0.1}
						marks
						defaultValue={1}
						onChange={(e, v) => onColorChange(v, "transparency")}
					/>
				</div>
			</div>
		</div>
	);
}
