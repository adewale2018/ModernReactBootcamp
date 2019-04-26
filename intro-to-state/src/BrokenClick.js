import React, { Component } from 'react';

class BrokenClick extends Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false };
    this.clickHandler = this.clickHandler.bind(this);
  }
  clickHandler(event) {
    event.preventDefault();
    this.setState({ clicked: true })
  }
  render() {
    return(
      <div>
        <h1>{this.state.clicked ? "Clicked!!!!" : "Yet to be Clicked"}</h1>
        <button onClick={this.clickHandler}>Clicked Me!</button>
      </div>
    );
  }
}
export default BrokenClick;
