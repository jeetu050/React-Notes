import React, { Component } from "react";
import Lottery from "./Lottery";
class App extends Component {
  render() {
    return (
      <div>
        <Lottery />
        <Lottery name="Mini Lotto" numBalls={4} maxValue={10} />
        <Lottery name="Mini Lotto" maxValue={25} />
      </div>
    );
  }
}
export default App;
