import React, { Component } from "react";
class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", submitted: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.value = "";
  }
  handleChange(evt) {
    this.setState({ username: evt.target.value, submitted: false });
  }
  handleSubmit(evt) {
    evt.preventDefault();
    this.value = this.state.username;
    this.setState({ username: "", submitted: true });
  }
  render() {
    return (
      <div>
        <h1>Contact form</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            onChange={this.handleChange}
            placeholder="Type your name"
            value={this.state.username}
          />
          <button>Submit</button>
        </form>
        {this.state.submitted && <p>You typed: {this.value}</p>}
      </div>
    );
  }
}
export default ContactForm;
