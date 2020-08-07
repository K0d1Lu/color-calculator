import html2canvas from "html2canvas";

import React, { useState, useRef } from "react";
import "./App.css";
import Controls from "./components/Controls";
import Header from "./components/Header/Header";

const nbControls = 2;
let activeControl = 0;

function App() {
	let x, moving;
	const controls = useRef(null);
	const result = useRef(null);

	const [elemToChange, changeElem] = useState("background");

	const [rgbaBg, changeRgbaBg] = useState(
		`rgba(${colors.background.red.value}, ${colors.background.green.value}, ${colors.background.blue.value}, ${colors.background.transparency.value})`
	);

	const [rgbaText, changeRgbaText] = useState(
		`rgba(${colors.text.red.value}, ${colors.text.green.value}, ${colors.text.blue.value}, ${colors.text.transparency.value})`
	);

	const [text, changeTextValue] = useState("“Mind if I do a J?” — The Dude");
	const [fontFamily, changeFontFamily] = useState("Times New Roman");
	const [fontSize, changeFontSize] = useState("40px");
	const [bgWidth, changeWidthSize] = useState("60%");
	const [bgHeight, changeHeightSize] = useState("60%");
	const [bgRadius, changeRadiusRatio] = useState("5%");

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

	const changeColors = (val, color) => {
		colors[elemToChange][color].value = val;

		if (elemToChange === "background") {
			changeRgbaBg(
				`rgba(${colors.background.red.value}, ${colors.background.green.value}, ${colors.background.blue.value}, ${colors.background.transparency.value})`
			);
		} else {
			changeRgbaText(
				`rgba(${colors.text.red.value}, ${colors.text.green.value}, ${colors.text.blue.value}, ${colors.text.transparency.value})`
			);
		}
	};

	const changeFont = (font) => {
		changeFontFamily(font);

		const link = document.createElement("link");
		link.rel = "stylesheet";
		link.href = `https://fonts.googleapis.com/css2?family=${font.replace(
			" ",
			"+"
		)}:wght@300&display=swap`;

		document.getElementsByTagName("head")[0].appendChild(link);
	};

	const changeSize = (size) => changeFontSize(`${size}px`);

	const changeHeight = (size) => changeHeightSize(`${size}px`);

	const changeWidth = (size) => changeWidthSize(`${size}px`);

	const changeRadius = (radius) => changeRadiusRatio(`${radius}%`);

	const changeText = (text) => changeTextValue(text);

	const navigate = (e) => {
		let vw, options, keyframes;

		switch (e.key) {
			case "ArrowRight":
				if (activeControl === nbControls - 1) {
					return false;
				}
				vw = Math.max(
					document.documentElement.clientWidth || 0,
					window.innerWidth || 0
				);

				options = {
					iterationStart: 0,
					delay: 0,
					endDelay: 0,
					direction: "alternate",
					duration: 700,
					fill: "forwards",
					easing: "ease-out",
				};

				keyframes = [
					{
						transform: "translateX(0%)",
					},
					{
						transform: `translateX(-${vw}px)`,
					},
				];
				controls.current.animate(keyframes, options);
				activeControl++;
				break;
			case "ArrowLeft":
				if (!activeControl) {
					return false;
				}
				vw = Math.max(
					document.documentElement.clientWidth || 0,
					window.innerWidth || 0
				);

				options = {
					iterationStart: 0,
					delay: 0,
					endDelay: 0,
					direction: "alternate",
					duration: 700,
					fill: "forwards",
					easing: "ease-out",
				};

				keyframes = [
					{
						transform: `translateX(-${vw}px)`,
					},
					{
						transform: `translateX(0)`,
					},
				];
				controls.current.animate(keyframes, options);
				activeControl--;
				break;
			default:
				return true;
		}
	};

	const download = () => {
		html2canvas(result.current).then((canvasElem) => {
			// Get a base64 data string
			const imageType = "image/png";
			let imageData = canvasElem.toDataURL(imageType);

			// Open the data string in the current window
			document.location.href = imageData.replace(
				imageType,
				"image/octet-stream"
			);
		});
	};

	return (
		<div className="App" tabIndex="1" onKeyDown={navigate}>
			<Header download={download} />
			<div className="drawer">
				<div
					ref={result}
					className="result"
					style={{
						backgroundColor: rgbaBg,
						width: bgWidth,
						height: bgHeight,
						borderRadius: bgRadius,
					}}
				>
					<span
						style={{
							fontFamily: fontFamily,
							fontSize: fontSize,
							color: rgbaText,
						}}
					>
						{text}
					</span>
				</div>
			</div>

			<div
				ref={controls}
				className="test"
				onTouchStart={(e) => {
					x = e.touches[0].clientX;
				}}
				onTouchMove={(e) => {
					if (!moving) {
						if (x < e.touches[0].clientX) {
							navigate({ key: "ArrowLeft" });
						} else {
							navigate({ key: "ArrowRight" });
						}
						moving = true;
					}
				}}
				onTouchEnd={() => (moving = false)}
			>
				<Controls
					onChangeColors={changeColorizedElem}
					onColorChange={changeColors}
					onClickHandler={changeColor}
					onChangeSizes={changeFont}
					onTextChange={changeText}
					onSizeChange={changeSize}
					onWidthChange={changeWidth}
					onHeightChange={changeHeight}
					onRadiusChange={changeRadius}
				/>
			</div>
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
			val: 10,
			atMax: true,
			atMin: false,
			add() {
				if (this.val < 10) {
					this.val++;
					this.value = this.val === 10 ? "1" : `0.${this.val}`;
					this.atMin = false;
				} else {
					this.atMax = true;
				}
			},
			min() {
				if (this.val > 0) {
					this.val--;
					this.value = this.val ? `0.${this.val}` : "0";
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
			val: 10,
			atMax: true,
			atMin: false,
			add() {
				if (this.val < 10) {
					this.val++;
					this.value = this.val === 10 ? "1" : `0.${this.val}`;
					this.atMin = false;
				} else {
					this.atMax = true;
				}
			},
			min() {
				if (this.val > 0) {
					this.val--;
					this.value = this.val ? `0.${this.val}` : "0";
					this.atMax = false;
				} else {
					this.atMin = true;
				}
			},
		},
	},
};
