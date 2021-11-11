import React, { Component } from "react";
import Student from "./Student";
class App extends Component {
  render() {
    return (
      <div>
        <Student roll={101} name="Amit" />
        <Student roll={102} name="Sumit" />
      </div>
    );
  }
}
export default App;
