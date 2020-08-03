import React from "react";

import Colors from "./Colors";
import Sizes from "./Sizes";

export default function Controls({
	onChangeColors,
	onClickHandler,
	onChangeSizes,
	onSizeChange,
}) {
	return (
		<div className="controls">
			<Colors
				onChangeHandler={onChangeColors}
				onClickHandler={onClickHandler}
			/>
			<Sizes onChangeHandler={onChangeSizes} onSizeChange={onSizeChange} />
		</div>
	);
}
