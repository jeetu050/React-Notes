import React, { Component } from "react";
class MyClicker extends Component {
  constructor(props) {
    super(props);
    this.state = { num: 1 };
    this.getRandom = this.getRandom.bind(this);
  }
  getRandom() {
    this.setState({ num: Math.floor(Math.random() * 10) + 1 });
  }
  render() {
    return (
      <div>
        <h2>Current Number is: {this.state.num}</h2>
        {this.state.num == 6 ? (
          "You win"
        ) : (
          <button onClick={this.getRandom}>Generate New Number</button>
        )}
      </div>
    );
  }
}
export default MyClicker;
