import React, { Component } from "react";
class KeyDetector extends Component {
  constructor(props) {
    super(props);
    this.state = { key: " ", code: " " };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(evt) {
    this.setState({ key: evt.key, code: evt.code });
  }
  render() {
    return (
      <div>
        <h1>Key Detector</h1>
        <h3>
          key:{this.state.key},Code:{this.state.code}
        </h3>
        <input
          type="text"
          placeholder="Type Something"
          onKeyPress={this.handleClick}
        />
      </div>
    );
  }
}
export default KeyDetector;
