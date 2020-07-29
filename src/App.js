import React, { useState } from 'react';
import './App.css';
import Buttons from './components/Buttons';

function App() {
  const [rgba, changeRgba] = useState(`rgba(${colors.red.value}, ${colors.green.value}, ${colors.blue.value}, ${colors.transparency.value})`);

  const changeColor = {
    '+': (color) => {
      if (colors[color].atMax) return;
      else colors[color].add();
      changeRgba(`rgba(${colors.red.value}, ${colors.green.value}, ${colors.blue.value}, ${colors.transparency.value})`);
    },
    '-': (color) => {
      if (colors[color].atMin) return;
      else colors[color].min();
      changeRgba(`rgba(${colors.red.value}, ${colors.green.value}, ${colors.blue.value}, ${colors.transparency.value})`);
    },
  }

  return (
    <div className="App" style={{backgroundColor: rgba}}>
      <Buttons color={'red'} onClickHandler={changeColor} />
      <Buttons color={'green'} onClickHandler={changeColor} />
      <Buttons color={'blue'} onClickHandler={changeColor} />
      <Buttons color={'transparency'} onClickHandler={changeColor} />

      <span>{rgba}</span>
    </div>
  );
}

export default App;

var colors = {
  red: {
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
    }
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
    }
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
    }
  },
  transparency: {
    value: 1,
    atMax: true,
    atMin: false,
    add() {
      if (this.value < 1) {
        this.value += 0.1;
        this.atMin = false;
      } else {
        this.atMax = true;
      }
    },
    min() {
      if (this.value > 0) {
        this.value -= 0.1;
        this.atMax = false;
      } else {
        this.atMin = true;
      }
    }
  },
}
