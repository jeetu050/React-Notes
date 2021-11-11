import React, { Component } from "react";
class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "" };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(evt) {
    this.setState({ username: evt.target.value });
  }
  render() {
    return (
      <div>
        <h1>Contact form</h1>
        <form>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            onChange={this.handleChange}
            placeholder="Type your name"
            value={this.state.username}
          />
        </form>
        <p>You typed: {this.state.username}</p>
      </div>
    );
  }
}
export default ContactForm;
