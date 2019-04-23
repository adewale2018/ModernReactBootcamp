import React from 'react';
import ReactDOM from 'react-dom';
import { choice, removeMe } from './Helpers';
import Foods from './Foods';
import './Helpers.css';

let fruitTaken = choice(Foods);
let remaining = removeMe(Foods, fruitTaken);

ReactDOM.render(
  
<div className="Align">
  <h1 className="Helpers">I'd like One {fruitTaken} please!!!</h1>
  <h2>Here you go: {fruitTaken}</h2>
  <h4 className="Helpers-one">Delicious! May I have another?</h4>
  <h4 className="Helpers-red">I’m sorry, you can not. We have {remaining.length} left.</h4>
</div>, document.getElementById('root'));
