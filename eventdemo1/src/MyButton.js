import React, { Component } from "react";
class MyButton extends Component {
  handleClick(e) {
    console.log(e);
    let today = new Date();
    alert("Current date and time:" + today);
  }
  render() {
    return <button onClick={this.handleClick}> Click me</button>;
  }
}
export default MyButton;
