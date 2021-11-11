import React, { Component } from "react";
class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", useremail: "", userpwd: "" };
    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleChange3 = this.handleChange3.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange1(evt) {
    this.setState({ username: evt.target.value });
  }
  handleChange2(evt) {
    this.setState({ useremail: evt.target.value });
  }
  handleChange3(evt) {
    this.setState({ userpwd: evt.target.value });
  }
  handleSubmit(evt) {
    evt.preventDefault();
    alert(
      "You typed \n" +
        this.state.username +
        "\n" +
        this.state.useremail +
        "\n" +
        this.state.userpwd
    );
    this.setState({ username: "", useremail: "", userpwd: "" });
  }
  render() {
    return (
      <div>
        <h1>Contact form</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name</label>
          <br />
          <input
            type="text"
            id="name"
            onChange={this.handleChange1}
            placeholder="Type your name"
            value={this.state.username}
          />
          <span>{this.state.username}</span>
          <br />
          <label htmlFor="emailid">Email</label>
          <br />
          <input
            type="email"
            id="emailid"
            onChange={this.handleChange2}
            placeholder="Type your name"
            value={this.state.useremail}
          />
          <span>{this.state.useremail}</span>
          <br />
          <label htmlFor="pwd">Password</label>
          <br />
          <input
            type="password"
            id="pwd"
            onChange={this.handleChange3}
            placeholder="Type your name"
            value={this.state.userpwd}
          />
          <span>{this.state.userpwd}</span>
          <br />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
export default ContactForm;
