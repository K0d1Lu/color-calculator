import React from "react";
import { Select, Slider, TextField } from "@material-ui/core";

export default function Sizes({
	onChangeHandler,
	onSizeChange,
	onWidthChange,
	onHeightChange,
	onRadiusChange,
	onTextChange,
}) {
	const fonts = [
		"Roboto",
		"Open Sans",
		"Lato",
		"Source Sans Pro",
		"Oswald",
		"Rowdies",
	];
	let options = [<option aria-label="None" value="" key={0} />];

	fonts.forEach((font, i) => {
		options.push(
			<option value={font} key={i + 1}>
				{font}
			</option>
		);
	});

	return (
		<div className="sizes panel">
			<div className="fonts">
				<div>
					<TextField
						id="outlined-basic"
						label="Change Text"
						variant="outlined"
						onChange={(e, v) => onTextChange(e.target.value)}
					/>
				</div>

				<div className="change-font">
					<Select
						native
						value={"Roboto"}
						onChange={(e) => onChangeHandler(e.target.value)}
					>
						{options}
					</Select>
				</div>

				<div>
					<p>Font Size</p>
					<Slider min={40} max={200} onChange={(e, v) => onSizeChange(v)} />
				</div>
			</div>
			<div className="slider">
				<div>
					<p>Background width</p>
					<Slider
						min={0}
						max={1920}
						defaultValue={600}
						onChange={(e, v) => onWidthChange(v)}
					/>
				</div>

				<div>
					<p>Background height</p>
					<Slider
						min={0}
						max={1080}
						defaultValue={400}
						onChange={(e, v) => onHeightChange(v)}
					/>
				</div>

				<div>
					<p>Background radius</p>
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
		</div>
	);
}
