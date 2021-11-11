import React, { Component } from "react";

export default class ComponentB extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Amit",
    };
    console.log("Constructor() of Component B called");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("getDerivdeStateFromProps() of Component B called");
    return null;
  }
  componentDidMount() {
    console.log("componentDidMount()of Compnent B called");
  }
  render() {
    console.log("render()of Component B called");
    return <div>{this.state.name}</div>;
  }
}
