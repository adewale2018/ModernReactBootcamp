import React, { Component } from 'react';

class WiseSquare extends Component {
  dispenseWisdom() {
    let messages = [
      "A fool thinks himself to be wise, but a wise man knows himself to be a fool", 
      "Educating the mind without educating the heart is no education at all.",
      "Not everything that is faced can be changed, but nothing can be changed until it is faced."
    ];
    let randIndex = Math.floor(Math.random() * messages.length);
    console.log(messages[randIndex]);
  }
  render() {
    return (
      <div className="WiseSquare" onMouseEnter={this.dispenseWisdom}>
        😂
      </div>
    )
  }
}

export default WiseSquare;
