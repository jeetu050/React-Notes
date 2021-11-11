import React, { Component } from "react";
class MyInput extends Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }
  setFocus() {
    this.ref.current.focus();
  }
  render() {
    return (
      <div>
        <input type="text" ref={this.ref} />
      </div>
    );
  }
}
export default MyInput;
