import React, { Component } from "react";
class Student extends Component {
  handleClick(x, y, e) {
    console.log("Roll:", x, "Name:", y);
  }

  render() {
    return (
      <p>
        Hello {this.props.name}, your roll no. is {this.props.roll}
        <button
          onClick={(e) => {
            this.handleClick(this.props.roll, this.props.name, e);
          }}
        >
          Click me
        </button>
      </p>
    );
  }
}
export default Student;
