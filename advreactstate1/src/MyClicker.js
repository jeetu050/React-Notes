import React, { Component } from "react";
class MyClicker extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 1 };
    this.handleClick = this.handleClick.bind(this);
    this.handleTripleClick = this.handleTripleClick.bind(this);
  }

  handleClick(e) {
    this.setState({ counter: this.state.counter + 1 });
  }
  handleTripleClick(e) {
    // // this.setState({ counter: this.state.counter + 1 });
    // // this.setState({ counter: this.state.counter + 1 });
    // // this.setState({ counter: this.state.counter + 1 });
    // this.setState(this.increment);
    // this.setState(this.increment);
    // this.setState(this.increment);
    this.setState((currState) => {
      return { counter: currState.counter + 1 };
    });
    this.setState((currState) => {
      return { counter: currState.counter + 1 };
    });
    this.setState((currState) => {
      return { counter: currState.counter + 1 };
    });
  }
  render() {
    return (
      <div>
        <h2>Counter is {this.state.counter}</h2>
        <button onClick={this.handleClick}>Increment Counter by 1</button>
        <button onClick={this.handleTripleClick}>Increment Counter by 3</button>
      </div>
    );
  }
}
export default MyClicker;
