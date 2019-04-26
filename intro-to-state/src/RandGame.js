import React, { Component } from 'react';

class RandGame extends Component {
  constructor(props){
    super(props);
    this.state = { num: 1}
    this.changeHandler = this.changeHandler.bind(this);
  }
  changeHandler(e) {
    e.preventDefault();
    let genNum = Math.floor(Math.random() * 11);
    this.setState({ num: genNum })
  }
  render () {
    return (
      <div>
        <h1>My RAND-GAME</h1>
        <p>You turn got: {this.state.num}</p>
        {/* { this.state.num === 7 && <h2>You Win!!!!!!</h2>} */}
        {this.state.num === 7 ? 
        <h2>You Win!!!</h2>
        :
        <button onClick={this.changeHandler}>Random Num</button>}
      </div>
    )
  }
}
export default RandGame;
