import React from "react";

export default function Sizes({ onChangeHandler, onSizeChange }) {
	const fonts = ["Roboto", "Oswald", "Rowdies"];
	let options = [];

	fonts.forEach((font, i) => {
		options.push(
			<option value={font} key={font + i}>
				{font}
			</option>
		);
	});

	return (
		<div>
			<div>
				<select
					name="fonts"
					id="font-select"
					onChange={(e) => onChangeHandler(e.target.value)}
				>
					<option value="">Change Font</option>
					{options}
				</select>
			</div>

			<input
				type="range"
				id="fontSize"
				name="fontSize"
				min="20"
				max="100"
				onChange={(e) => onSizeChange(e.target.value)}
			/>
			<label>Font Size</label>
		</div>
	);
}
