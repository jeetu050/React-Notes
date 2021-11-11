import React, { Component } from "react";
class Student extends Component {
  handleClick(x, y, e) {
    console.log("Roll:", x, "Name:", y);
  }
  handleArgClick = (e) => {
    this.handleClick(this.props.roll, this.props.name, e); //yha pr pr arrow function se handleClick() event handler ko call kr rhe h to hme 'e' ko explicitly pass krna pdega
  };
  render() {
    return (
      <p>
        Hello {this.props.name}, your roll no. is {this.props.roll}
        <button onClick={this.handleArgClick}>Click me</button>
      </p>
    );
  }
}
export default Student;
