import React, { Component } from 'react';

class AnnoyingForm extends Component {
  handleKeyUp() {
    alert("YOU PRESSED SPOIL!!!");
  }
  render() {
    return(
      <div>
        <h3>Try Typing In Here: </h3>
        <textarea onKeyUp={this.handleKeyUp} />
      </div>
    );
  }
}

export default AnnoyingForm;
