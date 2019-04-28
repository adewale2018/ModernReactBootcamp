import React, { Component } from 'react';

class Score extends Component {
  constructor(props) {
    super(props);
    this.state = { score: 5}
    this.singleKill = this.singleKill.bind(this);
    this.trippleKill = this.trippleKill.bind(this);
  }

  singleKill() {
    this.setState({score: this.state.score + 1})
  }
  //not good to use
  // trippleKill() {
  //   this.setState({ score: this.state.score + 1});
  //   this.setState({ score: this.state.score + 1});
  //   this.setState({ score: this.state.score + 1});
  // }

      // this is very okay to use
  trippleKill() {
    this.setState(st => {
      return { score: st.score + 5 };
    });
    this.setState(st=> {
      return { score: st.score + 10 };
    });
    this.setState(st => {
      return { score: st.score + 10};
    });
  }

  //this is okay to use too
  // incrementScore(curState) {
  //   return { score: curState.score + 10};
  // }
  // trippleKill() {
  //   this.setState(this.incrementScore);
  //   this.setState(this.incrementScore);
  //   this.setState(this.incrementScore);
  // }

  render() {
    return(
      <div>
        <h2>Your Score is: {this.state.score}</h2>
        <button onClick={this.singleKill}>Single Kill!</button>
        <button onClick={this.trippleKill}>triplleKill Kill!</button>
      </div>
    )
  }
}

export default Score;
