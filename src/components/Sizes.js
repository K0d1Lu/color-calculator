import React from "react";
import {
	InputLabel,
	Select,
	MenuItem,
	Typography,
	Slider,
} from "@material-ui/core";

export default function Sizes({ onChangeHandler, onSizeChange }) {
	const fonts = ["Roboto", "Oswald", "Rowdies"];
	let options = [];

	fonts.forEach((font, i) => {
		options.push(
			<MenuItem value={font} key={i}>
				{font}
			</MenuItem>
		);
	});

	return (
		<div className="sizes panel">
			<div>
				<InputLabel id="select-label">Change font</InputLabel>
				<Select
					labelId="select-label"
					value={"Roboto"}
					onChange={(e) => onChangeHandler(e.target.value)}
				>
					{options}
				</Select>
			</div>
			<div className="slider">
				<Typography id="continuous-slider" gutterBottom>
					Font Size
				</Typography>
				<div>
					<Slider min={40} max={200} onChange={(e, v) => onSizeChange(v)} />
				</div>
			</div>
		</div>
	);
}
