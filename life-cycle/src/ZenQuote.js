import React, { Component } from 'react';
import './ZenQuote.css';
import axios from 'axios';

class ZenQuote extends Component {
	constructor(props) {
		super(props);
		this.state = { quote: '', isLoaded: false };
	}
	componentDidMount() {
		axios.get('https://api.github.com/zen').then((response) => {
      setTimeout(
        function() {
          this.setState({ quote: response.data, isLoaded: true });
        }.bind(this),
        3000
      );
		});
	}
	render() {
		return (
			<div>
				{this.state.isLoaded ? (
          <div>
            <h1>ZenQuotes</h1>
            <h3>Always remember that...</h3>
            <p>{this.state.quote}</p>
          </div>
        ) : (
          <div className="loader"></div>
        )}
			</div>
		);
	}
}

export default ZenQuote;
