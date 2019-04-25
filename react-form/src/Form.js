import React, { Component } from 'react'
class Form extends Component {
  constructor(props){
    super(props);
    this.state = { username: "", email: "", password: "" }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault();
    alert(`You typed: ${this.state.username} and ${this.state.email}`);
    this.setState({username: "", email: "", password: ""});
  }
  render() {
    return(
      <div>
        <h1>FORM DEMO</h1>
        <form onSubmit={this.handleSubmit}>
        <label htmlFor="username">Username</label>
          <input 
            type="text"
            id="username" 
            name="username"
            value={this.state.username} 
            onChange={this.handleChange}
            placeholder="Username"
            required="required"
          /><br/>
          <label htmlFor="email">Email</label>
          <input 
            type="email"
            id="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            placeholder="email@gmail.com"
            required="required"
          /><br/>
          <label htmlFor="password">Password</label>
          <input 
            type="password"
            id="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
            placeholder="Password"
            required="required"
          /><br/>

          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default Form;