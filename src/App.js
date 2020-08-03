import React, { useState } from "react";
import "./App.css";
import Controls from "./components/Controls";

let elemToChange = "background";

function App() {
	const [elemToChange, changeElem] = useState("background");

	const [rgbaBg, changeRgbaBg] = useState(
		`rgba(${colors.background.red.value}, ${colors.background.green.value}, ${colors.background.blue.value}, ${colors.background.transparency.value})`
	);

	const [rgbaText, changeRgbaText] = useState(
		`rgba(${colors.text.red.value}, ${colors.text.green.value}, ${colors.text.blue.value}, ${colors.text.transparency.value})`
	);

	const [fontFamily, changeFontFamily] = useState("Times New Roman");
	const [fontSize, changeFontSize] = useState("20px");

	const changeColorizedElem = (elem) => {
		changeElem(elem);
	};

	const changeColor = {
		"+": (color) => {
			if (colors[elemToChange][color].atMax) return;
			else colors[elemToChange][color].add();

			if (elemToChange === "background") {
				changeRgbaBg(
					`rgba(${colors.background.red.value}, ${colors.background.green.value}, ${colors.background.blue.value}, ${colors.background.transparency.value})`
				);
			} else {
				changeRgbaText(
					`rgba(${colors.text.red.value}, ${colors.text.green.value}, ${colors.text.blue.value}, ${colors.text.transparency.value})`
				);
			}
		},
		"-": (color) => {
			if (colors[elemToChange][color].atMin) return;
			else colors[elemToChange][color].min();
			if (elemToChange === "background") {
				changeRgbaBg(
					`rgba(${colors.background.red.value}, ${colors.background.green.value}, ${colors.background.blue.value}, ${colors.background.transparency.value})`
				);
			} else {
				changeRgbaText(
					`rgba(${colors.text.red.value}, ${colors.text.green.value}, ${colors.text.blue.value}, ${colors.text.transparency.value})`
				);
			}
		},
	};

	const changeFont = (font) => {
		changeFontFamily(font);

		const link = document.createElement("link");
		link.rel = "stylesheet";
		link.href = `https://fonts.googleapis.com/css2?family=${font}:wght@300&display=swap`;

		document.getElementsByTagName("head")[0].appendChild(link);
	};

	const changeSize = (size) => {
		console.log("into the change", size);
		changeFontSize(`${size}px`);
	};

	return (
		<div className="App" style={{ backgroundColor: rgbaBg }}>
			<div>
				<span
					style={{
						fontFamily: fontFamily,
						fontSize: fontSize,
						color: rgbaText,
					}}
				>
					{elemToChange === "background" ? rgbaBg : rgbaText}
				</span>
			</div>
			<Controls
				onChangeColors={changeColorizedElem}
				onClickHandler={changeColor}
				onChangeSizes={changeFont}
				onSizeChange={changeSize}
			/>
		</div>
	);
}

export default App;

var colors = {
	background: {
		red: {
			value: 0,
			atMax: false,
			atMin: true,
			add() {
				if (this.value < 255) {
					this.value++;
					this.atMin = false;
				} else {
					this.atMax = true;
				}
			},
			min() {
				if (this.value > 0) {
					this.value--;
					this.atMax = false;
				} else {
					this.atMin = true;
				}
			},
		},
		green: {
			value: 255,
			atMax: true,
			atMin: false,
			add() {
				if (this.value < 255) {
					this.value++;
					this.atMin = false;
				} else {
					this.atMax = true;
				}
			},
			min() {
				if (this.value > 0) {
					this.value--;
					this.atMax = false;
				} else {
					this.atMin = true;
				}
			},
		},
		blue: {
			value: 255,
			atMax: true,
			atMin: false,
			add() {
				if (this.value < 255) {
					this.value++;
					this.atMin = false;
				} else {
					this.atMax = true;
				}
			},
			min() {
				if (this.value > 0) {
					this.value--;
					this.atMax = false;
				} else {
					this.atMin = true;
				}
			},
		},
		transparency: {
			value: 1,
			atMax: true,
			atMin: false,
			add() {
				if (this.value < 1) {
					this.value += Number.parseFloat(0.1).tofixed(2);
					this.atMin = false;
				} else {
					this.atMax = true;
				}
			},
			min() {
				if (this.value > 0) {
					this.value -= Number.parseFloat(0.1).tofixed(2);
					this.atMax = false;
				} else {
					this.atMin = true;
				}
			},
		},
	},
	text: {
		red: {
			value: 0,
			atMax: false,
			atMin: true,
			add() {
				if (this.value < 255) {
					this.value++;
					this.atMin = false;
				} else {
					this.atMax = true;
				}
			},
			min() {
				if (this.value > 0) {
					this.value--;
					this.atMax = false;
				} else {
					this.atMin = true;
				}
			},
		},
		green: {
			value: 0,
			atMax: false,
			atMin: true,
			add() {
				if (this.value < 255) {
					this.value++;
					this.atMin = false;
				} else {
					this.atMax = true;
				}
			},
			min() {
				if (this.value > 0) {
					this.value--;
					this.atMax = false;
				} else {
					this.atMin = true;
				}
			},
		},
		blue: {
			value: 0,
			atMax: false,
			atMin: true,
			add() {
				if (this.value < 255) {
					this.value++;
					this.atMin = false;
				} else {
					this.atMax = true;
				}
			},
			min() {
				if (this.value > 0) {
					this.value--;
					this.atMax = false;
				} else {
					this.atMin = true;
				}
			},
		},
		transparency: {
			value: 1,
			atMax: true,
			atMin: false,
			add() {
				if (this.value < 1) {
					this.value += Number.parseFloat(0.1).tofixed(2);
					this.atMin = false;
				} else {
					this.atMax = true;
				}
			},
			min() {
				if (this.value > 0) {
					this.value -= Number.parseFloat(0.1).tofixed(2);
					this.atMax = false;
				} else {
					this.atMin = true;
				}
			},
		},
	},
};
