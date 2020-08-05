import React from "react";

import Colors from "./Colors";
import Sizes from "./Sizes";

export default function Controls({
	onChangeColors,
	onClickHandler,
	onChangeSizes,
	onSizeChange,
	onWidthChange,
	onHeightChange,
	onRadiusChange,
	onTextChange,
}) {
	return (
		<div className="controls">
			<Colors
				onChangeHandler={onChangeColors}
				onClickHandler={onClickHandler}
			/>
			<Sizes
				onChangeHandler={onChangeSizes}
				onTextChange={onTextChange}
				onSizeChange={onSizeChange}
				onWidthChange={onWidthChange}
				onHeightChange={onHeightChange}
				onRadiusChange={onRadiusChange}
			/>
		</div>
	);
}
