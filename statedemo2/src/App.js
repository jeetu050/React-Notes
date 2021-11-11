import React, { Component } from "react";
import ShoppingCart from "./ShoppingCart";
class App extends Component {
  render() {
    return (
      <div>
        <ShoppingCart items={["OnePlus-Mobile", "FastTrack-Watch"]} />
      </div>
    );
  }
}
export default App;
