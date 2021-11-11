import React, { Component } from "react";
class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
    setInterval(this.updateClock, 1000);
  }

  updateClock = () => {
    this.setState({ date: new Date() });
  };

  render() {
    return (
      <div>
        <h2>Hello Everyone!</h2>
        <h3>Current date and time are: {this.state.date.toLocaleString()}</h3>
      </div>
    );
  }
}

export default Clock;
