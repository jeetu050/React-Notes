import ball from "./ball.jpg";
import React, { Component } from "react";

class Ball extends Component {
  render() {
    console.log(typeof ball);
    console.log(ball);
    return (
      <div>
        <h2>This is ball</h2>
        <img src={ball} />
      </div>
    );
  }
}
export default Ball;
