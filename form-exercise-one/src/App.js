import React, { Component } from 'react';
import './App.css';
import BoxList from './BoxList';

class App extends Component {
	render() {
		return (
			<div>
				<h1>BOX MAKER</h1>
				<BoxList />
			</div>
		);
	}
}

export default App;
