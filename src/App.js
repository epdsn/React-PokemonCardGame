import React from 'react';
import logo from './logo.svg';
import './App.css';
import  Pokegame  from "./Pokegame";
import Rando from "./Rando";

function App() {
  return (
    <div className="App">
      <Pokegame />
      {/* <Rando maxNum={7} /> */}
    </div>
  );
}

export default App;
