import React from 'react';
import WiseSquare from './WiseSquare';
import AnnoyingForm from './AnnoyingForm';
import CopyDemo from './CopyDemo';
import './App.css';
import WiseSquareProps from './WiseSquareProps';
import ButtonList from './ButtonList';
import NumberList from './NumberList';
import BetterNumberList from './BetterNumberList';


function App() {
  return (
    <div className="App">
      <h1>WISE SQUARE</h1>
      <WiseSquare />
      <AnnoyingForm />
      <CopyDemo />
      <WiseSquareProps />
      <ButtonList />
      <NumberList />
      <BetterNumberList />

    </div>
  )
}

export default App;
