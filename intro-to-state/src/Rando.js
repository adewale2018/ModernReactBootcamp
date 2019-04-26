import React, { Component } from 'react'

class Rando extends Component {
  constructor(props) {
    super(props);
    this.state = { num: 0};
    this.makeTimer();
  }
  makeTimer(){
    setInterval(() => {
      let newRad = Math.floor(Math.random() * this.props.maxNum);
      this.setState({ num: newRad });
    }, 1000);
  }
  render() {
    return (
      <div>
        <h1>This is RANDO</h1>
        <h3>{this.state.num}</h3>
      </div>
    )
  }
}
export default Rando;
