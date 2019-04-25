import React, { Component } from 'react';

class ShoppingForm extends Component{
  constructor(props) {
    super(props);
    this.state = { name: "", qty: ""}
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    event.preventDefault();
    this.setState({ 
      [event.target.name]: event.target.value
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.addItem(this.state);
    this.setState({name: "", qty: ""});
  }
  render() {
    return(
      <div>
        <h1>Shopping Form</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name</label>
          <input 
            type="text"
            id="name"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          /><br/>
          <label htmlFor="qty">Quantity</label>
          <input
            type="text"
            id="qty"
            name="qty"
            value={this.state.qty}
            onChange={this.handleChange}
          /><br/>
          <button>Add Item!</button>
        </form>
      </div>
    )
  }
}
export default ShoppingForm;
