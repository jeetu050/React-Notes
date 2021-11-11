import React, { Component } from "react";
class AboutUs extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "Your view about SCA" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(evt) {
    this.setState({ value: evt.target.value });
  }
  handleSubmit(evt) {
    evt.preventDefault();
    alert("Your review submitted: " + this.state.value);
    this.setState({ value: "" });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="text">
            <b>Review Us</b>
          </label>
          <br />
          <textarea
            id="text"
            onChange={this.handleChange}
            value={this.state.value}
          />
          <br />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
export default AboutUs;
