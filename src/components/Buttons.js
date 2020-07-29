import React from 'react';

export default function Buttons({color, onClickHandler}) {
  return (
    <div>
      <button onClick={() => onClickHandler['+'](color)}>+{color}</button>
      <button onClick={() => onClickHandler['-'](color)}>-{color}</button>
    </div>
  )
}