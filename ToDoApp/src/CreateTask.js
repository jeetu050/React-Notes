import React, { Component } from "react";
import "./CreateTask.css";
class CreateTask extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleChange(evt) {
    this.setState({ value: evt.target.value });
  }
  handleClick(evt) {
    this.props.add(this.state.value);
    this.setState({ value: "" });
  }
  render() {
    return (
      <div>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.value}
        />
        <button className="add" onClick={this.handleClick}>
          Add Task
        </button>
      </div>
    );
  }
}
export default CreateTask;
