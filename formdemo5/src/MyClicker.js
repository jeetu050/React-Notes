import React, { Component } from "react";
class MyClicker extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 1 };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(step, e) {
    this.setState((currState) => ({ counter: currState.counter + step }));
  }

  render() {
    return (
      <div>
        <h2>Counter is: {this.state.counter}</h2>
        <button onClick={(e) => this.handleClick(1, e)}>Increment by 1</button>
        <button onClick={(e) => this.handleClick(2, e)}>Increment by 2</button>
        <button onClick={(e) => this.handleClick(3, e)}>Increment by 3</button>
      </div>
    );
  }
}
export default MyClicker;
