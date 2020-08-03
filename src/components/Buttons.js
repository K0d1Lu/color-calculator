import React from 'react';

let inter;

export default function Buttons({color, onClickHandler}) {
  return (
    <div>
      <button
        onMouseDown={() => {
          onClickHandler['+'](color)
          inter = setInterval(() => {
            onClickHandler['+'](color)
          }, 100);
        }}
        onMouseUp={() => clearInterval(inter) }
      >
        +
      </button>
      <button
        onMouseDown={() => {
          onClickHandler['-'](color)
          inter = setInterval(() => {
            onClickHandler['-'](color)
          }, 100);
        }}
        onMouseUp={() => clearInterval(inter) }
      >
        -
      </button>
    </div>
  )
}