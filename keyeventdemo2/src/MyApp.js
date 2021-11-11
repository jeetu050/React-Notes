import React, { Component } from "react";
class MyApp extends Component {
  handleClick(evt) {
    if (evt.code === "Enter") alert("You typed\n" + evt.target.value);
    else if (evt.code === "Escape") {
      let answer = window.confirm("Are you sure you want to clear the text?");
      if (answer) evt.target.value = " ";
    }
  }
  render() {
    return (
      <div>
        <h1>Type your message</h1>
        <input
          type="text"
          placeholder="Type Something"
          onKeyUp={this.handleClick}
        />
      </div>
    );
  }
}
export default MyApp;
