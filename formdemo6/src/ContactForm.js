import React, { Component } from "react";
class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.unameRef = React.createRef();
    this.uemailRef = React.createRef();
    this.upwdRef = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(evt) {
    evt.preventDefault();
    alert(
      "You typed \n" +
        this.unameRef.current.value +
        "\n" +
        this.uemailRef.current.value +
        "\n" +
        this.upwdRef.current.value
    );
    this.unameRef.current.value = "";
    this.uemailRef.current.value = "";
    this.upwdRef.current.value = "";
    this.unameRef.current.focus();
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="uname">Name</label>
          <br />
          <input type="text" id="uname" ref={this.unameRef} />
          <br />
          <label htmlFor="uemail">Email</label>
          <br />
          <input type="email" id="uemail" ref={this.uemailRef} />
          <br />
          <label htmlFor="upwd">Password</label>
          <br />
          <input type="password" id="upwd" ref={this.upwdRef} />
          <br />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
export default ContactForm;
