import React from 'react';
import './App.css';
import Buttons from './components/Buttons';

function App() {
  let hex = '#000000';

  return (
    <div className="App">
      <Buttons color={'red'}/>
      <Buttons color={'yellow'}/>
      <Buttons color={'blue'}/>
      <Buttons color={'transparency'}/>

      <span>{hex}</span>
    </div>
  );
}

export default App;
