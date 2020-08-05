import React from "react";
import {
	InputLabel,
	Select,
	MenuItem,
	Typography,
	Slider,
	TextField,
} from "@material-ui/core";

export default function Sizes({
	onChangeHandler,
	onSizeChange,
	onWidthChange,
	onHeightChange,
	onRadiusChange,
	onTextChange,
}) {
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
				<div>
					<TextField
						id="outlined-basic"
						label="Change Text"
						variant="outlined"
						onChange={(e, v) => onTextChange(e.target.value)}
					/>
				</div>
			</div>
			<div className="slider">
				<Typography id="continuous-slider" gutterBottom>
					Font Size
				</Typography>
				<div>
					<Slider min={40} max={200} onChange={(e, v) => onSizeChange(v)} />
				</div>
				<Typography id="continuous-slider" gutterBottom>
					Background width
				</Typography>
				<div>
					<Slider
						min={0}
						max={1920}
						defaultValue={600}
						onChange={(e, v) => onWidthChange(v)}
					/>
				</div>
				<Typography id="continuous-slider" gutterBottom>
					Background height
				</Typography>
				<div>
					<Slider
						min={0}
						max={1080}
						defaultValue={400}
						onChange={(e, v) => onHeightChange(v)}
					/>
				</div>
				<Typography id="continuous-slider" gutterBottom>
					Background radius
				</Typography>
				<div>
					<Slider
						min={0}
						max={100}
						defaultValue={5}
						onChange={(e, v) => onRadiusChange(v)}
					/>
				</div>
			</div>
		</div>
	);
}
