import React, { Component } from 'react';
import Timer from './Timer';
import ZenQuote from './ZenQuote';
import GithubUserInfo from './GithubUserInfo';
// import DataLoader from './DataLoader';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				{/* <Timer /> */}
        <ZenQuote />
        <GithubUserInfo username="facebook" />
        <GithubUserInfo username="colt" />
        <GithubUserInfo username="gaearon" />
        <GithubUserInfo username="sophiebits" />
        <GithubUserInfo username="adewale2018" />
			</div>
		);
	}
}

export default App;
