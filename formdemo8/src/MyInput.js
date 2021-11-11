import React, { Component } from "react";
class MyInput extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }
  checkInput() {
    return this.inputRef.current.value.length > 0;
  }
  selectInput() {
    this.inputRef.current.select();
  }
  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
      </div>
    );
  }
}
export default MyInput;
