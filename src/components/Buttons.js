import React from 'react';

export default function Buttons(props) {
  return (
    <div>
      <button>+{props.color}</button>
      <button>-{props.color}</button>
    </div>
  )
}