import React, { Component } from "react";
import Ball from "./Ball";
import "./App.css";
class App extends Component {
  render() {
    return (
      <div>
        <Ball />
        <h2>I am outside ball</h2>
      </div>
    );
  }
}
export default App;
