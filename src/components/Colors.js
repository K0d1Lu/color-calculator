import React, { useState } from "react";
import { Radio, Slider } from "@material-ui/core";

export default function Colors({ onChangeHandler, onColorChange }) {
	const [selectedValue, setSelectedValue] = useState("background");

	const [redBg, changeRedBg] = useState(0);
	const [greenBg, changeGreenBg] = useState(255);
	const [blueBg, changeBlueBg] = useState(255);
	const [transparencyBg, changeTransparencyBg] = useState(1);

	const [redText, changeRedText] = useState(0);
	const [greenText, changeGreenText] = useState(0);
	const [blueText, changeBlueText] = useState(0);
	const [transparencyText, changeTransparencyText] = useState(1);

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
			<div className="ranges">
				<div className="range">
					<p>Red</p>
					<Slider
						min={0}
						max={255}
						value={selectedValue === "text" ? redText : redBg}
						onChange={(e, v) => {
							if (selectedValue === "text") {
								changeRedText(v);
							} else {
								changeRedBg(v);
							}
							onColorChange(v, "red");
						}}
					/>
				</div>
				<div className="range">
					<p>Green</p>
					<Slider
						min={0}
						max={255}
						value={selectedValue === "text" ? greenText : greenBg}
						onChange={(e, v) => {
							if (selectedValue === "text") {
								changeGreenText(v);
							} else {
								changeGreenBg(v);
							}
							onColorChange(v, "green");
						}}
					/>
				</div>
				<div className="range">
					<p>Blue</p>
					<Slider
						min={0}
						max={255}
						value={selectedValue === "text" ? blueText : blueBg}
						onChange={(e, v) => {
							if (selectedValue === "text") {
								changeBlueText(v);
							} else {
								changeBlueBg(v);
							}
							onColorChange(v, "blue");
						}}
					/>
				</div>
				<div className="range">
					<p>Transparency</p>
					<Slider
						min={0}
						max={1}
						step={0.1}
						marks
						value={selectedValue === "text" ? transparencyText : transparencyBg}
						onChange={(e, v) => {
							if (selectedValue === "text") {
								changeTransparencyText(v);
							} else {
								changeTransparencyBg(v);
							}
							onColorChange(v, "transparency");
						}}
					/>
				</div>
			</div>
		</div>
	);
}
