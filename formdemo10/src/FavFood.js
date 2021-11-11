import React, { Component } from "react";
class FavFood extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "Indian" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(evt) {
    this.setState({ value: evt.target.value });
  }
  handleSubmit(evt) {
    evt.preventDefault();
    alert("Your submitted: " + this.state.value);
    this.setState({ value: "Indian" });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="foor">
            <b>Pick your favourite food</b>
          </label>
          <br />
          <select
            id="food"
            onChange={this.handleChange}
            value={this.state.value}
          >
            <option value="Chinese">Chinese</option>
            <option value="Indian">Indian</option>
            <option value="Mughlai">Mughlai</option>
          </select>
          <br />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
export default FavFood;
