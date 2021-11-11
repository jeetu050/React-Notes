import React, { Component } from "react";
import MyInput from "./MyInput";
class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.ref.current.setFocus();
  }
  render() {
    return (
      <div>
        <MyInput ref={this.ref} />
        <button onClick={this.handleClick}>Submit</button>
      </div>
    );
  }
}
export default MyComponent;
