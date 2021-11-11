import React, { Component } from "react";
import MyInput from "./MyInput";
class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.compRef = React.createRef();
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    if (this.compRef.current.checkInput()) this.compRef.current.selectInput();
    else alert("Text is empty");
  }
  render() {
    return (
      <div>
        <MyInput ref={this.compRef} />
        <button onClick={this.handleClick}>Submit</button>
      </div>
    );
  }
}
export default MyComponent;
