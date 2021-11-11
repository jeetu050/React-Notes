import React, { Component } from "react";
import ComponentB from "./ComponentB";
export default class ComponentA extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Sachin",
    };
    console.log("Constructor() of Component A called");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("getDerivdeStateFromProps() of Component A called");
    return null;
  }
  componentDidMount() {
    console.log("componentDidMount()of Compnent A called");
  }
  render() {
    console.log("render()of Compnent A called");
    return (
      <div>
        <div>{this.state.name}</div>
        <div>
          <ComponentB />
        </div>
      </div>
    );
  }
}
